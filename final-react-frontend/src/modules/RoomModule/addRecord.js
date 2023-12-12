import { useForm } from 'react-hook-form';
import { addRoomRecord, setRoomRecord } from "../Services/Room.Services"

export default function AddRecord(props) {
    const room = props.room || {}
    const phiaSau = props.phiaSau
    console.log(phiaSau)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });
    function formInputHandler(data) {
        if (phiaSau) {
            setRecord(room.room_id, data)
        } else {
            addRecord(room.room_id, data)
        }
    }
    async function setRecord(room_id, data) {

        await setRoomRecord(room_id, data).then((res) => {
            console.log(res)
        }).catch((errors) => {
            console.log(errors)
        }).finally((() => {
            window.location.reload()
        }))
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
                    <input {...register('elecNumber', {})} defaultValue={parseInt(room.chiSoGanNhat.elecNumber) < 0 ? 0 : room.chiSoGanNhat.elecNumber} />
                </label>
                <label style={{
                    width: "50%"
                }}>
                    Số nước
                    <input {...register('waterNumber', {})} defaultValue={parseInt(room.chiSoGanNhat.waterNumber) < 0 ? 0 : room.chiSoGanNhat.waterNumber} />
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