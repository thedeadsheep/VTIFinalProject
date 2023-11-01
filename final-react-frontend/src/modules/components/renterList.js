
import { useNavigate } from "react-router-dom"


function RenterListComponent(props) {
    let renters = props.renters || []
    const navigate = useNavigate();




    function dateConvert(dS, isWithTime) {
        if (dS == null) {
            return ""
        }
        let m = new Date(dS)

        let dateString
        if (isWithTime) {
            dateString =

                ("0" + (m.getMonth() + 1)).slice(-2) + " " +
                ("0" + m.getDate()).slice(-2) + ", " +
                m.getFullYear() + " - " +
                ("0" + m.getHours()).slice(-2) + ":" +
                ("0" + m.getMinutes()).slice(-2) + ":" +
                ("0" + m.getSeconds()).slice(-2);
        } else {
            dateString =
                ("0" + (m.getMonth() + 1)).slice(-2) + " " +
                ("0" + m.getDate()).slice(-2) + ", " +
                m.getFullYear()
        }

        return dateString
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
                <table width={"100%"}>
                    <tbody className="table-content">
                        <tr>
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
                                    {renter.ho_tenlot}
                                </td>
                                <td>
                                    {renter.ten}
                                </td>
                                <td>
                                    {dateConvert(renter.ngay_chuyen_vao, 1)}
                                </td>
                                <td>
                                    {dateConvert(renter.ngay_chuyen_di, 1)}
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