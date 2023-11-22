import { useForm } from 'react-hook-form';

export default function AddRecord(props) {
    const room = props.room
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });
    function formInputHandler() {

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
                        disabled={!isValid && !isDirty}
                    />
                </label>
            </form>

        </div>
    )
}