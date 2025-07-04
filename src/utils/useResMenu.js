import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const data = await fetch(MENU_API + resId ) 
        const json = await data.json()
        setResInfo(json.data)
        console.log(json);
        
    }
    return resInfo;
}
export default useResMenu