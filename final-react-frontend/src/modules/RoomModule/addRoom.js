import { useEffect } from "react"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { createNewRoom } from "../Services/Room.Services";

function CreateAndUpdateRoom(props) {
    const state = props.state
    const dV = state.MODE === "update" ? state.defaultValues : {}
    const [inputFormValue, setInputFormValue] = useState({})
    useEffect(() => {

    }, [])
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });
    async function formInputHandler(data) {

        setInputFormValue(data)
        submitHandler(data)
    }
    function submitHandler(data) {
        if (state.MODE === "create") {
            addRoom(data)
        } else {
            updateRoom(data)
        }
    }
    async function updateRoom(data) {
        console.log(state.MODE, data)

    }
    async function addRoom(data) {
        console.log(state.MODE, data)
        await createNewRoom(data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
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
                    <input {...register('name', { required: "Nhập nội dung" })} defaultValue={dV.name} />
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
                    })} defaultValue={dV.roomPrice} />
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
export default CreateAndUpdateRoom