function ModalPopup(props) {
    const isOpen = props.isOpen
    const component = props.component

    if (!isOpen) {
        return (<></>)
    }
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                minWidth: "345px",

                height: "auto",
                background: "white",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px"
            }}>
                <div className="header" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "20px",
                    borderBottom: "0.3px solid gray"
                }}>
                    <div className="title">
                        This is title
                    </div>
                    <button onClick={props.closeModal} style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "8px",
                        border: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0",
                        margin: "0"
                    }}>
                        x
                    </button>
                </div>
                <div className="body" style={{
                    height: "auto",
                    width: "700px",
                    padding: "20px"
                }}>
                    {component}
                </div>
            </div>

        </div>
    )
}
export default ModalPopup