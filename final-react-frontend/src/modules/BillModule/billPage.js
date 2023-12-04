import { useEffect, useState } from "react"
import { getNotEmptyRoom } from "../Services/Room.Services"
import ModalPopup from '../components/ModalPopup'
import AddBill from "./addBill"
import BillList from "./billList"

export default function BillPage() {


    const [roomList, setRoomList] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await getNotEmptyRoom().then((res) => {
            console.log(res)
            setRoomList(res.data)
        })
    }
    return (
        <div>
            <RoomList roomList={roomList} />
        </div>
    )
}

function RoomList(props) {
    const rl = props.roomList
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState(<></>)
    const [modalTitle, setModalTitle] = useState()
    function openModal(state, room) {
        if (state === "createBill") {
            setModalTitle("Tạo hóa đơn")
            setComponent(<AddBill room_id={room.rId} />)
            setIsOpen(true)
        } else if (state === "showAllBillsOfRoom") {

            setModalTitle(`Danh sách hóa đơn ${room.name}`)
            setComponent(<BillList room_id={room.rId} />)
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
            <table style={{
                width: "100%"
            }}>
                <tbody>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Tên Phòng
                        </th>
                        <th>
                            Chức năng
                        </th>
                    </tr>
                    {rl.map((room) => (
                        <tr key={room.rId}>
                            <th>
                                {room.rId}
                            </th>
                            <td>
                                {room.name}
                            </td>
                            <td style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                <button onClick={() => openModal("createBill", room)}>
                                    Tạo hóa đơn
                                </button>
                                <button onClick={() => openModal("showAllBillsOfRoom", room)}>
                                    Xem tất cả hóa đơn
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />
        </div>
    )
}