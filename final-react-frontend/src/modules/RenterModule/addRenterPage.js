import { useState } from "react"
import CreateAndUpdateProfileComponent from "../components/cuProfile"
import { useParams } from "react-router"

function AddRenterPage() {

    const [isContract, setIsContract] = useState(false)
    const param = useParams()

    function onChangeHandler(e) {
        console.log(e.target.checked)
        setIsContract(e.target.checked)
    }
    return (
        <div>
            <CreateAndUpdateProfileComponent
                state={{
                    MODE: "create",
                    LINK_WITH: param.id,
                }}
            />
        </div>
    )
}

export default AddRenterPage