import { useForm } from 'react-hook-form';
import { addRoomRecord } from "../Services/Room.Services"
export default function AddRecord(props) {
    const room = props.room
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });
    function formInputHandler(data) {
        if (data.elecNumber === "" && data.waterNumber === "") {
            console.log("phải nhập ít mhaats 1 trong 2 trường")
            return
        }

    }
    async function addRecord(data) {
        await addRoomRecord(data).then((res) => {
            console.log(res)
        }).catch((errors) => {
            console.log(errors)
        }).finally((() => {

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
                    <input {...register('elecNumber', {})} />
                </label>
                <label>
                    Số nước
                    <input {...register('waterNumber', {})} />
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