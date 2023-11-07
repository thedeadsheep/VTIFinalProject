import RoomList from "./roomList"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import styles from "./roompage.module.css"
import CreateAndUpdateRoom from "./addRoom"
import ModalPopup from "../components/ModalPopup"
import { useEffect, useState } from "react"
import { getAllRoom } from "../Services/Room.Services"
function RoomPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    const [roomList, setRoomList] = useState([])
    useEffect(() => {
        getRoomList()
    }, [])
    async function getRoomList() {
        await getAllRoom().then((res) => {
            console.log(res)
            if (res.data.length > 0)
                setRoomList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    function openModal(state) {
        if (state === "create") {
            setModalTitle("Thêm Phòng")
            setComponent(<CreateAndUpdateRoom state={{ MODE: 'create' }} />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp(event) {
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
            <h1>
                Quản lý phòng trọ
            </h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr"
            }}>
                <div
                    className={styles.function}>
                    <button onClick={() => openModal("create")}
                    >
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                            Thêm Phòng
                        </span>
                    </button>
                </div>
                <div className={styles.roomList} style={{
                    paddingLeft: "30px",
                    width: "auto",
                    margin: "0 20px"
                }}>
                    <RoomList rooms={roomList} />
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
export default RoomPage