function ModalPopup(props) {
    let isOpen = props.isOpen
    const component = props.component
    const modalTitle = props.modalTitle

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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "background": "rgba(226, 218, 214, 0.16)", "backdropFilter": "blur(2.4px)", "WebkitBackdropFilter": "blur(4.4px)"
        }} onClick={props.closeModal} id="close-modal-position">
            <div style={{
                minWidth: "345px",
                height: "auto",
                background: "#F7F7FA",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                minHeight: "300px",
                "boxShadow": "11px 10px 19px -5px rgba(0,0,0,0.4)"
            }}>
                <div className="header" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "15px",
                    borderBottom: "0.3px solid gray"
                }}>
                    <div className="title" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "28px"
                    }}>
                        {modalTitle}
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
                        margin: "0",
                        background: "white"
                    }} id="close-modal-position">
                        X
                    </button>
                </div>
                <div className="body" style={{
                    height: "auto",
                    width: "auto",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {component}
                </div>
            </div>

        </div>
    )
}
export default ModalPopup