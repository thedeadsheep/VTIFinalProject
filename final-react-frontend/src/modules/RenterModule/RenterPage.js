import { useEffect, useState } from "react"
import CreateAndUpdateProfileComponent from "../components/cuProfile"
import RenterListComponent from "../components/renterList"
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
        await getAllRenters().then((data) => {
            console.log(data)
            setRenters(data)
        })
    }

    return (
        <>
            <h1>
                RenterPage

            </h1>

            <div className="function">
                <button className="btn add-renter-btn">
                    them khach tro
                </button>
            </div>
            <div className="renter-list">
                <RenterListComponent title="Dach Sach Nguoi thue phong" renters={renters} />
            </div>


        </>
    )

}
export default RenterPage