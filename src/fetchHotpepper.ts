import { HOTPEPPER_API_KEY } from "@env";
import { XMLParser } from "fast-xml-parser";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const fetchData = async (isNow: boolean, station: string, price: number, coords: {
    latitude: number;
    longitude: number;
}) => {
    const xp = new XMLParser();

    let reqURL = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&range=2&count=100&`;

    if (isNow) {
        reqURL += `lat=${coords.latitude}&lng=${coords.longitude}`;
    } else if (!isNow && station !== "") {
        reqURL += `keyword=${station}`;
    }

    try {
        console.log(reqURL)
        const res = await fetch(reqURL);
        const data = await res.text();
        const jObj = xp.parse(data);
        const shops = jObj.results.shop.filter((shop: any) => {
            const maxPrice = getMaxPrice(shop.budget.name);
            
            return maxPrice <= price;
        })
        console.log(shops.length)
        return shops;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

const getMaxPrice = (priceRange: string) => {
    const price = priceRange.split("円")[0].split("～")[1];
    const price2 = priceRange.split("円")[0].split("～")[0];

    return Number(price);
}