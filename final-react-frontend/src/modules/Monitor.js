import { useNavigate } from "react-router"
import monitorStyle from './Monitor.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench, faReceipt, faDoorOpen, faPersonWalkingLuggage, faUsersGear } from "@fortawesome/free-solid-svg-icons"
function Monitor() {

    const navigate = useNavigate()
    return (

        <div>
            <div className={monitorStyle.functionWrap}>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/renter")}>
                    <span>
                        <FontAwesomeIcon icon={faPersonWalkingLuggage} /> Khách trọ
                    </span>
                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/room")}>
                    <span>
                        <FontAwesomeIcon icon={faDoorOpen} /> Phòng
                    </span>

                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/setting")}>
                    <span>
                        <FontAwesomeIcon icon={faUsersGear} /> cập nhật khách trọ
                    </span>

                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/billpage")}>
                    <span>
                        <FontAwesomeIcon icon={faReceipt} /> Hóa đơn
                    </span>

                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/setting")}>
                    <span>
                        <FontAwesomeIcon icon={faWrench} /> cài đặt
                    </span>

                </div>
            </div>
        </div>
    )

}

export default Monitor