import CUProfileComponent from "./components/cuProfile"
import RenterListComponent from "./components/renterList"

function RenterPage() {


    return (
        <>
            <h1>
                RenterPage

            </h1>
            <CUProfileComponent state="create" />
            <RenterListComponent />
        </>
    )

}
export default RenterPage