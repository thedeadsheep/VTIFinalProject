import { deleteRoomRecord } from "../Services/Room.Services"


export default function RecordHistory(props) {
    let roomHistory = props.room
    console.log(roomHistory)
    roomHistory.sort((a, b) => b.recordDate - a.recordDate)

    function dateConverter(date) {
        if (date) {
            return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`
        }
        return ""
    }
    async function deleteRecord(record) {
        await deleteRoomRecord(record.room_id, record.recordDate).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            window.location.reload()
        })
    }
    return (
        <div>
            <table style={{
                borderLeft: "none",
                textAlign: "center"
            }}>
                <tbody>
                    <tr>
                        <th >
                            Stt
                        </th>
                        <th>
                            Số điện
                        </th>
                        <th>
                            Số nước
                        </th>
                        <th>
                            Thời gian ghi
                        </th>
                        <th>
                            Xóa bản ghi
                        </th>
                    </tr>
                    {roomHistory.map((item) => (
                        <tr style={{
                            color: item.isCommited ? "green" : "red"

                        }}
                            key={item.recordDate}>
                            <td>
                                {roomHistory.indexOf(item) + 1}
                            </td>
                            <td>{item.elecNumber}
                            </td>
                            <td>
                                {item.waterNumber}
                            </td>
                            <td>
                                {dateConverter(item.recordDate)}
                            </td>
                            {item.isCommited ? <></> : <td>
                                <button onClick={() => deleteRecord(item)}>
                                    Xóa bản ghi
                                </button>
                            </td>}
                        </tr>
                    ))}
                </tbody>


            </table>

        </div>
    )


}