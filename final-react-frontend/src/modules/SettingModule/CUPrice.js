
import { useForm } from 'react-hook-form';

export default function CreateAndUpdatePrice(props) {
    const state = props.state

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });


    function formInputHandler(data) {
        console.log(data)
    }
    return (
        <>
            <h1>
                CreateAndUpdatePrice
            </h1>
            <div>
                <form
                    onSubmit={handleSubmit((data) =>
                        formInputHandler(data)
                    )}
                >
                    <label>
                        Tên Dịch vụ
                        <input {...register('name', { required: "Nhập nội dung" })} />
                        {errors.name && <p className='err-message'>{errors.name.message}</p>}
                    </label>
                    <label>
                        Giá dịch vụ
                        <input {...register('price', {
                            required: "Nhập nội dung",
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: "Nhập giá dịch vụ"
                            }
                        })} />
                        {errors.price && <p className='err-message'>{errors.price.message}</p>}
                    </label>
                    <label>
                        <input
                            type='submit'
                            value={state.MODE === "create" ? "Thêm dịch vụ" : "Cập nhật dịch vụ"}
                            disabled={!isValid && !isDirty}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}