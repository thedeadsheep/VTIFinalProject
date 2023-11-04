
import CreateAndUpdateProfileComponent from "./cuProfile"
import { useParams } from "react-router"

function AddRenterPage() {

    const param = useParams()


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