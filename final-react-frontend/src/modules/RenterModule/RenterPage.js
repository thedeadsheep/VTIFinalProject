import { useEffect, useState, useMemo } from "react"
import RenterListComponent from "../components/renterList"
import { getAllRenters } from "../Services/Renter.Services"
import { useNavigate } from "react-router"
import Pagination from "../components/pagination"
import DatePicker, { DateObject } from "react-multi-date-picker"
const PageSize = 10

const format = "MMM DD, YYYY"
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
    function stringFiltering(stringValue) {
        let arr = renters
        if (searchMode === "1") {
            arr = arr.filter((renter) => renter.soCCCD.includes(stringValue))
            console.log(arr)
        } else {
            arr.forEach(renter => {
                renter.hoten = renter.ho_tenlot + " " + renter.ten
            })
            arr = arr.filter((renter) => renter.hoten.includes(stringValue))
            console.log(arr)
        }

        setRenters(arr)
        localStorage.setItem("currentPage", 0)

    }
    function doubleDateFiltering(DD) {
        DD.from = new Date(DD.from)
        DD.to = new Date(DD.to)
        DD.to.setDate(DD.to.getDate() + 1)
        let arr = renters
        arr = arr.filter((renter) => {
            const stringDate = renter.ngay_chuyen_vao
            const dateS = new Date(stringDate)
            return dateS >= DD.from && dateS <= DD.to
        })

        setRenters(arr)
        localStorage.setItem("currentPage", 0)
    }
    async function searchRenter() { //filter trực tiếp từ RenterList

        if (searchMode === 2) {
            doubleDateFiltering(getDatevalue())
            return
        } else {
            console.log(textSearchValue)
            stringFiltering(textSearchValue)
        }
    }
    function getDatevalue() {
        return {
            from: dateValue[0].format(),
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

            <div className="function" style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 50px"
            }}>
                <button className="btn add-renter-btn" onClick={() => navigate("addrenter")}>
                    them khach tro
                </button>
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
                                Tên
                            </option>
                            <option value={1}>
                                Số CCCD/CMND
                            </option>
                            <option value={2}>
                                Ngày đăng ký lưu trú
                            </option>
                        </select>

                        <button onClick={searchRenter}>
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>

            <div className="renter-list" style={{
                padding: "10px",
            }}>
                <RenterListComponent title="Dach Sach Nguoi thue phong" renters={data} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Pagination
                    currentPage={currentPage}
                    pageChange={onPageChange}
                    numberOfItems={renters.length}
                    showNumbers={PageSize}
                >
                </Pagination>
            </div>


        </>
    )

}
export default RenterPage