import RecordCard from "./recordCard"

export default function ReceiptWrap(props) {
    let bills = props.bills || []
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "10px"
        }}>
            {bills ?
                bills.map(bill => (
                    <div style={{
                        margin: "5px"
                    }}>
                        <RecordCard bill={bill} key={bill.bill_id} />
                    </div>

                ))

                : <></>}

        </div>
    )
}