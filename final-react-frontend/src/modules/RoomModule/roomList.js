import styles from "./roomList.module.css"
import ModalPopup from "../components/ModalPopup"
import CreateAndUpdateRoom from "./addRoom"
import { useState } from "react"
function RoomList() {
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    const data = [
        {
            id: "1",
            name: "Phong 1",
            roomPrice: "1000000",
            roomStatus: "Trống",
        },
        {
            id: "2",
            name: "Phong 2",
            roomPrice: "1000000",
            roomStatus: "Có người ở",
        },
        {
            id: "3",
            name: "Phong 3",
            roomPrice: "1000000",
            roomStatus: "Trống",
        },
        {
            id: "4",
            name: "Phong 4",
            roomPrice: "1000000",
            roomStatus: "Đang sửa chữa",
        },
        {
            id: "5",
            name: "Phong 5",
            roomPrice: "1000000",
            roomStatus: "Có người ở",
        }
    ]
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
    function closeModalPopUp() {
        setIsOpen(!isOpen)
        setComponent(<></>)
        setModalTitle("")
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
                            <tr className={`${styles.dataRow}`} key={room.id}>
                                <td>
                                    {room.name}
                                </td>
                                <td
                                    className={room.roomStatus === "Trống" ?
                                        `${styles.phongTrong}` :
                                        room.roomStatus === "Có người ở" ?
                                            `${styles.coNguoi}` : `${styles.dangSuaChua}`}>
                                    {room.roomStatus}
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