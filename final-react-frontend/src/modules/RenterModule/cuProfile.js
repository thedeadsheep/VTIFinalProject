import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewRenter, addNewRelative, updateRenterProfile } from '../Services/Renter.Services';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router';
import { addRenterToRoom, getEmptyRoom } from '../Services/Room.Services';
function CreateAndUpdateProfileComponent(props) {

    const state = props.state
    const renter = props.renter || {}
    renter.ngay_sinh = new Date(renter.ngay_sinh).toLocaleDateString("sv-SE")

    const navigate = useNavigate()
    const [isInputCCCD, setIsInputCCCD] = useState(true)
    const [emptyRooms, setEmptyRooms] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({

        mode: "onBlur"
    });


    const formStyle = {
        display: "flex",
        flexDirection: "column",
        width: "600px",
    }
    const inputTag = {
        fontFamily: "'Roboto', Times, serif"
    }

    async function getAllEmptyRoom() {
        await getEmptyRoom().then((res) => {
            console.log(res)
            setEmptyRooms(res.data)
        })
    }
    async function updateProfile(data) {

        await updateRenterProfile(renter.id, data).then((res) => {
            //noti done
        }).catch((err) => {
            console.log(err)
        })
    }

    async function createProfile(data) {
        let response
        if (state.LINK_WITH) {
            await addNewRelative(state.LINK_WITH, data).then((res) => {
                console.log("add relative", res)

                response = res
                return

            }).catch((err) => {
                console.log(err)
            })
        } else {
            await addNewRenter(data).then((res) => {
                console.log(res)
                response = res


            }).catch((err) => {
                console.log(err)
            })
        }

        if (response.status === 200) {
            if (!state.LINK_WITH) {
                await takeRenterToRoom(response.data, data.roomID)
            }
            navigate(`/renter/${response.data}`)
        } else {
            console.log("notDone")
        }
    }
    async function takeRenterToRoom(renter_id, roomID) {
        console.log("renterID", renter_id, "roomid", roomID)
        console.log(roomID)
        await addRenterToRoom(renter_id, roomID)
    }
    function formInputHandler(data) {
        console.log(data)
        request(data)
    }
    async function request(data) {
        if (state.MODE === "create") {
            await createProfile(data)
        } else {
            await updateProfile(data);
        }
        window.location.reload()
    }
    function dateInput(e) {
        if (state.LINK_WITH) {
            let date = new Date(e.target.value),
                now = new Date()
            let yearSubtraction = parseInt(now.getFullYear()) - parseInt(date.getFullYear())
            if (yearSubtraction <= 18) {
                setIsInputCCCD(false)
            } else {
                setIsInputCCCD(true)
            }
        }


    }
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <div className='form-input'>
                    <form
                        onSubmit={handleSubmit((data) =>
                            formInputHandler(data)
                        )}
                        style={formStyle}>
                        <label>
                            Họ và tên lót *
                            <input {...register('ho_tenlot', { required: "Nhập nội dung" })} defaultValue={renter.ho_tenlot} style={inputTag} />
                            <ErrorMessage errors={errors} name="ho_tenlot" />
                        </label>
                        <label>
                            Tên *
                            <input {...register('ten', { required: "Nhập nội dung" })} defaultValue={renter.ten} style={inputTag} />
                            <ErrorMessage errors={errors} name="ten" />
                        </label>
                        <label>
                            Ngày Sinh *
                            <input max="2008-01-01" {...register('ngay_sinh', { required: true, valueAsDate: true })} type='date' onChange={dateInput} defaultValue={renter.ngay_sinh} style={inputTag} />
                            {errors.ngay_sinh && <p>Hãy chọn ngày sinh</p>}
                        </label>
                        <label>
                            Địa Chỉ *
                            <input {...register('diaChiThuongTru', { required: true })} type='text' defaultValue={renter.diaChiThuongTru} style={inputTag} />
                            {errors.dia_chi_TT && <p>Nhập địa chỉ thường trú.</p>}
                        </label>
                        <label>
                            Quê Quán *
                            <input {...register('queQuan', { required: true })} type='text' defaultValue={renter.queQuan} style={inputTag} />
                            {errors.que_quan && <p>Hãy nhập nơi bạn sinh</p>}
                        </label>
                        <label>
                            Số điện thoại
                            <input {...register('SDT', {
                                validate: value => value.length === 10 || "Nhập số điện thoại 10 số",
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message: "Hãy nhập số"
                                }
                            })} defaultValue={renter.soCCCD} style={inputTag} />

                        </label>
                        {isInputCCCD ? <label>
                            Số Căn Cước Công Dân/ Chứng Minh Nhân Dân *
                            <input {...register('soCCCD', {
                                required: 'Nhap thong tin vao',
                                validate: value => value.length === 9 || value.length === 12 || "nhap cai gi a",
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message: "Hãy nhập số"
                                }
                            })} defaultValue={renter.soCCCD} style={inputTag} />
                            {errors.soCCCD && <p>{errors.soCCCD.message}</p>}
                        </label> : <></>}
                        {state.MODE === "create" && !state.LINK_WITH ?
                            <>
                                <label>
                                    Phòng đăng ký *
                                    <select onClick={() => getAllEmptyRoom()} {...register("roomID", {
                                        required: "Chonj phongf"
                                    })} placeholder='Chọn Phòng'>

                                        {emptyRooms.map((room) => (
                                            <option key={room.rId} value={room.rId}>
                                                Tên phòng:  {room.name} giá: {room.roomPrice}
                                            </option>

                                        ))}
                                    </select>
                                </label>
                            </>
                            :
                            <></>}

                        {state.LINK_WITH ? <div hidden>
                            <input {...register('link_with')} value={state.LINK_WITH} />
                        </div> : <></>}

                        <input
                            type="submit"

                            disabled={!isValid && !isDirty}
                            value={state.MODE === "create" ? "Đăng ký" : "Cập Nhật"}
                            style={{ maxWidth: "100%", alignItems: "end" }} />

                    </form>
                </div>


            </div>

        </>

    )
}
export default CreateAndUpdateProfileComponent