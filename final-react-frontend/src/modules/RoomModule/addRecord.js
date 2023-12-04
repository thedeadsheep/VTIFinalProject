import { useForm } from 'react-hook-form';
import { addRoomRecord } from "../Services/Room.Services"

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
        <div >
            <h3 style={{
                margin: "10px 0"
            }}>
                {room.roomName}
            </h3>

            <form
                onSubmit={handleSubmit((data) =>
                    formInputHandler(data)
                )}
                style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                <label style={{
                    width: "50%"
                }}>
                    Số điện
                    <input {...register('elecNumber', {})} defaultValue={room.chiSoGanNhat.elecNumber} />
                </label>
                <label style={{
                    width: "50%"
                }}>
                    Số nước
                    <input {...register('waterNumber', {})} defaultValue={room.chiSoGanNhat.waterNumber} />
                </label>
                <label style={{
                    width: "100%"
                }}>
                    <input
                        type='submit'
                        value={"Ghi"}
                        style={{
                            background: "#FFF34A",
                            border: "none"
                        }}
                    />
                </label>
            </form>

        </div>
    )
}