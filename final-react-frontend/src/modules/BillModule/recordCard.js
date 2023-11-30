export default function RecordCard() {


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
                    Phiếu thu
                </h1>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Phòng:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tháng:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền phòng:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền điện:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tiền nước:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        <p style={pTag}>
                            Tổng cộng:
                        </p>
                        <input style={inputStyle} />
                    </label>
                </div>
            </div>
        </div>
    )
}