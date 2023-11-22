import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import { useLocation, useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faBars, faHouse, faPersonWalkingLuggage, faDoorOpen, faReceipt, faWrench, faUsersGear, faFilePen } from "@fortawesome/free-solid-svg-icons"
import styles from "./layout.module.css"
function Layout() {
    const lc = useLocation()
    const navigate = useNavigate()
    const [cantReturn, setCantReturn] = useState(false)
    const [current, setCurrent] = useState([])
    const [isCollapse, setIsCollapse] = useState(localStorage.getItem("isCollapseNavbar"))
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
    function navbarCollapse() {
        setIsCollapse(!isCollapse)
        localStorage.setItem("isCollapseNavbar", isCollapse)
    }
    return (
        < div style={{
            display: "flex",
            flexDirection: "row",
        }} >

            <nav
                className={`${styles.sidebar} ${isCollapse ? styles.collapse : ""}`}
            >
                <div>
                    <div>
                        <button onClick={() => navbarCollapse()}>
                            <FontAwesomeIcon icon={faBars} />
                            <span hidden={isCollapse}> collapse</span>
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className={`${current === "Home" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <span hidden={isCollapse}>Trang chủ</span>
                        </button>
                        <button
                            onClick={() => navigate("/renter")}
                            className={`${current === "renter" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                            <span hidden={isCollapse}>Khách trọ</span>
                        </button>
                        <button
                            onClick={() => navigate("/room")}
                            className={`${current === "room" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <span hidden={isCollapse}>Phòng</span>
                        </button>
                        <button
                            onClick={() => navigate("/roomRecord")}
                            className={`${current === "roomRecord" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faFilePen} />
                            <span hidden={isCollapse}>Ghi điện nước</span>
                        </button>
                        <button
                            onClick={() => navigate("/userSetting")}
                            className={`${current === "userSetting" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faUsersGear} />
                            <span hidden={isCollapse}>cập nhật khách trọ</span>
                        </button>
                        <button
                            onClick={() => navigate("/bill")}
                            className={`${current === "bill" ? styles.active : ""}`}
                        >
                            <FontAwesomeIcon icon={faReceipt} />
                            <span hidden={isCollapse}>Hóa đơn</span>
                        </button>

                    </div>

                </div >
                <div>
                    <button
                        onClick={() => navigate("/setting")}
                        className={`${current === "setting" ? styles.active : ""}`}
                    >
                        <FontAwesomeIcon icon={faWrench} />
                        <span hidden={isCollapse}>Cài đặt</span>
                    </button>
                    <button onClick={backFunction} disabled={cantReturn}>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <span hidden={isCollapse}>Quay lại</span>
                    </button>

                </div>
            </nav >
            <div style={{
                display: "block",
                width: "100%",
                padding: "20px"
            }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout