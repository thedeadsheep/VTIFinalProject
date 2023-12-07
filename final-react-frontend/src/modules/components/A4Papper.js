
import React from "react"
const A4Paper = React.forwardRef((props, ref) => {


    const component = props.component
    return (
        <div style={{
            width: "794px",
            fontSize: "13px",
            minHeight: "1123px",
        }} ref={ref}>
            {component}
        </div >
    )
})
export default A4Paper