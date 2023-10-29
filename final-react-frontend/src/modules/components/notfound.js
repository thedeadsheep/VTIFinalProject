import { useNavigate } from 'react-router-dom'
function NotFound() {
    const navigate = useNavigate()
    return (
        <div id="notfound" style={{
            position: "relative",
            height: "100vh",

        }}>
            <div className="notfound" style={{
                WebkitTransform: "translate(-50%,-50%)",
                msTransform: "translate(-50%,-50%)",
                transform: "translate(-50%,-50%)",
                position: "absolute",
                left: "50%",
                top: "50%",
                maxWidth: "520px",
                width: "100%",
                lineHeight: "1.4",
                textAlign: "center"
            }}>
                <div className="notfound-404" style={{
                    "position": "relative", "height": "240px"
                }}>
                    <h3 style={{ "fontFamily": "cabin,sans-serif", "position": "relative", "fontSize": "16px", "fontWeight": "700", "textTransform": "uppercase", "color": "#262626", "margin": "0", "letterSpacing": "3px", "paddingLeft": "6px" }}>Oops! Page not found</h3>
                    <h1 onClick={() => navigate('/')} style={{ "fontFamily": "montserrat,sans-serif", "position": "absolute", "left": "50%", "top": "50%", "WebkitTransform": "translate(-50%,-50%)", "MsTransform": "translate(-50%,-50%)", "transform": "translate(-50%,-50%)", "fontSize": "252px", "fontWeight": "900", "margin": "0", "color": "#262626", "textTransform": "uppercase", "letterSpacing": "-40px", "marginLeft": "-20px", "cursor": "pointer" }}>
                        <span>4</span><span>0</span><span>4</span>
                    </h1>
                </div>
                <h2 style={{ "fontFamily": "cabin,sans-serif", "fontSize": "20px", "fontWeight": "400", "textTransform": "uppercase", "color": "#000", "marginTop": "0", "marginBottom": "25px" }}>please! Click to 404 to get back homepage</h2>
            </div>
        </div>

    )
}
export default NotFound