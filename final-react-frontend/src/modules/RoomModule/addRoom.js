import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form';
import { createNewRoom, updateRoomDetail } from "../Services/Room.Services";

import LoadingComponent from "../components/loading"

function CreateAndUpdateRoom(props) {
    const state = props.state
    const dV = state.MODE === "update" ? state.defaultValues : {}

    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        submitHandler(data)
    }
    async function submitHandler(data) {
        if (state.MODE === "create") {
            await addRoom(data)
        } else {
            await updateRoom(data)
        }
        window.location.reload()
    }
    async function updateRoom(data) {
        console.log(state.MODE, data)
        await updateRoomDetail(dV.rId, data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    async function addRoom(data) {
        console.log(state.MODE, data)
        await createNewRoom(data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    if (isLoading) {
        return (
            <>
                <LoadingComponent />
            </>
        )
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
                    {errors.name && <p className='err-message'>{errors.name.message}</p>}
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
                    {errors.roomPrice && <p className='err-message'>{errors.roomPrice.message}</p>}
                </label>
                <label>
                    <input
                        type='submit'
                        value={state.MODE === "create" ? "Thêm phòng" : "Cập nhật phòng"}
                        disabled={!isValid && !isDirty}
                    />
                </label>
            </form>
        </div>
    )
}
export default CreateAndUpdateRoom