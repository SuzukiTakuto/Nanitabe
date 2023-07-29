import { useSelector } from "react-redux";
import { TopScreenStateType } from "./topScreenComponents/type";
import { HOTPEPPER_API_KEY } from "@env";

export const fetchData = async () => {
    console.log("fetch")
    let reqURL = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${HOTPEPPER_API_KEY}&`;

    const isNow = useSelector((state: TopScreenStateType) => state.isNow);
    const station = useSelector((state: TopScreenStateType) => state.station);

    if (isNow) {
        
    } else if (!isNow && station !== "") {
        reqURL += `keyword=${station}`;
    }

    try {
        const res = await fetch(reqURL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}