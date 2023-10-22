import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';
function CreateAndUpdateProfileComponent(props) {

    const state = props.state

    const [formValue, setFormValue] = useState(props.value);

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
    function createProfile(data) {
        console.log("create", data)
    }
    function formInputHandler(data) {
        setFormValue(data)
        console.log(data)
        if (state === "update") {
            updateProfile(data);
        }
        if (state === "create") {
            createProfile(data)
        }

    }
    return (
        <>
            <h1>
                {state.MODE + " profile"}
            </h1>
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
                    <input {...register('dia_chi_TT', { required: true })} type='text' />
                    {errors.dia_chi_TT && <p>Chả lẻ bạn từ trên trời rơi xuống</p>}
                </label>
                <label>
                    Que quan
                    <input {...register('que_quan', { required: true })} type='text' />
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
            <button onClick={() => console.log(errors)} >
                check
            </button>
        </>

    )
}
export default CreateAndUpdateProfileComponent