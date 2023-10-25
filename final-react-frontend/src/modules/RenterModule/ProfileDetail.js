import { useEffect, useState } from "react"
import RenterListComponent from "../components/renterList"
import { useParams, useNavigate } from "react-router-dom"
import { getRenterById, getAllRenterRelatives } from "../Services/Renter.Services"

function ProfileDetailPage() {

    const [renter, setRenter] = useState({})
    const [renterRelatives, setRenterRelatives] = useState([])
    const [isLoadFunction, setIsloadFunction] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    async function getRenter(id) {
        await getRenterById(id)
            .then((in4) => {
                setTimeout(() => {
                    setRenter(in4)
                }, 1000)

            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log(renter)
            })
    }
    async function getRenterRelatives(id) {
        await getAllRenterRelatives(id)
            .then((relativeList) => {
                setTimeout(() => {
                    setRenterRelatives(relativeList)
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log(renter)
            })
    }
    useEffect(() => {
        getRenter(id)
        getRenterRelatives(id)
    }, [])
    useEffect(() => {
        if (Object.keys(renter).length > 0)
            setIsloadFunction(true)

        console.log(Object.keys(renter))
    }, [renter])
    useEffect(() => {
        setRenter({})
        setIsloadFunction(false)
        setRenterRelatives([])
        getRenter(id)
        getRenterRelatives(id)
    }, [id])

    return (
        <>
            <div className="profile-wrap">
                <h1>
                    ProfileDetailPage {id}
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
                        {renter.queQuan}
                    </label>
                    <label>
                        Dia chi thuong tru
                        {renter.diaChiThuongTru}
                    </label>

                </div>
            </div>
            <div className="function">
                {isLoadFunction ?
                    renter.link_with ?
                        <>
                            <button onClick={() => navigate(`/renter/${renter.link_with}`)}>Go to Nguoi duoc lien ket</button>
                        </>
                        : <>
                            <button>
                                add nguoi quen
                            </button>
                        </>
                    : <></>
                }

            </div>
            <div className="relationship">
                <RenterListComponent title="Danh Sach nguoi o chung" renters={renterRelatives} />
            </div>
        </>
    )
}

export default ProfileDetailPage