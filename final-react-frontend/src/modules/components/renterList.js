import { useState } from "react"
import DatePicker, { DateObject } from "react-multi-date-picker"
import { useNavigate } from "react-router-dom"

const format = "YYYY/MM/DD"

function RenterListComponent(props) {
    console.log("props", props)
    let renters = props.renters || []
    const [textSearchValue, setTextSearchValue] = useState("")
    const [searchMode, setSearchMode] = useState(2)
    const [dateValue, setDateValue] = useState([
        new DateObject().subtract(2, "days"),
        new DateObject().add(2, "days")
    ])
    const navigate = useNavigate();


    function searchRenter() { //filter trực tiếp từ RenterList
        if (searchMode === "2") {
            console.log(getDatevalue())
            return
        } else {
            console.log(textSearchValue)
        }
    }
    function onSearchModeHandler(e) {
        console.log(searchMode)
        setSearchMode(e.target.value)
    }
    function getDatevalue() {
        return {
            form: dateValue[0].format(),
            to: dateValue[1].format()
        }
    }
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

            <h2 onClick={() => console.log(typeof searchMode)}>
                {props.title}

            </h2>

            <div className="filter">
                <div>
                    {searchMode === "1" || searchMode === "0" ?
                        <input type="text"
                            id="name-soCCCD"
                            placeholder={searchMode === "0" ? "Nhap ten" : "Nhap so CCCD"}
                            onChange={(e) => setTextSearchValue(e.target.value)}
                        />
                        :
                        <DatePicker
                            range
                            value={dateValue}
                            onChange={setDateValue}
                            format={format}
                        />
                    }
                    <select onChange={onSearchModeHandler} defaultValue={searchMode} >
                        <option value={0}>
                            Ten
                        </option>
                        <option value={1}>
                            soCCCD
                        </option>
                        <option value={2}>
                            Ngay dang ki
                        </option>
                    </select>

                    <button onClick={searchRenter}>
                        Tìm kiếm
                    </button>
                </div>
            </div>
            <div className="list-wrap" >
                {"<!-- field con o sẽ được đánh dấu bằng màu-->"}
                <table width={"100%"}>
                    <tbody className="table-content">
                        <tr>
                            <th className="id">
                                ID
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
                                className={renter.conO ? "con-o" : "chuyen-di"}
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