import { parse } from "@fortawesome/fontawesome-svg-core"

export default function RecordCard(props) {
    let bill = props.bill || {}
    const inputStyle = {
        marginLeft: "10px",
        border: "none",
        borderBottom: "0.3px dotted black",
        borderRadius: "0",
        height: "30px",
        fontFamily: "'Time New Roman'",
    }
    const labelStyle = {
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        alignItems: "center"
    }
    const pTag = {
        margin: "0",
        padding: "0"
    }

    function getStringValue(mode) {
        let newValue, oldValue, price, donvi, total

        if (mode === "water") {
            oldValue = bill.old_water_number
            newValue = bill.new_water_number
            price = bill.waterPrice
            donvi = "m3"
            total = (parseInt(newValue) - parseInt(oldValue)) * parseInt(price)
        } else if (mode === "elec") {
            oldValue = bill.old_elec_number
            newValue = bill.new_elec_number
            price = bill.elecPrice
            donvi = "kWh"
            total = (parseInt(newValue) - parseInt(oldValue)) * parseInt(price)
        }
        let stringBuilder = `(${newValue}-${oldValue})*${price}/${donvi} = ${total}`
        return stringBuilder
    }
    return (
        <div style={{
            width: "350px",
            fontSize: "16px"
        }}>
            <div style={{
                border: "0.8px solid black",
                padding: "10px"
            }}>
                <h1 style={pTag}>
                    Phiếu thu:
                </h1>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Phòng:
                        </p>
                        <input style={inputStyle} defaultValue={bill.room_id || ""} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tháng:
                        </p>
                        <input style={inputStyle} defaultValue={""} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền phòng:
                        </p>
                        <input style={inputStyle} defaultValue={bill.roomPrice} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền điện:
                        </p>
                        <input style={inputStyle} defaultValue={getStringValue("elec")} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền nước:
                        </p>
                        <input style={inputStyle} defaultValue={getStringValue("water")} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tổng cộng:
                        </p>
                        <input style={inputStyle} defaultValue={bill.total} />
                    </label>
                </div>
            </div>
        </div>
    )
}