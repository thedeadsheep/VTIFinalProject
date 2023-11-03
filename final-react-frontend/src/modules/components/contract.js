import styles from "./contract.module.css"

function CONTRACT(props) {

    const renter = props.renterValue || {}
    function getDate() {
        const m = new Date()
        let dateString =
            "Ngày " + ("0" + m.getDate()).slice(-2) + " " +
            "Tháng " + ("0" + (m.getMonth() + 1)).slice(-2) + " " +
            "Năm " + m.getFullYear()
        return dateString
    }
    console.log(renter)
    function formatDate(date) {
        let m = new Date(date)
        let dateString =
            ("0" + m.getDate()).slice(-2) + "-" +
            ("0" + (m.getMonth() + 1)).slice(-2) + "-" +
            m.getFullYear()
        return dateString

    }


    return (
        <div className={styles.A4Size}>
            <div className={styles.header}>
                <p className={styles.contract}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p className={styles.contract}>
                    Độc lập - Tự do - Hạnh phúc
                </p>
                <p className={styles.contract}><b>HỢP ĐỒNG THUÊ TRỌ</b></p>
            </div>
            <div className="body">
                <p className={styles.contract}>
                    Hôm nay, {getDate()}, tại địa chỉ:  <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} />
                </p>
                <p className={styles.contract}>Chúng tôi gồm</p>
                <p className={styles.contract}>1. Đại diện bên cho thuê (Bên A)</p>
                <p className={styles.contract}>Ông/bà: <input className={`${styles.contract} ${styles.contractInput}`} /> Sinh ngày: <input className={`${styles.contract} ${styles.contractInput}`} /></p>
                <p className={styles.contract}>Nơi đăng ký thường trú: <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} /> </p>
                <p className={styles.contract}>
                    CCCD/CMND số:  <input className={`${styles.contract} ${styles.contractInput}`} /> cấp ngày  <input className={`${styles.contract} ${styles.contractInput}`} /> tại: <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} />
                </p>
                <p className={styles.contract}>Số điện thoại: <input className={`${styles.contract} ${styles.contractInput}`} /></p>
                <p className={styles.contract}>2. Đại diện bên thuê (Bên B)</p>
                <p className={styles.contract}>Ông/bà:  <input className={`${styles.contract} ${styles.contractInput}`} defaultValue={renter.ho_tenlot + " " + renter.ten} />
                    Sinh ngày:  <input className={`${styles.contract} ${styles.contractInput}`} defaultValue={formatDate(renter.ngay_sinh)} />
                </p>
                <p className={styles.contract}>Nơi đăng ký thường trú:  <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} defaultValue={renter.diaChiThuongTru} /></p>
                <p className={styles.contract}>
                    CCCD/CMND số:  <input className={`${styles.contract} ${styles.contractInput}`} defaultValue={renter.soCCCD} /> cấp ngày  <input className={`${styles.contract} ${styles.contractInput}`} /> tại: <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} />
                </p>
                <p className={styles.contract}>Sau khi bàn bạc trên tinh thần dân chủ, hai bên đưa ra thống nhất như sau:</p>
                <p className={styles.contract}>Bên A đồng ý cho bên B thuê 01 phòng ỏ tại địa chỉ:  <input className={`${styles.contract} ${styles.contractInput} ${styles.address}`} /> </p>
                <p className={styles.contract}>Giá thuê:  <input className={`${styles.contract} ${styles.contractInput}`} /> đ/tháng</p>
                <p className={styles.contract}>Tiền điện:  <input className={`${styles.contract} ${styles.contractInput}`} /> đ/kWh tính theo chỉ số công tơ điện</p>
                <p className={styles.contract}>Tiền nước: <input className={`${styles.contract} ${styles.contractInput}`} /> đ/m<sup>3</sup> tính theo chỉ số của đồng hồ nước</p>
                <p className={styles.contract}>Số tiền đặt cọc:    <input className={`${styles.contract} ${styles.contractInput}`} />   </p>
                <p className={styles.contract}>Hợp đồng có giá trị từ {getDate()}</p>
                <p className={styles.contract}><b>TRÁCH NHIỆM CỦA CÁC BÊN</b></p>
                <p className={styles.contract}>Trách nhiệm của bên A:</p>
                <p className={styles.contract}>
                    <li className={styles.contract}>
                        Tạo mọi điều kiện thuận lợi để bên B thực hiện theo hợp đồng.
                    </li>
                    <li className={styles.contract}>
                        Cung cấp nguồn điện, nước, cho bên B sử dụng.
                    </li>
                </p>
                <p className={styles.contract}>Trách nhiệm của bên B:</p>
                <p className={styles.contract}>
                    <li className={styles.contract}>
                        Thanh toán đầy đủ các khoản tiền theo đúng thỏa thuận.
                    </li>
                    <li className={styles.contract}>
                        Bảo quản các trang thiết bị và cơ sở vật chất của bên A trang bị cho ban đầu.
                    </li>
                    <li className={styles.contract}>
                        Không được tự ý sửa chữa, cải tạo cơ sở vật chất khi chưa được sự đồng ý của bên A.
                    </li>
                    <li className={styles.contract}>
                        Bên B phải chấp hành mọi quy định của pháp luật Nhà nước và quy định của địa phương.
                    </li>
                    <li className={styles.contract}>
                        Nếu bên B cho khách ở qua đêm thì phải khai báo với bên A (chủ nhà), đồng thời phải chịu trách nhiều về hành vi của khách trong thời gian ở lại.
                    </li>
                </p>
                <p className={styles.contract}><b>TRÁCH NHIỆM CHUNG</b></p>
                <p className={styles.contract}>
                    <li className={styles.contract}>
                        Trong thời gian hợp đồng còn hiệu lực nếu bên nào vi phạm các điều khoản đã thỏa thuận thì bên còn lại có <b>quyền đơn phương chấm dứt hợp đồng</b>;
                    </li>
                    <li className={styles.contract}>
                        Một trong hai bên muốn chấm dứt hợp đồng trước thời hạn thì phải báo trước cho bên kia ít nhất 30 ngày và hai bên phải có sự thống nhất.
                    </li>
                    <li className={styles.contract}>
                        Bên A phải trả lại tiền đặt cọc cho bên B.
                    </li>
                    <li className={styles.contract}>
                        Bên nào vi phạm điều khoản chung thì phải chịu trách nhiệm trước pháp luật
                    </li>
                    <li className={styles.contract}>
                        Hợp đồng được lập thành 02 bản có giá trị pháp lý như nhau, mỗi bên giữ một bản.
                    </li>
                </p>
            </div>
            <div className={styles.footer} >
                <p className={styles.contract}><b>ĐẠI DIỆN BÊN B</b></p>
                <p className={styles.contract}><b>ĐẠI DIỆN BÊN A</b></p>
            </div>
        </div>
    )
}
export default CONTRACT