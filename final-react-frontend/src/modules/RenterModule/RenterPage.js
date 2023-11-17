import { useEffect, useState, useMemo } from "react"
import RenterListComponent from "./renterList"
import { getAllRenters } from "../Services/Renter.Services"
import { useNavigate } from "react-router"
import Pagination from "../components/pagination"
import ModalPopup from "../components/ModalPopup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CreateAndUpdateProfileComponent from "./cuProfile"

const PageSize = 10
function RenterPage() {

    const [renters, setRenters] = useState([])
    const [searchMode, setSearchMode] = useState(2)
    const [openModal, setOpenModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [component, setComponent] = useState()
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
            if (data.length > 0) {

                setRenters(data)
            }
        })
    }
    function stringFiltering(stringValue) {
        let arr = renters
        if (searchMode === "1") {
            arr = arr.filter((renter) => renter.soCCCD.includes(stringValue))
            console.log(arr)
        } else {
            arr = arr.filter((renter) => renter.SDT.includes(stringValue))
            console.log(arr)
        }

        setRenters(arr)
        localStorage.setItem("currentPage", 0)

    }
    async function searchRenter() { //filter trực tiếp từ RenterList

        stringFiltering(textSearchValue)
    }
    function onSearchModeHandler(e) {
        console.log(searchMode)
        setSearchMode(e.target.value)
    }
    function openModalHandler(mode) {
        if (mode === "create") {
            setModalTitle("Thêm khách trọ")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: "create" }} />)
            setOpenModal(true)
        }
    }
    function closeModalHandler(event) {
        try {
            if (event.target.id === "close-modal-position") {
                console.log(
                    'CloseModal'
                )
                setOpenModal(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }
    }
    return (
        <>
            <h1 style={{
                fontWeight: "500",
                margin: "15px"
            }}>
                Danh sách khách trọ

            </h1>

            <div className="function" style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <button className="btn add-renter-btn" onClick={() => openModalHandler("create")} style={{
                    color: "black",
                    background: "#FFC745",
                    fontSize: "18px",
                    padding: "8px",
                    borderRadius: "10px"
                }}>
                    <span style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                        <FontAwesomeIcon icon={faPlus} style={{
                            border: "2px solid",
                            borderRadius: "5px",
                            padding: "3px",
                            marginRight: "5px"

                        }} /> Thêm khách trọ
                    </span>
                </button>
                <div className="filter">
                    <div>

                        <input type="text"
                            id="SDT-soCCCD"
                            placeholder={searchMode === "0" ? "Nhập số điện thoại" : "Nhập số CCCD/CMND"}
                            onChange={(e) => setTextSearchValue(e.target.value)}
                        />
                        <select onChange={onSearchModeHandler} defaultValue={searchMode} >
                            <option value={0}>
                                Số điện thoại
                            </option>
                            <option value={1}>
                                Số CCCD/CMND
                            </option>
                        </select>

                        <button onClick={searchRenter}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="renter-list" style={{
                padding: "10px 0",
            }}>
                <RenterListComponent renters={data} />
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

            {openModal ? <>
                <ModalPopup component={component} isOpen={openModal} closeModal={closeModalHandler} modalTitle={modalTitle} /> </> : <></>}
        </>
    )

}
export default RenterPage