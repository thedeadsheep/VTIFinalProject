import { useEffect } from "react"
import { useState } from "react"
import { confirmBill, getAllBillsByRoomId } from "../Services/Bill.Services"

export default function BillListOfRoom(props) {
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
    async function confirm(bill_id) {
        if (window.confirm("Xác nhận đã thanh toán")) {
            await confirmBill(bill_id).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 1000)

            })
        }
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
                            <th >
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
                                    {!bill.isPaid ?
                                        <button onClick={() => confirm(bill.bill_id)}>
                                            Xác nhận đã thanh toán
                                        </button> : <></>
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                : <></>}

        </div>
    )
}