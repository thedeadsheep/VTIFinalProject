import { useRef } from "react"
import CONTRACT from "./contract"
import A4Paper from "./A4Papper"
import ReactToPrint from "react-to-print"
import ReceiptWrap from "../BillModule/receiptWrap"

export default function PrintComponent(props) {
    const data = props.data || {}
    const rId = props.room_id
    const state = props.state
    let componentRef = useRef()
    const component =
        state === "printContract" ?
            <CONTRACT renterValue={data} rId={rId} /> :
            state === "printReceipt" ? <ReceiptWrap bills={data} /> : <></>
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>In tài liệu</button>}
                content={() => componentRef}
            />
            <A4Paper ref={(el) => (componentRef = el)} component={component} />


        </div>
    )
}