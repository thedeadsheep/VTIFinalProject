import { useNavigate } from "react-router"
import monitorStyle from './Monitor.module.css'
function Monitor() {
    const navigate = useNavigate()
    return (

        <div>
            Monitor
            <div className={monitorStyle.functionWrap}>
                <div className={`${monitorStyle.item} ${monitorStyle.function}`}>
                    aha
                </div>
            </div>
        </div>
    )

}

export default Monitor