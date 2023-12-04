import { useEffect } from "react"
import { useState } from "react"
import ModalPopup from '../components/ModalPopup'
import { getRSOfOCCRoom } from "../Services/Room.Services"
import AddRecord from "./addRecord"
import RecordHistory from "./recordHistory"
export default function RoomRecord() {

    const [roomList, setRoomList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState(<></>)
    const [modalTitle, setModalTitle] = useState()
    useEffect(() => {
        getData()
    }, [])
    function getData() {
        getRSOfOCC()
    }
    async function getRSOfOCC() {
        await getRSOfOCCRoom().then((res) => {
            setRoomList(JSON.parse(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }

    function openModal(state, room) {
        if (state === "addRoomRecord") {
            setModalTitle("Ghi Điện nước")
            setComponent(<AddRecord room={room} />)
            setIsOpen(true)
        } else if (state === "showHistory") {
            setModalTitle("Lịch sử ghi")
            setComponent(<RecordHistory room={room.lichSuGhi} />)
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
            <h2>
                Ghi Điện nước
            </h2>
            <table>
                <tbody>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Tên Phòng
                        </th>

                        <th>
                            Chức năng
                        </th>
                    </tr>
                    {roomList.map((room) => (
                        <tr key={room.room_id}>
                            <td>
                                {room.room_id}
                            </td>
                            <td>
                                {room.roomName}
                            </td>
                            <td>
                                <button onClick={() => openModal("addRoomRecord", room)}>
                                    Ghi diện nước
                                </button>

                                <button onClick={() => openModal("showHistory", room)}>
                                    Lịch sử
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