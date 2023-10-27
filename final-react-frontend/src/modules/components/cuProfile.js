import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewRenter, addNewRelative } from '../Services/Renter.Services';
import { ErrorMessage } from '@hookform/error-message';
import CONTRACT from './contract';
import { useNavigate } from 'react-router';
function CreateAndUpdateProfileComponent(props) {

    const state = props.state
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState(props.value);
    const [isContract, setIsContract] = useState(false)
    const [isInputCCCD, setIsInputCCCD] = useState(true)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({ mode: "onBlur" });

    useEffect(() => {

    }, [formValue])

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
    }
    function updateProfile(data) {
        console.log("update", data)
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
            navigation()
        } else {
            console.log("notDone")
        }
    }
    function navigation() {
        if (state.LINK_WITH) {
            navigate(`/renter/${state.LINK_WITH}`)
        }
    }
    function formInputHandler(data) {
        setFormValue(data)

        setTimeout(() => {
            if (state.MODE === "update") {
                updateProfile(data);
            }
            if (state.MODE === "create") {
                createProfile(data)
            }
        }, 10000);
        console.log(data)
    }

    function onChangeContractHandler(e) {
        setIsContract(e.target.checked)
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
                {state.MODE + " profile"}
                <button onClick={() => console.log(errors)} >
                    check
                </button>
                {state.LINK_WITH ?
                    <></> : <div>
                        Tạo hợp đồng <input type='checkbox' defaultValue={false} onChange={onChangeContractHandler} />
                    </div>}

            </h1>
            <div className='form-input'>
                <form
                    onSubmit={handleSubmit((data) =>
                        formInputHandler(data)
                    )}
                    style={formStyle}>
                    <label>
                        Ho va Ten lot
                        <input {...register('ho_tenlot', { required: "Nhập nội dung" })} />
                        <ErrorMessage errors={errors} name="ho_tenlot" />
                    </label>
                    <label>
                        Ten
                        <input {...register('ten', { required: "Nhập nội dung" })} />
                        <ErrorMessage errors={errors} name="ten" />
                    </label>
                    <label>
                        ngay Sinh
                        <input {...register('ngay_sinh', { required: true, valueAsDate: true })} type='date' onChange={dateInput} />
                        {errors.ngay_sinh && <p>Hãy chọn ngày sinh</p>}
                    </label>
                    <label>
                        Dia Chi
                        <input {...register('diaChiThuongTru', { required: true })} type='text' />
                        {errors.dia_chi_TT && <p>Nhập địa chỉ thường trú.</p>}
                    </label>
                    <label>
                        Que quan
                        <input {...register('queQuan', { required: true })} type='text' />
                        {errors.que_quan && <p>Hãy nhập nơi bạn sinh</p>}
                    </label>
                    {isInputCCCD ? <label>
                        So Can cuoc cong dan/ chung minh nhan dan
                        <input {...register('soCCCD', {
                            required: 'Nhap thong tin vao',
                            validate: value => value.length === 9 || value.length === 12 || "nhap cai gi a",
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: "Nhap so vao"
                            }
                        })} />
                        {errors.soCCCD && <p>{errors.soCCCD.message}</p>}
                    </label> : <></>}

                    {state.LINK_WITH ? <div hidden>
                        <input {...register('link_with')} value={state.LINK_WITH} />
                    </div> : <></>}

                    <input
                        type="submit"
                        disabled={!isDirty || !isValid}
                        value={"Dang ky"}
                        style={{ maxWidth: "200px", alignItems: "end" }} />
                </form>
            </div>
            <div className='contract-render'>
                {isContract ?
                    <div>
                        <CONTRACT renterValue={formValue} />
                    </div> : <></>}
            </div>
        </>

    )
}
export default CreateAndUpdateProfileComponent