import { useEffect, useState } from "react"
import ModalPopup from '../components/ModalPopup'
import AddBill from "./addBill"
import BillListOfRoom from "./billListOfRoom"
import PrintReceipt from "./printReceipt"
import { getBillPage } from "../Services/Bill.Services"
import AllBills from "./allBills"

export default function BillPage() {

    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState(<></>)
    const [modalTitle, setModalTitle] = useState()
    const [roomList, setRoomList] = useState([])
    useEffect(() => {
        getData()
    }, [])
    function openModal(state, room) {
        if (state === "printBill") {
            setModalTitle("In phiếu thu")
            setComponent(<PrintReceipt />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp(event) {
        try {
            if (event.target.id === "close-modal-position") {
                setIsOpen(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }
    }
    async function getData() {
        await getBillPage().then(res => {
            console.log("BP", res)
            setRoomList(res.data)
        })
    }
    return (
        <div>

            <div>
                <div style={{
                    padding: "5px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <p>
                        Danh sách phòng
                    </p>
                    <button onClick={() => openModal("printBill")}
                        style={{
                            height: "50px",
                            minWidth: "100px",
                            background: "#f9d949"
                        }}
                    >
                        In phiếu thu
                    </button>
                </div>
                <RoomList roomList={roomList} />
                <AllBills />
            </div>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />
        </div>
    )
}

function RoomList(props) {
    const rl = props.roomList || []
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState(<></>)
    const [modalTitle, setModalTitle] = useState()
    function openModal(state, room) {
        if (state === "createBill") {
            setModalTitle("Tạo hóa đơn")
            setComponent(<AddBill room_id={room.room_id} />)
            setIsOpen(true)
        } else if (state === "showAllBillsOfRoom") {

            setModalTitle(`Danh sách hóa đơn ${room.name}`)
            setComponent(<BillListOfRoom room_id={room.room_id} />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp(event) {
        console.log(event)
        try {
            if (event.target.id === "close-modal-position") {
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
                            Hóa đơn
                        </th>
                        <th >
                            Chức năng
                        </th>
                    </tr>
                    {rl.map((room) => (
                        <tr key={room.room_id}>
                            <th>
                                {room.room_id}
                            </th>
                            <td>
                                {room.room_name}
                            </td>
                            <td style={{
                                color: room.canCreateBill ? "green" : "red",
                                textAlign: "center"
                            }}>
                                {room.canCreateBill ? "Có thể tạo Hóa đơn" : "không thể tạo hóa đơn"}
                            </td>
                            <td style={{
                                display: "flex",
                                justifyContent: "flex-end",

                            }}>
                                {room.canCreateBill ?
                                    <button onClick={() => openModal("createBill", room)}>
                                        Tạo hóa đơn
                                    </button>
                                    : <></>
                                }
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