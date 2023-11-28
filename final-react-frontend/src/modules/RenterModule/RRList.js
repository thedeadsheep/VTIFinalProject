import { useEffect, useState, useMemo } from 'react'
import { getRenterWithRelative } from '../Services/Renter.Services'
import ModalPopup from '../components/ModalPopup'
import styles from './RRList.module.css'
import CreateAndUpdateProfileComponent from './cuProfile';
import MoveOut from "./moveout";
import PrintComponent from '../components/PrintComponent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export default function RenterRelativeComponent() {

    const [rentersData, setRentersData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await getRenterWithRelative().then((res) => {
            console.log(res)
            if (res.status === 200) {
                setRentersData(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <RenterAndRealativeList list={rentersData} />
        </div>
    )
}



function RenterAndRealativeList(props) {
    const data = props.list.sort((a, b) => a.room.rId - b.room.rId) || {}

    const [filterValue, setFilterValue] = useState("nothing")
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    const exportData = useMemo(() => {

        return data.filter((renter) => filterFuntion(renter, filterValue))
    }, [filterValue, data])
    function filterFuntion(renter, filterValue) {
        if (filterValue === "nothing")
            return true
        return renter.room.rId === filterValue
    }

    function openModal(state, renter_id) {
        if (state === "createRelative") {
            setModalTitle("Thêm Khách trọ")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: 'create', LINK_WITH: renter_id }} />)
            setIsOpen(true)
        }
        if (state === "create") {
            setModalTitle("Thêm khách trọ")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: "create" }} />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp(event) {
        console.log(event)
        try {
            if (event.target.id === "close-modal-position") {
                console.log(
                    'CloseModal'
                )
                setIsOpen(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }

    }
    return (
        <div>
            <h1 onClick={console.log(data)}>
                Danh sách khách ở trọ
            </h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <button className="btn add-renter-btn" onClick={() => openModal("create")} style={{
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
                <select>
                    <option>
                        Lọc nội dung theo phòng
                    </option>
                </select>
            </div>

            {exportData.map((renter) => (
                <div key={renter.id}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <h3>
                            {renter.room.name}
                        </h3>

                        <button style={{
                            height: "35px",
                            backgroundColor: "#F9D949"
                        }}
                            onClick={() => openModal("createRelative", renter.id)}
                        >
                            Thêm Người ở chung
                        </button>
                    </div>

                    <div className={styles.tableWrap}>
                        <div className={`${styles.displayRow} ${styles.title} `}>
                            <div>Họ và tên</div>
                            <div>Số điện thoại</div>
                            <div>Số CCCD/CMND</div>
                            <div>Chức năng</div>
                        </div>
                        <DataDisplay data={renter} />
                        <div className={styles.RL}>
                            {renter.RL.length > 0 ? <div>
                                {renter.RL.map((rr) => (
                                    <div key={rr.id} className={styles.childRow}>
                                        <DataDisplay data={rr} />
                                    </div>
                                ))}
                            </div> : <></>}
                        </div>
                    </div>

                </div>
            ))}
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />

        </div>
    )
}
function DataDisplay(props) {
    const data = props.data || {}
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    const [isPrint, setIsPrint] = useState(false)

    function openModal(state, room_id) {
        if (state === "createRelative") {
            setModalTitle("Thêm Khách trọ")
            setComponent()
            setIsOpen(true)
        } else if (state === "updateProfile") {
            setModalTitle("Cập nhật thông tin")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: 'update' }} renter={data} />)
            setIsOpen(true)
        } else if (state === "MovingOut") {
            setModalTitle("Xác nhận chuyển đi")
            setComponent(<MoveOut renter={data} renterRL={data.RL} />)
            setIsOpen(true)
        } else if (state === "Contract") {
            setModalTitle("Hợp đồng")
            setComponent(<PrintComponent data={data} room_id={room_id} />)
            setIsOpen(true)
            setIsPrint(true)
        }
    }
    function closeModalPopUp(event) {
        console.log(event)
        try {
            if (event.target.id === "close-modal-position") {
                console.log(
                    'CloseModal'
                )
                setIsOpen(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }

    }

    return (
        <div>
            <div className={styles.displayRow}>
                <div className={styles.name}>
                    {`${data.ho_tenlot} ${data.ten}`}
                </div>
                <div>
                    {`${data.SDT}`}
                </div>
                <div>
                    {data.soCCCD ? `${data.soCCCD}` : "Khong co"}

                </div>
                <div className={styles.functionCol}>
                    {!data.link_with ? <button
                        className={styles.functionButton}
                        onClick={() => openModal("Contract", data.room.rId)}
                    >
                        Hợp đồng
                    </button> : ""}

                    <button
                        className={styles.functionButton}
                        onClick={() => openModal("updateProfile")}
                    >
                        Cập nhật
                    </button>
                    <button
                        className={styles.functionButton}
                        onClick={() => openModal("MovingOut")}
                    >
                        Chuyển đi
                    </button>
                </div>

            </div>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle}
                isPrint={isPrint}
            />
        </div>


    )
}