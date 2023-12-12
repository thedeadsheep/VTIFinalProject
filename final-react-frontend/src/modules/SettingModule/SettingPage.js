import { useEffect, useState } from "react"
import PriceList from "./PriceList"
import { getCurrentPrice, getAllServicesPrice } from "../Services/ServicePrice.Services"
import { getAllRoomCanEditStat } from "../Services/Room.Services"
import PriceHistory from "./priceHistory"
import AddRecord from "../RoomModule/addRecord"
import ModalPopup from '../components/ModalPopup'

function SettingPage() {

    const [priceHistory, setPriceHistory] = useState([])
    const [priceList, setPriceList] = useState({})
    useEffect(() => {
        getPriceList()
        getHistory()

    }, [])
    async function getHistory() {
        await getAllServicesPrice().then((res) => {
            setPriceHistory(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    async function getPriceList() {
        await getCurrentPrice().then((res) => {

            setPriceList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <h1>
                SettingPage
            </h1>
            <div id="price" style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr"
            }}>
                <div style={{
                    marginRight: "2px"
                }}>
                    <PriceList priceList={priceList} />
                </div>
                <div>
                    <PriceHistory list={priceHistory} />
                </div>
                <div style={{
                    gridColumn: "1 / span 2"
                }}>
                    <RoomListForCinfig />
                </div>
            </div>


        </>
    )
}
export default SettingPage

function RoomListForCinfig() {

    const [roomList, setRoomList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState(<></>)
    const [modalTitle, setModalTitle] = useState()
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await getAllRoomCanEditStat().then(res => {
            console.log(res)
            setRoomList(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    function openModal(state, room) {
        let aR = {
            room_id: room.room_id,
            room_name: room.room_name,
            chiSoGanNhat: {
                room_id: room.room_id,
                elecNumber: room.currentStats.elecNumber,
                waterNumber: room.currentStats.waterNumber
            }
        }
        console.log(room)
        if (state === "addRoomRecord") {
            setModalTitle("Ghi Điện nước")
            setComponent(<AddRecord room={aR} phiaSau={true} />)
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
            <p>
                Điều chỉnh chỉ số phòng
            </p>
            <table style={{
                width: "100%"
            }}>
                <tbody>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Phòng
                        </th>
                        <th>
                            Chỉ số điện
                        </th>
                        <th>
                            Chỉ số nước
                        </th>
                        <th>
                            Điều chỉnh chỉ số
                        </th>
                    </tr>
                    {roomList ?
                        roomList.map(room => (
                            <tr key={room.room_id}>
                                <td>
                                    {room.room_id}
                                </td>
                                <td>
                                    {room.room_name}
                                </td>
                                <td>
                                    {parseInt(room.currentStats.elecNumber) < 0 ? "0" : room.currentStats.elecNumber}
                                </td>
                                <td>
                                    {parseInt(room.currentStats.waterNumber) < 0 ? "0" : room.currentStats.waterNumber}
                                </td>
                                <td>
                                    <button onClick={() => openModal("addRoomRecord", room)}>
                                        Cập nhật chỉ số
                                    </button>
                                </td>
                            </tr>
                        ))
                        : <></>}
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