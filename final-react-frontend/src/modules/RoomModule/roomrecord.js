import { useEffect } from "react"
import { useState } from "react"
import ModalPopup from '../components/ModalPopup'
import { getNotEmptyRoom } from "../Services/Room.Services"
import AddRecord from "./addRecord"
export default function RoomRecord() {

    const [roomList, setRoomList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    useEffect(() => {
        getData()
    }, [])
    function getData() {
        getRoomList()
    }
    async function getRoomList() {
        await getNotEmptyRoom().then((res) => {
            console.log(res)
            setRoomList(res.data)
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
            setComponent()
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
            Room list
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
                        <tr>
                            <td>
                                {room.rId}
                            </td>
                            <td>
                                {room.name}
                            </td>
                            <td>
                                <button onClick={() => openModal("addRoomRecord", room)}>
                                    Ghi diện nước
                                </button>
                                <button onClick={() => openModal("showHistory", room.rId)}>
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