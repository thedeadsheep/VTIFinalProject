import { useState } from "react"

export default function BillList(props) {
    const [loading, setLoading] = useState(true)
    const [BillList, setBillList] = useState([])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Mã hóa đơn
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

                </tbody>
            </table>
        </div>
    )
}