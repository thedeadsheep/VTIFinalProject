import { useEffect, useState } from "react"
import PriceList from "./PriceList"
import { getCurrentPrice, getAllServicesPrice } from "../Services/ServicePrice.Services"
import PriceHistory from "./priceHistory"


function SettingPage() {

    const [priceHistory, setPriceHistory] = useState([])
    const [priceList, setPriceList] = useState({})
    useEffect(() => {
        getPriceList()
        getHistory()

    }, [])
    async function getHistory() {
        await getAllServicesPrice().then((res) => {
            console.log(res.data)
            setPriceHistory(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    async function getPriceList() {
        await getCurrentPrice().then((res) => {
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
            <div id="price" style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{
                    marginRight: "2px"
                }}>
                    <PriceList priceList={priceList} />
                </div>
                <div>
                    <PriceHistory list={priceHistory} />
                </div>
            </div>


        </>
    )
}
export default SettingPage