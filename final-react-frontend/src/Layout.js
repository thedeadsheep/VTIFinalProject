import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import { useLocation, useNavigate } from "react-router"

function Layout() {
    const lc = useLocation()
    const navigate = useNavigate()
    const [cantReturn, setCantReturn] = useState(false)
    const [current, setCurrent] = useState([])
    const [url, setUrl] = useState([""])
    function backFunction() {
        if (lc.pathname !== "/") {
            let arr = lc.pathname.split("/")
            arr.pop()
            let previous = arr.join("/")
            navigate(previous)
            if (previous === "") {
                setCantReturn(true)
            }
        }
        console.log("As")
    }
    useEffect(() => {
        if (lc.pathname === "/") {
            setCantReturn(true)
        } else {
            setCantReturn(false)
        }
        setCurrent(lc.pathname.split("/")[1] || "Home")

    }, [lc])
    return (
        <>

            <nav style={{
                //position: "fixed",
                top: "0",
                left: "0",
                height: "45px",
                background: "#FAEF48",
                width: "100vw",
                display: "grid",
                gridTemplateColumns: "auto 2fr",
                padding: "0 10px",
                boxSizing: "border-box"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px"
                }}>
                    <button onClick={backFunction} disabled={cantReturn}>
                        Back
                    </button>
                    <button onClick={() => navigate(`/${current !== "Home" ? current : ""}`)} >
                        {current}
                    </button>
                </div>


            </nav>
            <Outlet />
        </>
    )
}

export default Layout