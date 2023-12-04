import { updateServicePrice } from "../Services/ServicePrice.Services"
import { useForm } from 'react-hook-form';

export default function CreateAndUpdatePrice(props) {
    const state = props.state
    const price = state.defaultValues || {}
    console.log(price)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });


    function formInputHandler(data) {
        console.log(data)
        updateHandler(data)
    }
    async function updateHandler(data) {
        await updateServicePrice(price.id, data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            window.location.reload()
        })
    }
    return (
        <>
            <div style={{
                width: "100%"
            }}>
                <form
                    onSubmit={handleSubmit((data) =>
                        formInputHandler(data)
                    )}
                >

                    <label>
                        Giá điện
                        <input {...register('elecPrice', {
                            required: "Nhập nội dung",
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: "Nhập giá dịch vụ"
                            }
                        })} defaultValue={price.elecPrice} />
                        {errors.elecPrice && <p className='err-message'>{errors.elecPrice.message}</p>}
                    </label>
                    <label>
                        Giá nước
                        <input {...register('waterPrice', {
                            required: "Nhập nội dung",
                            pattern: {
                                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                message: "Nhập giá dịch vụ"
                            }
                        })} defaultValue={price.waterPrice} />
                        {errors.waterPrice && <p className='err-message'>{errors.waterPrice.message}</p>}
                    </label>
                    <label>
                        <input
                            type='submit'
                            value={"Cập nhật giá"}
                            disabled={!isValid && !isDirty}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}