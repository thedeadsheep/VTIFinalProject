import RoomList from "./roomList"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import styles from "./roompage.module.css"
import CreateAndUpdateRoom from "./addRoom"
import ModalPopup from "../components/ModalPopup"
import { useState } from "react"
function RoomPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    function openComponent(state) {
        if (state === "create") {
            setModalTitle("Thêm Phòng")
            setComponent(<CreateAndUpdateRoom state={{ MODE: 'create' }} />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp() {
        setIsOpen(!isOpen)
        setComponent(<></>)
        setModalTitle("")
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
                    <button onClick={() => openComponent("create")}
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
                    <RoomList />
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