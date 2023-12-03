import { useRef } from "react"
import CONTRACT from "./contract"
import A4Paper from "./A4Papper"
import ReactToPrint from "react-to-print"

export default function PrintComponent(props) {
    const data = props.data || {}
    const rId = props.room_id
    let componentRef = useRef()
    const component = <CONTRACT renterValue={data} rId={rId} />
    return (
        <div>
            <button onClick={() => console.log(componentRef)}>
                as
            </button>
            <ReactToPrint
                trigger={() => <button>In tài liệu</button>}
                content={() => componentRef}
            />
            <A4Paper ref={(el) => (componentRef = el)} component={component} />


        </div>
    )
}