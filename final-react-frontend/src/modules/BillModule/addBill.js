import { useState } from "react"
import { useForm } from 'react-hook-form';
import { createNewBill, getTempBillOfRoom } from "../Services/Bill.Services"
import styles from './addBill.module.css'
export default function AddBill(props) {

    const [tempBill, setTempBill] = useState({})
    const [loading, setLoading] = useState(true)
    const [contentShow, setContentShow] = useState("Đang tải...")
    const room_id = props.room_id
    let total = {
        water: 0,
        elec: 0,
        all: 0
    }
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },

    } = useForm({
        defaultValues: async () => getTempBill(),
        mode: "onBlur"
    });
    async function getTempBill() {
        await getTempBillOfRoom(room_id).then((res) => {
            console.log(res)
            setTempBill(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {

        })
    }
    function setTotal() {
        total.water = numberCal(tempBill.newNumber.waterNumber, tempBill.oldNumber.waterNumber, "-") * tempBill.currentPrice.waterPrice
        total.elec = numberCal(tempBill.newNumber.elecNumber, tempBill.oldNumber.elecNumber, "-") * tempBill.currentPrice.elecPrice
        total.all = parseInt(tempBill.room.roomPrice) + parseInt(total.water) + parseInt(total.elec)
    }
    function formInputHandler(data) {

        data.waterPrice = tempBill.currentPrice.waterPrice
        data.elecPrice = tempBill.currentPrice.elecPrice

        submitBill(data)
    }
    async function submitBill(data) {
        console.log(data)
        await createNewBill(room_id, data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            window.location.reload()
        })
    }
    function numberCal(a, b, dau) {
        let result
        if (dau === "-") {
            result = a - b
        }
        if (dau === "x") {
            result = a * b
        }
        return result
    }
    if (loading) return (<>
        {contentShow}
    </>)
    return (
        <div style={{
            padding: "10px"
        }}>

            {tempBill ?

                <div className={styles.billWrap}>
                    <p style={{
                        padding: "5px",
                        margin: "5px"
                    }}>
                        Hóa đơn tháng {tempBill.newNumber.recordDate.slice(4, 6)}
                    </p>
                    <form
                        onSubmit={handleSubmit((data) =>
                            formInputHandler(data)
                        )}>
                        {setTotal()}
                        <label className={`${styles.roomDetail} ${styles.addBill}`}>
                            <input {...register('roomName', { required: "Nhập nội dung" })} defaultValue={tempBill.room.name} />
                            Giá thuê Phòng:
                            <input {...register('roomPrice', { required: "Nhập nội dung" })} defaultValue={tempBill.room.roomPrice} />
                        </label>

                        <label className={`${styles.numberInput} ${styles.addBill}`}>
                            Số điện
                            <span>
                                <input {...register('new_elec_number', { required: "Nhập nội dung" })} defaultValue={tempBill.newNumber.elecNumber} />-
                                <input {...register('old_elec_number', { required: "Nhập nội dung" })} defaultValue={tempBill.oldNumber.elecNumber} />=
                                <input defaultValue={numberCal(tempBill.newNumber.elecNumber, tempBill.oldNumber.elecNumber, "-")} />
                            </span>
                        </label>
                        <label className={`${styles.total} ${styles.addBill}`}>
                            Tổng tiền điện:
                            <input defaultValue={total.elec} />
                        </label>
                        <label className={`${styles.numberInput} ${styles.addBill}`}>
                            Số nước
                            <span>
                                <input {...register('new_water_number', { required: "Nhập nội dung" })} defaultValue={tempBill.newNumber.waterNumber} />-
                                <input {...register('old_water_number', { required: "Nhập nội dung" })} defaultValue={tempBill.oldNumber.waterNumber} />=
                                <input defaultValue={numberCal(tempBill.newNumber.waterNumber, tempBill.oldNumber.waterNumber, "-")} />
                            </span>
                        </label>
                        <label className={`${styles.total} ${styles.addBill}`}>
                            Tổng tiền nước:
                            <input defaultValue={total.water} />
                        </label>
                        <label className={`${styles.total} ${styles.addBill}`}>
                            Tổng cộng:
                            <input {...register('total', { required: "Nhập nội dung" })} defaultValue={total.all} />
                        </label>
                        <label className={`${styles.createBtn} ${styles.addBill}`}>
                            <input type="submit" value={"Lưu"} />
                        </label>
                    </form>
                </div> : <></>
            }

        </div >
    )
}