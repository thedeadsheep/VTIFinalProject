import { useState } from 'react';
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
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({ mode: "onBlur" });

    const formStyle = {
        display: "flex",
        flexDirection: "column"
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
            navigate("/renter")
        } else {
            console.log("notDone")
        }
    }
    function formInputHandler(data) {
        setFormValue(data)
        console.log(data)
        if (state.MODE === "update") {
            updateProfile(data);
        }
        if (state.MODE === "create") {

            createProfile(data)
        }

    }
    function onChangeContractHandler(e) {
        setIsContract(e.target.checked)

    }
    return (
        <>
            <h1>
                {state.MODE + " profile"}
                <button onClick={() => console.log(errors)} >
                    check
                </button>
                <div>
                    Tạo hợp đồng <input type='checkbox' defaultValue={false} onChange={onChangeContractHandler} />
                </div>
            </h1>
            <div className='form-input'>
                <form onSubmit={handleSubmit((data) =>
                    formInputHandler(data)
                )}
                    style={formStyle}>
                    <label>
                        Ho va Ten lot
                        <input {...register('ho_tenlot', { required: true })} />
                    </label>
                    <label>
                        Ten
                        <input {...register('ten', { required: "Viet gi do vao di ban ei" })} />
                        <ErrorMessage errors={errors} name="ten" />
                    </label>
                    <label>
                        ngay Sinh
                        <input {...register('ngay_sinh', { required: true, valueAsDate: true })} type='date' />
                        {errors.ngay_sinh && <p>Chả lẻ bạn từ trên trời rơi xuống</p>}
                    </label>
                    <label>
                        Dia Chi
                        <input {...register('diaChiThuongTru', { required: true })} type='text' />
                        {errors.dia_chi_TT && <p>Chả lẻ bạn từ trên trời rơi xuống</p>}
                    </label>
                    <label>
                        Que quan
                        <input {...register('queQuan', { required: true })} type='text' />
                        {errors.que_quan && <p>Chả lẻ bạn từ trên trời rơi xuống</p>}
                    </label>
                    <label>
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
                    </label>
                    {state.LINK_WITH ? <div hidden>
                        <input {...register('link_with')} value={state.LINK_WITH} />
                    </div> : <></>}

                    <input type="submit" disabled={!isDirty || !isValid} />
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