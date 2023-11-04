import RoomList from "./roomList"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import styles from "./roompage.module.css"
import AddRoom from "./addRoom"
import ModalPopup from "../components/ModalPopup"
import { useState } from "react"
function RoomPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()

    function openComponent(state) {
        if (state === 1) {
            setComponent(<AddRoom />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp() {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <h1>
                Quản lý phòng trọ
            </h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <div
                    className={styles.addRoom}>
                    <button onClick={() => openComponent(1)}
                    >
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                            Thêm Phòng
                        </span>
                    </button>
                </div>
                <div style={{
                    paddingLeft: "30px",
                    width: "550px",
                    margin: "0 20px"

                }}>
                    <RoomList />
                </div>
            </div>
            <ModalPopup isOpen={isOpen} closeModal={closeModalPopUp} component={component} />
        </div>
    )

}
export default RoomPage