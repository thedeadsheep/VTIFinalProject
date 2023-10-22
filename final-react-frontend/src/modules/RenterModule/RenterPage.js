import { useEffect, useState } from "react"
import CreateAndUpdateProfileComponent from "./components/cuProfile"
import RenterListComponent from "./components/renterList"
import { getAllRenters } from "../Services/Renter.Services"

function RenterPage() {

    const [renters, setRenters] = useState([])
    const [isLoadList, setIsLoadList] = useState(false)

    useEffect(() => {
        getRenters()

    }, [])
    useEffect(() => {
        if (renters.length > 0)
            setIsLoadList(true)

    }, [renters])
    async function getRenters() {
        getAllRenters().then((data) => {
            console.log(data)
            setRenters(data)
        })


    }
    return (
        <>
            <h1>
                RenterPage

            </h1>

            {isLoadList ? <RenterListComponent title="Dach Sach Nguoi thue phong" renters={renters} />
                : <><h1>Khong co khach hang nao ca</h1></>}

        </>
    )

}
export default RenterPage