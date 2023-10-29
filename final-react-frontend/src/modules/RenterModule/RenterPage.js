import { useEffect, useState, useMemo } from "react"
import RenterListComponent from "../components/renterList"
import { getAllRenters } from "../Services/Renter.Services"
import { useNavigate } from "react-router"
import Pagination from "../components/pagination"

const PageSize = 4

function RenterPage() {

    const [renters, setRenters] = useState([])

    const [currentPage, setCurrentPage] = useState()
    let data = useMemo(() => {
        const firstPageIndex = (currentPage) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return renters.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, renters])
    const navigate = useNavigate()
    useEffect(() => {
        getRenters()

    }, [])
    useEffect(() => {
        if (renters.length > 0) {
            setCurrentPage(localStorage.getItem("currentPage") || 0)
        }
    }, [renters])
    function onPageChange(page) {
        console.log(page)
        setCurrentPage(page)
    }
    async function getRenters() {
        await getAllRenters().then((data) => {

            setRenters(data)
        })
    }

    return (
        <>
            <h1>
                RenterPage

            </h1>

            <div className="function">
                <button className="btn add-renter-btn" onClick={() => navigate("addrenter")}>
                    them khach tro
                </button>
            </div>
            <div className="renter-list">
                <RenterListComponent title="Dach Sach Nguoi thue phong" renters={data} />
            </div>

            <Pagination
                currentPage={currentPage}
                pageChange={onPageChange}
                numberOfItems={renters.length}
                showNumbers={PageSize}
            >
            </Pagination>

        </>
    )

}
export default RenterPage