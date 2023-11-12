import { useEffect, useState } from "react"
import LoadingComponent from "../components/loading"
import CreateAndUpdatePrice from "./CUPrice"
import PriceList from "./PriceList"
import { getAllServicesPrice } from "../Services/ServicePrice.Services"




function SettingPage() {

    const [priceList, setPriceList] = useState([])
    useEffect(() => {
        getPriceList()
    }, [])
    async function getPriceList() {
        await getAllServicesPrice().then((res) => {
            console.log(res.data)
            setPriceList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <h1>
                SettingPage


            </h1>
            <CreateAndUpdatePrice state={{
                MODE: "create"
            }} />
            <PriceList priceList={priceList} />
        </>
    )
}
export default SettingPage