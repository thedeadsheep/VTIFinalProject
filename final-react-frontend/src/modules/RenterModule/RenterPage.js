import { useEffect, useState, useMemo } from "react"
import RenterListComponent from "../components/renterList"
import { getAllRenters } from "../Services/Renter.Services"
import { useNavigate } from "react-router"
import Pagination from "../components/pagination"
import DatePicker, { DateObject } from "react-multi-date-picker"
const PageSize = 4

const format = "YYYY/MM/DD"
function RenterPage() {

    const [renters, setRenters] = useState([])

    const [searchMode, setSearchMode] = useState(2)
    const [dateValue, setDateValue] = useState([
        new DateObject().subtract(2, "days"),
        new DateObject().add(2, "days")
    ])
    const [textSearchValue, setTextSearchValue] = useState("")
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
    function searchRenter() { //filter trực tiếp từ RenterList
        if (searchMode === "2") {
            console.log(getDatevalue())
            return
        } else {
            console.log(textSearchValue)
        }
    }
    function getDatevalue() {
        return {
            form: dateValue[0].format(),
            to: dateValue[1].format()
        }
    }
    function onSearchModeHandler(e) {
        console.log(searchMode)
        setSearchMode(e.target.value)
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
            <div className="filter">
                <div>
                    {searchMode === "1" || searchMode === "0" ?
                        <input type="text"
                            id="name-soCCCD"
                            placeholder={searchMode === "0" ? "Nhap ten" : "Nhap so CCCD"}
                            onChange={(e) => setTextSearchValue(e.target.value)}
                        />
                        :
                        <DatePicker
                            range
                            value={dateValue}
                            onChange={setDateValue}
                            format={format}
                        />
                    }
                    <select onChange={onSearchModeHandler} defaultValue={searchMode} >
                        <option value={0}>
                            Ten
                        </option>
                        <option value={1}>
                            soCCCD
                        </option>
                        <option value={2}>
                            Ngay dang ki
                        </option>
                    </select>

                    <button onClick={searchRenter}>
                        Tìm kiếm
                    </button>
                </div>
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