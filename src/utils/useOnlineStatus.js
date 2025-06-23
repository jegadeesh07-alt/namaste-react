import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [ onlineStatus, setOflineStatus ] = useState(true)

    useEffect(() => {
        window.addEventListener("offline", () => {
           setOflineStatus(false)
        })
        window.addEventListener("online", () => {
            setOflineStatus(true)
        })
    }, [])



    return onlineStatus;

}

export default useOnlineStatus