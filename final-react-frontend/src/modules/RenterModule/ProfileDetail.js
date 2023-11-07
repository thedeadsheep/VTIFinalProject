import { useEffect, useState } from "react"
import RenterListComponent from "./renterList"
import { useParams, useNavigate } from "react-router-dom"

import CreateAndUpdateProfileComponent from './cuProfile';
import ModalPopup from "../components/ModalPopup"
import { getRenterById, getAllRenterRelatives, confirmMoveAway } from "../Services/Renter.Services"
import styles from "./ProfileDetail.module.css"
function ProfileDetailPage() {

    //useState
    const [renter, setRenter] = useState({})
    const [isHere, setIsHere] = useState()
    const [renterRelatives, setRenterRelatives] = useState([])
    const [isLoadFunction, setIsloadFunction] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()


    const navigate = useNavigate()
    const { id } = useParams()

    async function getRenter() {
        await getRenterById(id)
            .then((in4) => {
                setTimeout(() => {
                    setRenter(in4)
                }, 1000)

            })
            .catch((err) => {
                console.log(err)
            })

    }
    async function getRenterRelatives() {
        await getAllRenterRelatives(id)
            .then((relativeList) => {
                setTimeout(() => {
                    setRenterRelatives(relativeList)
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        if (Object.keys(renter).length > 0) {
            setIsloadFunction(true)
            setIsHere(renter.conO)
        }
    }, [renter])
    useEffect(() => {
        setRenter({})
        setIsloadFunction(false)
        setRenterRelatives([])
        closeModalPopUp()
        getRenter()
        getRenterRelatives()
    }, [id])
    async function moveAway() {
        if (window.confirm("Xác nhận chuyển di?")) {
            await confirmMoveAway(id).then((res) => {
                console.log(res)
                setIsHere(false)
            }).catch((err) => {
                console.log(err)
            })
        }

    }
    function dateConvert(dS, isWithTime) {
        let m = new Date(dS)

        let dateString
        if (isWithTime) {
            dateString =

                "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
                ("0" + m.getDate()).slice(-2) + ", " +
                m.getFullYear() + " - " +
                ("0" + m.getHours()).slice(-2) + ":" +
                ("0" + m.getMinutes()).slice(-2) + ":" +
                ("0" + m.getSeconds()).slice(-2);
        } else {
            dateString =
                "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
                ("0" + m.getDate()).slice(-2) + ", " +
                m.getFullYear()
        }

        return dateString
    }
    function openModal(state) {
        if (state === "createRelative") {
            setModalTitle("Thêm Khách trọ")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: 'create', LINK_WITH: renter.id }} />)
            setIsOpen(true)
        } else if (state === "updateProfile") {
            setModalTitle("Cập nhật thông tin")
            setComponent(<CreateAndUpdateProfileComponent state={{ MODE: 'update' }} renter={renter} />)
            setIsOpen(true)
        }
    }
    function closeModalPopUp(event) {
        console.log(event)
        try {
            if (event.target.id === "close-modal-position") {
                console.log(
                    'CloseModal'
                )
                setIsOpen(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }

    }
    return (
        <div>
            <h1>
                Trang Thông tin của {renter.ho_tenlot + " " + renter.ten}
            </h1>
            <div className={styles.profileWrap}>
                <div className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src="asd" className={styles.image} />
                    </div>
                    <div className={styles.renterInformation}>
                        <label>
                            Họ và tên lót
                            <p>
                                {renter.ho_tenlot}
                            </p>
                        </label>
                        <label>
                            Tên
                            <p>
                                {renter.ten}
                            </p>

                        </label>
                        <label>
                            Ngày sinh
                            <p>
                                {dateConvert(renter.ngay_sinh, false)}
                            </p>

                        </label>
                        <label>
                            Số CCCD/CMND
                            <p>
                                {renter.soCCCD}
                            </p>
                        </label>
                        <label>
                            Quê quán/ Nơi sinh
                            <p>
                                {renter.queQuan}
                            </p>

                        </label>
                        <label>
                            Địa chỉ thường trú
                            <p>
                                {renter.diaChiThuongTru}
                            </p>
                        </label>
                    </div>
                    <div className={styles.renterInformation}>
                        <label>
                            Ngày đăng ký chuyển vào:
                            <p>
                                {dateConvert(renter.ngay_chuyen_vao, 1)}
                            </p>
                        </label>
                        <label>
                            Ngày chuyển đi:
                            <p>
                                {renter.conO ? <>Hiện tại còn Ở</> : <>{dateConvert(renter.ngay_chuyen_di, 1)}</>}
                            </p>
                        </label>

                    </div>

                </div>
                <div className={styles.functionWrap}>
                    <label>
                        Chức năng:
                        <>
                            {renter.link_with ? <>
                                <button onClick={() => navigate(`/renter/${renter.link_with}`)}>
                                    Go to Nguoi duoc lien ket
                                </button>
                            </> : <>
                            </>}
                        </>
                        <>
                            {isHere ? <>

                                <button onClick={() => openModal("updateProfile")}>
                                    Cập nhật thông tin
                                </button>
                                {renter.link_with ? <></> : <>
                                    <button onClick={() => openModal("createRelative")}>
                                        Them nguoi o chung
                                    </button>
                                </>}
                                <button onClick={moveAway}>
                                    Bấm vào để xác nhận chuyển đi
                                </button>
                            </> : <></>}

                        </>
                    </label>
                </div>

            </div>


            <div className="relationship">
                <RenterListComponent title="Danh Sach nguoi o chung" renters={renterRelatives} />
            </div>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle} />
        </div>
    )
}

export default ProfileDetailPage