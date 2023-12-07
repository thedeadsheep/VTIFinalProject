import { useEffect, useState } from "react"
import PrintComponent from "../components/PrintComponent"
import { getAllUnPaidBills } from "../Services/Bill.Services"

export default function PrintReceipt(props) {
    const [unConfirmBills, setUnConfirmBills] = useState([])
    const [loadUnConfirm, setLoadUnConfirm] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await getAllUnPaidBills().then(res => {
            console.log(res)
            setUnConfirmBills(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    function onClickHandler(event, bill) {
        console.log(bill)
        event.currentTarget.classList.toggle("printActive")
        let b = loadUnConfirm.find(bl => bl.bill_id === bill.bill_id)
        if (!b) {
            setLoadUnConfirm([...loadUnConfirm, bill])
        } else {
            let filled = loadUnConfirm.filter(bl => bl.bill_id !== bill.bill_id)
            setLoadUnConfirm(filled)
        }
    }
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
        }}>
            <div style={{
                border: "1px solid #FFC94A ",
                height: "fit-content"
            }}>
                <p onClick={() => console.log(loadUnConfirm)}>
                    Hóa đơn chưa thu
                </p>
                <div style={{
                    overflowY: "scroll",
                    maxHeight: "600px",
                    paddingRight: "4px",

                }}>
                    {unConfirmBills ? unConfirmBills.map(bill => (
                        <div key={bill.bill_id} onClick={(event) => onClickHandler(event, bill)}
                            style={{
                                border: "solid black 0.3px",
                                marginBottom: "5px",
                                padding: "5px"
                            }}
                        >

                            <div>
                                {`Id: ${bill.bill_id.slice(0, 12) || ""}...`}
                            </div>
                            <div>Tháng: {bill.date_create.slice(4, 6) || ""}</div>
                            <div>Phòng: {bill.room_id}</div>
                            <div>Tổng cộng: {bill.total} VND</div>

                        </div>
                    )) : <></>}
                </div>
            </div>
            {unConfirmBills ?
                <PrintComponent data={loadUnConfirm} state="printReceipt" />
                : <></>}

        </div>
    )
}