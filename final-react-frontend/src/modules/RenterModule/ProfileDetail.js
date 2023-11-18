
import styles from "./ProfileDetail.module.css"
function ProfileDetailPage(props) {
    const renter = props.renter || {}



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
    return (
        <div>
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
            </div>

        </div>
    )
}


export default ProfileDetailPage