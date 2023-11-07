import styles from "./roomList.module.css"
import ModalPopup from "../components/ModalPopup"
import CreateAndUpdateRoom from "./addRoom"
import { useState } from "react"
function RoomList(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    let data = props.rooms || []

    async function changeRoomStatus(room) {
        let status = room.roomStatus === "Đang sửa chữa" ? "Trống" : "Đang sửa chữa"
        if (window.confirm(`Bạn muốn thay đổi xang trạng thái ${status}`)) {
            console.log("đang tiến hành", status)
        }
    }
    function openModal(state, room) {
        console.log(room)
        if (state === "update") {
            setModalTitle("Cập nhật thông tin")
            setComponent(
                <CreateAndUpdateRoom
                    state={{
                        MODE: 'update',
                        defaultValues: room
                    }} />
            )
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
    if (data.length <= 0) {
        return (
            <div>
                Không có dữ liệu
            </div>
        )
    }
    return (
        <div style={{
            width: "100%"
        }}>
            <table className={`${styles.table}`}>
                <tbody >
                    <tr className={`${styles.data}`}>
                        <th>
                            Tên phòng
                        </th>
                        <th>
                            trạng thái
                        </th>
                        <th className={`${styles.function}`}>
                            Chức năng
                        </th>
                    </tr>
                    {
                        data.map(room => (
                            <tr className={`${styles.dataRow}`} key={room.rId}>
                                <td>
                                    {room.name}
                                </td>
                                <td
                                    className={room.roomStatus === "0" ?
                                        `${styles.phongTrong}` :
                                        room.roomStatus === "1" ?
                                            `${styles.coNguoi}` : `${styles.dangSuaChua}`}>
                                    {room.roomStatus === "0" ? "Phòng Trống" : room.roomStatus === "1" ? "Phòng có người" : "Phòng đang sửa chữa"}
                                </td>
                                <td className={`${styles.function}`}>
                                    <button onClick={() => openModal("update", room)}>
                                        cập nhật chi tiết
                                    </button>
                                    <button onClick={() => changeRoomStatus(room)}>
                                        sửa chữa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>

            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />
        </div >

    )
}
export default RoomList