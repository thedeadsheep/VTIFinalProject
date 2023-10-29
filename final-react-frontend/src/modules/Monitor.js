import { useNavigate } from "react-router"
import monitorStyle from './Monitor.module.css'
function Monitor() {

    const navigate = useNavigate()
    return (

        <div>
            Monitor
            <div className={monitorStyle.functionWrap}>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/renter")}>
                    Khách trọ
                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/room")}>
                    Phòng
                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/bill")}>
                    Hóa đơn
                </div>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`} onClick={() => navigate("/setting")}>
                    Cài đặt
                </div>
            </div>
        </div>
    )

}

export default Monitor