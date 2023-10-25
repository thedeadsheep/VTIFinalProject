import { useState } from "react"
import CreateAndUpdateProfileComponent from "../components/cuProfile"

function AddRenterPage() {

    const [isContract, setIsContract] = useState(false)

    function onChangeHandler(e) {
        console.log(e.target.checked)
        setIsContract(e.target.checked)
    }
    return (
        <div>
            add profile here
            <p>
                Tao hop dong
                <input type="checkbox" onChange={onChangeHandler} checked={isContract} />
            </p>
            <CreateAndUpdateProfileComponent
                state={{
                    MODE: "create",
                    LINK_WITH: false,
                    CONTRACT: isContract
                }}
            />
        </div>
    )
}

export default AddRenterPage