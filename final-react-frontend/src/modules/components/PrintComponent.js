import { useRef } from "react"
import CONTRACT from "./contract"
import ReactToPrint from "react-to-print"

export default function PrintComponent(props) {
    const data = props.data || {}
    const rId = props.room_id
    let componentRef = useRef()
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>In tài liệu</button>}
                content={() => componentRef}
            />
            <CONTRACT ref={(el) => (componentRef = el)} renterValue={data} rId={rId} />

        </div>
    )
}