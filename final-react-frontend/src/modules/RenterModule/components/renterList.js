import { useState } from "react"

function RenterListComponent() {

    const [isSearchDate, setIsSearchDate] = useState(false)

    function getRenterList() {
        //getAllList
    }
    function searchRenter() {

    }


    return (
        <>
            RenterList
            <div className="filter">
                <form>
                    <input type="text" />
                    <input type="date" />

                    <select>
                        <option selected>
                            name
                        </option>

                        <option>
                            id card
                        </option>
                        <option>
                            date in
                        </option>
                        <option>
                            date out
                        </option>
                    </select>
                </form>
            </div>
            <div className="list-wrap" >
                {"<!-- field con o sẽ được đánh dấu bằng màu-->"}
                <table width={"100%"}>
                    <thead className="item">
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
                            <th className="soCCCD">
                                soCCCD
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default RenterListComponent