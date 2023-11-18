import { getAllServicesPrice, addNewService, updateServicePrice } from "../Services/ServicePrice.Services"
import { useForm } from 'react-hook-form';

export default function CreateAndUpdatePrice(props) {
    const state = props.state
    const price = state.defaultValues || {}
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur",
    });


    function formInputHandler(data) {
        console.log(data)
        if (state.MODE === "create") {
            createHandler(data)
        } else if (state.MODE === "update") {
            updateHandler(data)
        }
    }
    async function createHandler(data) {
        await addNewService(data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            window.location.reload()
        })
    }
    async function updateHandler(data) {
        await updateServicePrice(data).then((res) => {
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
                        Tên Dịch vụ
                        <input {...register('name', { required: "Nhập nội dung" })} defaultValue={price.name} />
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
                        })} defaultValue={price.price} />
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