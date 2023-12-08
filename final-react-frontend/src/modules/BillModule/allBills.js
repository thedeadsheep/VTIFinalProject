import { useEffect, useState } from "react"
import { getAllBills } from "../Services/Bill.Services"

export default function AllBills() {
    const [allBills, setAllBills] = useState([])


    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await getAllBills().then(res => {
            console.log(res.data)
            setAllBills(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    function dayCreate(date) {
        let ngay = date.slice(6, 8),
            thang = date.slice(4, 6),
            nam = date.slice(0, 4)
        let stringBuilder = `${ngay} - ${thang} - ${nam}`
        return stringBuilder
    }
    return (
        <div>
            {allBills ? <div>
                <p>
                    Danh sách hóa đơn
                </p>
                <table style={{
                    width: "100%"
                }}>
                    <tbody>
                        <tr>
                            <th>
                                Phòng
                            </th>
                            <th>
                                Ngày tạo
                            </th>
                            <th>
                                Tổng hóa đơn
                            </th>
                        </tr>
                        {allBills.map(bill => (
                            <tr key={bill.bill_id} style={{
                                color: bill.isPaid ? "black" : "red"
                            }}>

                                <td>
                                    {`Phòng ${bill.room_id}`}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    {dayCreate(bill.date_create)}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    {bill.total} VND
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div> : <></>}
        </div>
    )
}