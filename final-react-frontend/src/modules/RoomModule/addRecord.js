import { useForm } from 'react-hook-form';
import { addRoomRecord, getNewestStat } from "../Services/Room.Services"
import { useState } from 'react';
export default function AddRecord(props) {
    const room = props.room || {}
    const [oldRecord, setOldRecord] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
        defaultValues: getOldRecord
    });
    function formInputHandler(data) {
        addRecord(room.rId, data)
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
    async function getOldRecord() {
        await getNewestStat(room.rId).then((res) => {
            console.log(res.data)
            setOldRecord(res.data)
        }).catch((err) => {
            console.log(err)
        })
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
                    <input {...register('elecNumber', {})} defaultValue={oldRecord.elecNumber} />
                </label>
                <label>
                    Số nước
                    <input {...register('waterNumber', {})} defaultValue={oldRecord.waterNumber} />
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