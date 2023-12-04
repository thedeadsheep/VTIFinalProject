export default function PriceHistory(props) {
    function dateConverter(date) {
        if (date) {
            return `${date.slice(4, 6)}/${date.slice(6, 8)}/${date.slice(0, 4)}`
        }
        return ""
    }
    const priceHistory = props.list || []
    return (
        <div>
            <div style={{
                overflowY: "scroll",
                height: "300px",
                border: "0.3px solid",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <table style={{
                    width: "100%"
                }}>
                    <tbody>
                        <tr>
                            <th>
                                Giá điện (VND/1kWh)
                            </th>
                            <th>
                                Giá Nước (VND/1m<sup>3</sup>)
                            </th>
                            <th>
                                Ngày cập nhật
                            </th>
                            <th>
                                Ngày hết hạn
                            </th>
                        </tr>
                        {priceHistory.map((price) => (
                            <tr key={price.id}>
                                <td>
                                    {price.elecPrice}
                                </td>
                                <td>
                                    {price.waterPrice}
                                </td>
                                <td>
                                    {dateConverter(price.dateApplied)}
                                </td>
                                <td>
                                    {dateConverter(price.expireDate)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}