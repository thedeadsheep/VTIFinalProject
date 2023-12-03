import { useForm } from 'react-hook-form';
import { addRoomRecord, getNewestStat } from "../Services/Room.Services"
import { useState } from 'react';
export default function AddRecord(props) {
    const room = props.room || {}
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });
    function formInputHandler(data) {
        addRecord(room.room_id, data)
    }
    async function addRecord(room_id, data) {
        await addRoomRecord(room_id, data).then((res) => {
            console.log(res)
        }).catch((errors) => {
            console.log(errors)
        }).finally((() => {
            window.location.reload()
        }))
    }
    return (
        <div>
            <h3 style={{
                margin: "5px 0"
            }}>
                {room.name}
            </h3>

            <form
                onSubmit={handleSubmit((data) =>
                    formInputHandler(data)
                )}
            >
                <label>
                    Số điện
                    <input {...register('elecNumber', {})} defaultValue={room.chiSoGanNhat.elecNumber} />
                </label>
                <label>
                    Số nước
                    <input {...register('waterNumber', {})} defaultValue={room.chiSoGanNhat.waterNumber} />
                </label>
                <label>
                    <input
                        type='submit'
                        value={"Ghi"}
                    />
                </label>
            </form>

        </div>
    )
}