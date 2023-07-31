import { HOTPEPPER_API_KEY } from "@env";
import { XMLParser, XMLBuilder } from "fast-xml-parser";

export const fetchData = async (isNow: boolean, station: string) => {
    const xp = new XMLParser();

    let reqURL = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&`;

    if (isNow) {
        
    } else if (!isNow && station !== "") {
        reqURL += `keyword=${station}`;
    }

    try {
        const res = await fetch(reqURL);
        const data = await res.text();
        const jObj = xp.parse(data);
        return jObj.results.shop;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}