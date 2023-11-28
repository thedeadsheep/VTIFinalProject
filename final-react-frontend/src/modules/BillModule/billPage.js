import { useEffect, useState } from "react"
import { getNotEmptyRoom } from "../Services/Room.Services"

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
            BillPage
            <RoomList roomList={roomList} />
        </div>
    )
}

function RoomList(props) {
    const rl = props.roomList
    return (

        <div>
            <button onClick={() => console.log(rl)}>
                tét
            </button>
            <table style={{
                width: "100%"
            }}>
                <tbody>
                    <tr>
                        <th>
                            Tên Phòng
                        </th>
                        <th>
                            Chức năng
                        </th>
                    </tr>
                    {rl.map((room) => (
                        <tr key={room.rId}>
                            <td>
                                {room.name}
                            </td>
                            <td style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                <button>
                                    Xuất Hóa đơn
                                </button>

                                <button>
                                    Xem tất cả hóa đơn
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}