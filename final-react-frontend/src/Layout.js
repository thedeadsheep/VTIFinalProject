import { Outlet } from "react-router"
import { useLocation, useNavigate } from "react-router"

function Layout() {
    const lc = useLocation()
    const navigate = useNavigate()

    function backFunction() {
        let canReturn = (lc.pathname === "/")
        console.log(canReturn)
    }
    return (
        <>

            <nav style={{
                //position: "fixed",
                top: "0",
                left: "0",
                height: "45px",
                background: "blue",
                width: "100vw",
                display: "flex",
                flexDirection: "row",
            }}>
                <div onClick={backFunction}>
                    Back
                </div>
                <div onClick={() => navigate("")}>
                    Home
                </div>
                <div onClick={() => { console.log(lc) }}>
                    Test
                </div>
                <div>

                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout