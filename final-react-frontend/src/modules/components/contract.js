import "./contract.css"

function CONTRACT(props) {

    const renter = props.renterValue || {}

    function getDate() {
        const date = new Date()
        let ngay = date.getDay()
        let thang = date.getMonth()
        let nam = date.getFullYear()
        return `ngày ${ngay} tháng ${thang} ${nam}`
    }
    function formatDate(date) {
        let d = new Date(date),
            day = d.getDay(),
            month = d.getMonth(),
            year = d.getFullYear()
        return [day, month, year].join("-")

    }

    return (
        <div className="A4-size">
            <div className="header">
                <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p>
                    Độc lập - Tự do - Hạnh phúc
                </p>
                <p><b>HỢP ĐỒNG THUÊ TRỌ</b></p>
            </div>
            <div className="body">
                <p>
                    Hôm nay, {getDate()}, tại địa chỉ:  <input className="contract contract-input address" />
                </p>
                <p>Chúng tôi gồm</p>
                <p>1. Đại diện bên cho thuê (Bên A)</p>
                <p>Ông/bà: <input className="contract contract-input" /> Sinh ngày: <input className="contract contract-input" /></p>
                <p>Nơi đăng ký thường trú: <input className="contract contract-input address" /> </p>
                <p>
                    CCCD/CMND số:  <input className="contract contract-input" /> cấp ngày  <input className="contract contract-input" /> tại: <input className="contract contract-input address" />
                </p>
                <p>Số điện thoại: <input className="contract contract-input" /></p>
                <p>2. Đại diện bên thuê (Bên B)</p>
                <p>Ông/bà:  <input className="contract contract-input" defaultValue={renter.ho_tenlot + " " + renter.ten} />
                    Sinh ngày:  <input className="contract contract-input" defaultValue={formatDate(renter.ngay_sinh)} />
                </p>
                <p>Nơi đăng ký thường trú:  <input className="contract contract-input address" defaultValue={renter.dia_chi_TT} /></p>
                <p>
                    CCCD/CMND số:  <input className="contract contract-input" defaultValue={renter.soCCCD} /> cấp ngày  <input className="contract contract-input" /> tại: <input className="contract contract-input address" />
                </p>
                <p>Sau khi bàn bạc trên tinh thần dân chủ, hai bên đưa ra thống nhất như sau:</p>
                <p>Bên A đồng ý cho bên B thuê 01 phòng ỏ tại địa chỉ:  <input className="contract contract-input address" /> </p>
                <p>Giá thuê:  <input className="contract contract-input" /> đ/tháng</p>
                <p>Tiền điện:  <input className="contract contract-input" /> đ/kWh tính theo chỉ số công tơ điện</p>
                <p>Tiền nước: <input className="contract contract-input" /> đ/m<sup>3</sup> tính theo chỉ số của đồng hồ nước</p>
                <p>Số tiền đặt cọc:    <input className="contract contract-input" />   </p>
                <p>Hợp đồng có giá trị từ {getDate()}</p>
                <p><b>TRÁCH NHIỆM CỦA CÁC BÊN</b></p>
                <p>Trách nhiệm của bên A:</p>
                <p>
                    <li>
                        Tạo mọi điều kiện thuận lợi để bên B thực hiện theo hợp đồng.
                    </li>
                    <li>
                        Cung cấp nguồn điện, nước, cho bên B sử dụng.
                    </li>
                </p>
                <p>Trách nhiệm của bên B:</p>
                <p>
                    <li>
                        Thanh toán đầy đủ các khoản tiền theo đúng thỏa thuận.
                    </li>
                    <li>
                        Bảo quản các trang thiết bị và cơ sở vật chất của bên A trang bị cho ban đầu.
                    </li>
                    <li>
                        Không được tự ý sửa chữa, cải tạo cơ sở vật chất khi chưa được sự đồng ý của bên A.
                    </li>
                    <li>
                        Bên B phải chấp hành mọi quy định của pháp luật Nhà nước và quy định của địa phương.
                    </li>
                    <li>
                        Nếu bên B cho khách ở qua đêm thì phải khai báo với bên A (chủ nhà), đồng thời phải chịu trách nhiều về hành vi của khách trong thời gian ở lại.
                    </li>
                </p>
                <p><b>TRÁCH NHIỆM CHUNG</b></p>
                <p>
                    <li>
                        Trong thời gian hợp đồng còn hiệu lực nếu bên nào vi phạm các điều khoản đã thỏa thuận thì bên còn lại có <b>quyền đơn phương chấm dứt hợp đồng</b>;
                    </li>
                    <li>
                        Một trong hai bên muốn chấm dứt hợp đồng trước thời hạn thì phải báo trước cho bên kia ít nhất 30 ngày và hai bên phải có sự thống nhất.
                    </li>
                    <li>
                        Bên A phải trả lại tiền đặt cọc cho bên B.
                    </li>
                    <li>
                        Bên nào vi phạm điều khoản chung thì phải chịu trách nhiệm trước pháp luật
                    </li>
                    <li>
                        Hợp đồng được lập thành 02 bản có giá trị pháp lý như nhau, mỗi bên giữ một bản.
                    </li>
                </p>
            </div>
            <div className="footer" >
                <p><b>ĐẠI DIỆN BÊN B</b></p>
                <p><b>ĐẠI DIỆN BÊN A</b></p>
            </div>
        </div>
    )
}
export default CONTRACT