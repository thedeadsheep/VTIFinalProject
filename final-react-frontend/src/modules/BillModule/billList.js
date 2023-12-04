import { useEffect } from "react"
import { useState } from "react"
import { getAllBillsByRoomId } from "../Services/Bill.Services"

export default function BillList(props) {
    const room_id = props.room_id
    const [loading, setLoading] = useState(true)
    const [billList, setBillList] = useState([])
    useEffect(() => {
        getBillList()
    }, [])
    useEffect(() => {

    }, [loading])
    async function getBillList() {
        await getAllBillsByRoomId(room_id).then((res) => {
            console.log(res)
            setBillList(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }
    if (loading) return (
        <div>
            loading...
        </div>
    )
    return (
        <div>
            {billList.length > 0 ?
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Mã hóa đơn
                            </th>
                            <th>
                                Hóa đơn tháng
                            </th>
                            <th>
                                Tổng tiền
                            </th>
                            <th>
                                Đã thanh toán
                            </th>
                            <th>
                                Chức năng
                            </th>
                        </tr>
                        {billList.map((bill) => (
                            <tr key={bill.bill_id}>
                                <td>
                                    {bill.bill_id}
                                </td>
                                <th>
                                    {`Tháng ${bill.date_create.slice(4, 6)}`}
                                </th>
                                <td>
                                    {bill.total}
                                </td>
                                <td>
                                    {bill.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                                </td>
                                <td>
                                    <button>
                                        Xác nhận đã thanh toán
                                    </button>
                                    {!bill.isPaid ?
                                        <button>
                                            Xóa hóa đơn
                                        </button> : <></>}

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                : <></>}

        </div>
    )
}