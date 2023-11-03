import RoomList from "../components/roomList"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import styles from "./roompage.module.css"
import AddRoom from "../components/addRoom"
function RoomPage() {


    return (
        <div>
            <h1>
                Quản lý phòng trọ
            </h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <div className={styles.addRoom}>
                    <details>
                        <summary>
                            <span>
                                <FontAwesomeIcon icon={faPlus} style={{
                                    borderRadius: "10px",
                                    background: "#F9D949",
                                    padding: "7px"
                                }} />   Thêm Phòng

                            </span>

                        </summary>
                        <AddRoom />
                    </details>
                </div>
                <div style={{
                    paddingLeft: "30px",
                    width: "550px",
                    margin: "0 20px"

                }}>
                    <RoomList />
                </div>
            </div>

        </div>
    )

}
export default RoomPage