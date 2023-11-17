import { useEffect, useState, useMemo } from 'react'
import { getRenterWithRelative } from '../Services/Renter.Services'
import ModalPopup from '../components/ModalPopup'
import styles from './RRList.module.css'
import CreateAndUpdateProfileComponent from './cuProfile';
import MoveOut from "./moveout";
function dateConvert(dS, isWithTime) {
    let m = new Date(dS)

    let dateString
    if (isWithTime) {
        dateString =

            "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
            ("0" + m.getDate()).slice(-2) + ", " +
            m.getFullYear() + " - " +
            ("0" + m.getHours()).slice(-2) + ":" +
            ("0" + m.getMinutes()).slice(-2) + ":" +
            ("0" + m.getSeconds()).slice(-2);
    } else {
        dateString =
            "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
            ("0" + m.getDate()).slice(-2) + ", " +
            m.getFullYear()
    }

    return dateString
}



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
    const data = props.list || {}
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
                Danh sach khach tro con o
            </h1>
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
                            Them nguoi o chung
                        </button>
                    </div>

                    <div className={styles.tableWrap}>
                        <div className={`${styles.displayRow} ${styles.title} `}>
                            <div>Ho va ten</div>
                            <div>So dien thoai</div>
                            <div>so cccd</div>
                            <div> chuc nang</div>
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
    function openModal(state) {
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
                    <button
                        className={styles.functionButton}
                        onClick={() => openModal("updateProfile")}
                    >
                        cap nhat
                    </button>
                    <button
                        className={styles.functionButton}
                        onClick={() => openModal("MovingOut")}
                    >
                        Chuyen di
                    </button>
                </div>

            </div>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />
        </div>


    )
}