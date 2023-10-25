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
        if (searchMode == 2) {
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
    return (
        <div>

            <h2>
                {props.title}
            </h2>

            <div className="filter">
                <div>
                    {searchMode == 1 || searchMode == 0 ?

                        <input type="text"
                            id="name-soCCCD"
                            placeholder={searchMode == 0 ? "Nhap ten" : "Nhap so CCCD"}
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
                        Submit
                    </button>
                </div>
            </div>
            <div className="list-wrap" >
                {"<!-- field con o sẽ được đánh dấu bằng màu-->"}
                <table width={"100%"}>
                    <thead className="table-head">
                        <tr>
                            <th className="id">
                                id
                            </th>
                            <th className="ho-tenlot">
                                Ho_tenLot
                            </th>
                            <th className="ten">
                                Ten
                            </th>
                            <th className="ngay-chuyen vao">
                                ngay chuyen vao
                            </th>
                            <th className="ngay-chuyen-di">
                                ngay chuyen di
                            </th>
                            <th className="que-quan">
                                que quan
                            </th>
                            <th className="soCCCD">
                                soCCCD
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-content">
                        {renters.map(renter => (
                            <tr key={renter.id} onClick={() => navigate(`/renter/${renter.id}`)}>
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
                                    {renter.ngay_chuyen_vao}
                                </td>
                                <td>
                                    {renter.ngay_chuyen_di}
                                </td>
                                <td>
                                    {renter.queQuan}
                                </td>
                                <td>
                                    {renter.soCCCD}
                                </td>
                                <td>

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