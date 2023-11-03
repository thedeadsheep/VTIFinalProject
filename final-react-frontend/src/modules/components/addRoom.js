import { useEffect } from "react"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

function AddRoom() {

    const [inputFormValue, setInputFormValue] = useState({})
    useEffect(() => {

    }, [])
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur"
    });
    function formInputHandler(data) {
        setInputFormValue(data)
        addRoom()
    }
    async function addRoom() {
        console.log(inputFormValue)
    }
    return (
        <div>

            <form
                onSubmit={handleSubmit((data) =>
                    formInputHandler(data)
                )}
            >
                <label>
                    Tên Phòng
                    <input {...register('name', { required: "Nhập nội dung" })} />
                    <ErrorMessage errors={errors} name="ten_phong" />
                </label>
                <label>
                    Giá phòng
                    <input {...register('roomPrice', {
                        required: "Nhập nội dung",
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: "Nhap so vao"
                        }
                    })} />
                    <ErrorMessage errors={errors} name="gia_phong" />
                </label>
                <label>

                    <input
                        type='submit'
                        value={"Thêm phòng"}
                        disabled={!isValid && !isDirty}
                    />
                </label>
            </form>
        </div>
    )
}
export default AddRoom