import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewRenter, addNewRelative, getRenterById, updateRenterProfile } from '../Services/Renter.Services';
import { ErrorMessage } from '@hookform/error-message';
import CONTRACT from './contract';
import { useNavigate, useParams } from 'react-router';
function CreateAndUpdateProfileComponent(props) {

    const state = props.state
    const navigate = useNavigate()
    const idParam = useParams()
    const [renter, setRenter] = useState({})
    const [formValue, setFormValue] = useState(props.value);
    const [isFormValue, setIsFormValue] = useState(false);
    const [isInputCCCD, setIsInputCCCD] = useState(true)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        defaultValues: getProfileToUpdate,
        mode: "onBlur"
    });


    useEffect(() => {
    }, [formValue])
    useEffect(() => {
    }, [renter])
    async function getProfileToUpdate() {
        if (state.MODE === "create") {
            return
        }
        await getRenterById(idParam.id).then((res) => {
            let ngaySinh = new Date(res.ngay_sinh).toLocaleDateString("sv-SE")
            res.ngay_sinh = ngaySinh
            setRenter(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const formStyle = {
        display: "flex",
        flexDirection: "column",
        width: "600px",
    }
    const inputTag = {
        fontFamily: "'Times New Roman', Times, serif"
    }
    async function updateProfile(data) {
        console.log("update", idParam)
        await updateRenterProfile(idParam.id, data).then((res) => {
            //noti done
            navigate(`/renter/${idParam.id}`)
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
            console.log("done")
            navigate(`/renter/${response.data}`)
        } else {
            console.log("notDone")
        }
    }
    function formInputHandler(data) {
        //Kiết xuất hợp đồng
        setFormValue(data)
        isFormValue(true)
    }
    function request() {
        let data = formValue
        if (state.MODE === "create") {
            createProfile(data)
        } else {
            updateProfile(data);
        }
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
            <h1>

                {state.LINK_WITH || state.MODE === "create" ?
                    <>
                        <p>
                            Cập nhật thông tin
                        </p>
                    </> :
                    state.MODE === "update" ? <>
                        <p>
                            Cập nhật thông tin
                        </p>
                    </> :
                        <div>
                            <p>
                                thêm khách trọ
                            </p>
                            <p>
                                Tạo hợp đồng
                            </p>
                        </div>}

            </h1>
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
                            Họ và tên lót
                            <input {...register('ho_tenlot', { required: "Nhập nội dung" })} defaultValue={renter.ho_tenlot} style={inputTag} />
                            <ErrorMessage errors={errors} name="ho_tenlot" />
                        </label>
                        <label>
                            Tên
                            <input {...register('ten', { required: "Nhập nội dung" })} defaultValue={renter.ten} style={inputTag} />
                            <ErrorMessage errors={errors} name="ten" />
                        </label>
                        <label>
                            Ngày Sinh
                            <input {...register('ngay_sinh', { required: true, valueAsDate: true })} type='date' onChange={dateInput} defaultValue={renter.ngay_sinh} style={inputTag} />
                            {errors.ngay_sinh && <p>Hãy chọn ngày sinh</p>}
                        </label>
                        <label>
                            Địa Chỉ
                            <input {...register('diaChiThuongTru', { required: true })} type='text' defaultValue={renter.diaChiThuongTru} style={inputTag} />
                            {errors.dia_chi_TT && <p>Nhập địa chỉ thường trú.</p>}
                        </label>
                        <label>
                            Quê Quán
                            <input {...register('queQuan', { required: true })} type='text' defaultValue={renter.queQuan} style={inputTag} />
                            {errors.que_quan && <p>Hãy nhập nơi bạn sinh</p>}
                        </label>
                        {isInputCCCD ? <label>
                            Số Căn Cước Công Dân/ Chứng Minh Nhân Dân
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

                        {state.LINK_WITH ? <div hidden>
                            <input {...register('link_with')} value={state.LINK_WITH} />
                        </div> : <></>}

                        <input
                            type="submit"

                            disabled={!isValid && !isDirty}
                            value={state.MODE === "create" ? "Kết xuất Hợp đồng" : "Cập Nhật"}
                            style={{ maxWidth: "200px", alignItems: "end" }} />
                        <button hidden={state.MODE === "update"} disabled={!isFormValue} onClick={request}>
                            Đăng ký
                        </button>
                    </form>
                </div>
                {
                    state.MODE === "update" ? <></>
                        :
                        <div className='contract-render' >
                            <CONTRACT renterValue={formValue} />
                        </div>
                }

            </div>

        </>

    )
}
export default CreateAndUpdateProfileComponent