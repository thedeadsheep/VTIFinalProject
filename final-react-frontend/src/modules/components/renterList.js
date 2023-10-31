
import { useNavigate } from "react-router-dom"


function RenterListComponent(props) {
    let renters = props.renters || []
    const navigate = useNavigate();




    function stringDateConvert(date) {
        if (!date) {
            return ""
        }
        const dt = new Date(date),
            dateValue = {
                day: dt.getDay() < "10" ? "0" + dt.getDay() : dt.getDay(),
                month: dt.getMonth() < "10" ? "0" + dt.getMonth() : dt.getMonth(),
                year: dt.getFullYear()
            },
            timeValue = {
                hour: dt.getHours(),
                minute: dt.getMinutes(),
                second: dt.getSeconds()
            }
        return `${dateValue.month}-${dateValue.day}-${dateValue.year} ${timeValue.hour}:${timeValue.minute}:${timeValue.second}`
    }
    if (renters.length <= 0) {
        return (
            <div>
                Hiện không có {props.title}
            </div>
        )
    }
    return (
        <div>

            <h2 >
                {props.title}

            </h2>


            <div className="list-wrap" >
                {"<!-- field con o sẽ được đánh dấu bằng màu-->"}
                <table width={"100%"}>
                    <tbody className="table-content">
                        <tr>
                            <th className="id">
                                STT
                            </th>
                            <th className="ho-tenlot">
                                Họ và tên lót
                            </th>
                            <th className="ten">
                                Tên
                            </th>
                            <th className="ngay-chuyen vao">
                                Ngày chuyển vào
                            </th>
                            <th className="ngay-chuyen-di">
                                Ngày chuyển đi
                            </th>
                            <th className="que-quan">
                                Quê Quán
                            </th>
                            <th className="soCCCD">
                                Số CCCD/CMND
                            </th>
                        </tr>
                        {renters.map(renter => (
                            <tr
                                key={renter.id}
                                onClick={() => navigate(`/renter/${renter.id}`)}
                                className={`${renter.conO ? "con-o" : "chuyen-di"} ${renter.link_with ? "" : "chu-phong"}`}
                            >
                                <td>
                                    {renter.id}
                                </td>
                                <td>
                                    {renter.ho_tenlot}
                                </td>
                                <td>
                                    {renter.ten}
                                </td>
                                <td>
                                    {stringDateConvert(renter.ngay_chuyen_vao)}
                                </td>
                                <td>
                                    {stringDateConvert(renter.ngay_chuyen_di)}
                                </td>
                                <td>
                                    {renter.queQuan}
                                </td>
                                <td>
                                    {renter.soCCCD}
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default RenterListComponent