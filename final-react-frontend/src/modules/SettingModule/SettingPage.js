import LoadingComponent from "../components/loading"
import CreateAndUpdatePrice from "./CUPrice"

function SettingPage() {

    return (
        <>
            <h1>
                SettingPage


            </h1>
            <CreateAndUpdatePrice state={{
                MODE: "create"
            }} />
            <LoadingComponent />
        </>
    )
}
export default SettingPage