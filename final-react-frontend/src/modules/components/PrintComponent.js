import { useRef } from "react"
import CONTRACT from "./contract"
import ReactToPrint from "react-to-print"

export default function PrintComponent(props) {
    let data = props.data || {}
    let componentRef = useRef()
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>In tài liệu</button>}
                content={() => componentRef}
            />
            <CONTRACT ref={(el) => (componentRef = el)} renterValue={data} />

        </div>
    )
}