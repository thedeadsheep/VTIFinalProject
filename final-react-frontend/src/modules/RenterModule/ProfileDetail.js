import { useEffect, useState } from "react"
import RenterListComponent from "./components/renterList"

function ProfileDetailPage() {

    const [renter, setRenter] = useState("")
    const [renterRelatives, setRenterRelatives] = useState()
    function getRenterById() {

    }
    useEffect(() => {
        getRenterById()
    }, [])

    return (
        <>
            <div className="profile-wrap">
                <h1>
                    ProfileDetailPage
                </h1>
                <div className="image">
                    this is image
                </div>
                <div className="renter-information">
                    <label>
                        Ho-tenlot:
                        {renter.ho_tenlot}
                    </label>
                    <label>
                        Ten
                        {renter.ten}
                    </label>
                    <label>
                        ngay sinh
                        {renter.ngay_sinh}
                    </label>
                    <label>
                        so CCCD/CMND
                        {renter.soCCCD}
                    </label>
                    <label>
                        Que quan
                        {renter.que_quan}
                    </label>
                    <label>
                        Dia chi thuong tru
                        {renter.dia_chi_TT}
                    </label>
                    {renter.link_with ?
                        <>
                            <button>Go to Nguoi duoc lien ket</button>
                        </> : <></>}
                </div>
            </div>
            <div className="function">
                <button>
                    add nguoi quen
                </button>
            </div>
            <div className="relationship">
                <RenterListComponent title="Danh Sach nguoi o chung" />
            </div>
        </>
    )
}

export default ProfileDetailPage