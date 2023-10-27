import "./contract.css"

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
    if (Object.keys(renter).length <= 0) {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    return (
        <div className="A4-size">
            <div className="header">
                <p className="contract">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p className="contract">
                    Độc lập - Tự do - Hạnh phúc
                </p>
                <p className="contract"><b>HỢP ĐỒNG THUÊ TRỌ</b></p>
            </div>
            <div className="body">
                <p className="contract">
                    Hôm nay, {getDate()}, tại địa chỉ:  <input className="contract contract-input address" />
                </p>
                <p className="contract">Chúng tôi gồm</p>
                <p className="contract">1. Đại diện bên cho thuê (Bên A)</p>
                <p className="contract">Ông/bà: <input className="contract contract-input" /> Sinh ngày: <input className="contract contract-input" /></p>
                <p className="contract">Nơi đăng ký thường trú: <input className="contract contract-input address" /> </p>
                <p className="contract">
                    CCCD/CMND số:  <input className="contract contract-input" /> cấp ngày  <input className="contract contract-input" /> tại: <input className="contract contract-input address" />
                </p>
                <p className="contract">Số điện thoại: <input className="contract contract-input" /></p>
                <p className="contract">2. Đại diện bên thuê (Bên B)</p>
                <p className="contract">Ông/bà:  <input className="contract contract-input" defaultValue={renter.ho_tenlot + " " + renter.ten} />
                    Sinh ngày:  <input className="contract contract-input" defaultValue={formatDate(renter.ngay_sinh)} />
                </p>
                <p className="contract">Nơi đăng ký thường trú:  <input className="contract contract-input address" defaultValue={renter.diaChiThuongTru} /></p>
                <p className="contract">
                    CCCD/CMND số:  <input className="contract contract-input" defaultValue={renter.soCCCD} /> cấp ngày  <input className="contract contract-input" /> tại: <input className="contract contract-input address" />
                </p>
                <p className="contract">Sau khi bàn bạc trên tinh thần dân chủ, hai bên đưa ra thống nhất như sau:</p>
                <p className="contract">Bên A đồng ý cho bên B thuê 01 phòng ỏ tại địa chỉ:  <input className="contract contract-input address" /> </p>
                <p className="contract">Giá thuê:  <input className="contract contract-input" /> đ/tháng</p>
                <p className="contract">Tiền điện:  <input className="contract contract-input" /> đ/kWh tính theo chỉ số công tơ điện</p>
                <p className="contract">Tiền nước: <input className="contract contract-input" /> đ/m<sup>3</sup> tính theo chỉ số của đồng hồ nước</p>
                <p className="contract">Số tiền đặt cọc:    <input className="contract contract-input" />   </p>
                <p className="contract">Hợp đồng có giá trị từ {getDate()}</p>
                <p className="contract"><b>TRÁCH NHIỆM CỦA CÁC BÊN</b></p>
                <p className="contract">Trách nhiệm của bên A:</p>
                <p className="contract">
                    <li className="contract">
                        Tạo mọi điều kiện thuận lợi để bên B thực hiện theo hợp đồng.
                    </li>
                    <li className="contract">
                        Cung cấp nguồn điện, nước, cho bên B sử dụng.
                    </li>
                </p>
                <p className="contract">Trách nhiệm của bên B:</p>
                <p className="contract">
                    <li className="contract">
                        Thanh toán đầy đủ các khoản tiền theo đúng thỏa thuận.
                    </li>
                    <li className="contract">
                        Bảo quản các trang thiết bị và cơ sở vật chất của bên A trang bị cho ban đầu.
                    </li>
                    <li className="contract">
                        Không được tự ý sửa chữa, cải tạo cơ sở vật chất khi chưa được sự đồng ý của bên A.
                    </li>
                    <li className="contract">
                        Bên B phải chấp hành mọi quy định của pháp luật Nhà nước và quy định của địa phương.
                    </li>
                    <li className="contract">
                        Nếu bên B cho khách ở qua đêm thì phải khai báo với bên A (chủ nhà), đồng thời phải chịu trách nhiều về hành vi của khách trong thời gian ở lại.
                    </li>
                </p>
                <p className="contract"><b>TRÁCH NHIỆM CHUNG</b></p>
                <p className="contract">
                    <li className="contract">
                        Trong thời gian hợp đồng còn hiệu lực nếu bên nào vi phạm các điều khoản đã thỏa thuận thì bên còn lại có <b>quyền đơn phương chấm dứt hợp đồng</b>;
                    </li>
                    <li className="contract">
                        Một trong hai bên muốn chấm dứt hợp đồng trước thời hạn thì phải báo trước cho bên kia ít nhất 30 ngày và hai bên phải có sự thống nhất.
                    </li>
                    <li className="contract">
                        Bên A phải trả lại tiền đặt cọc cho bên B.
                    </li>
                    <li className="contract">
                        Bên nào vi phạm điều khoản chung thì phải chịu trách nhiệm trước pháp luật
                    </li>
                    <li className="contract">
                        Hợp đồng được lập thành 02 bản có giá trị pháp lý như nhau, mỗi bên giữ một bản.
                    </li>
                </p>
            </div>
            <div className="footer" >
                <p className="contract"><b>ĐẠI DIỆN BÊN B</b></p>
                <p className="contract"><b>ĐẠI DIỆN BÊN A</b></p>
            </div>
        </div>
    )
}
export default CONTRACT