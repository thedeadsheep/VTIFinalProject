
import styles from "./ProfileDetail.module.css"
function ProfileDetailPage(props) {
    const renter = props.renter || {}



    function dateConvert(dS) {
        let m = new Date(dS)

        return "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
            ("0" + m.getDate()).slice(-2) + ", " +
            m.getFullYear()
    }
    return (
        <div>
            <div className={styles.profileWrap}>
                <div className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src="asd" className={styles.image} />
                        {renter.soCCCD ? <div className={styles.in4mationWrap}>

                            <label>
                                Số CCCD/CMND
                                <p className={styles.CCCD}>
                                    {renter.soCCCD}
                                </p>
                            </label>
                        </div> : <></>}

                    </div>
                    <div className={styles.renterInformation}>
                        <div className={styles.in4mationWrap}>
                            <label>
                                Họ và tên
                                <p>
                                    {`${renter.ho_tenlot} ${renter.ten}`}
                                </p>
                            </label>
                            {renter.ngay_sinh ? <label>
                                Ngày sinh
                                <p>
                                    {dateConvert(renter.ngay_sinh)}
                                </p>
                            </label> : <></>}
                            {renter.queQuan ? <label>
                                Quê quán/ Nơi sinh
                                <p>
                                    {renter.queQuan}
                                </p>
                            </label> : <></>}
                            {renter.diaChiThuongTru ? <label>
                                Địa chỉ thường trú
                                <p>
                                    {renter.diaChiThuongTru}
                                </p>
                            </label> : <></>}

                        </div>
                        <div className={styles.in4mationWrap}>
                            {renter.ngay_chuyen_vao ? <label>
                                Ngày đăng ký:
                                <p>
                                    {dateConvert(renter.ngay_chuyen_vao)}
                                </p>
                            </label> : <></>}
                            {renter.ngay_chuyen_di ? <label>
                                Ngày chuyển đi:
                                <p>
                                    {renter.conO ? <>Hiện tại còn Ở</> : <>{dateConvert(renter.ngay_chuyen_di)}</>}
                                </p>
                            </label> : <></>}

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}


export default ProfileDetailPage