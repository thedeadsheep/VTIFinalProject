
import { useForm } from 'react-hook-form';
import { confirmMoveAway } from "../Services/Renter.Services"
export default function MoveOut(props) {
    const renter = props.renter || {}
    const renterRL = props.renterRL || []
    const renterRS = renterRL.filter((rt) => rt.conO === true)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({

        mode: "onBlur"
    });

    function formInputHandler(data) {
        console.log(data)
        changeStatus(data)
    }
    async function changeStatus(data) {
        await confirmMoveAway(data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            window.location.reload()
        })
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit((data) =>
                    formInputHandler(data)
                )}>
                <label>
                    Người Chuyển đi
                    <select
                        {...register("old_id", { required: true })}
                    >
                        <option defaultValue hidden>

                        </option>
                        <option value={renter.id}>
                            {`Tên ${renter.ho_tenlot} ${renter.ten} CMND/CCCD ${renter.soCCCD}`}
                        </option>
                    </select>
                </label>
                <label>
                    Để lại phòng cho

                    <select
                        {...register("new_id", { required: true })}
                    >
                        {renterRS.length > 0 ?
                            <>
                                {renterRS.map(rt => (
                                    <option key={rt.id} value={rt.id}>
                                        Tên {rt.ho_tenlot} {rt.ten} CMND/CCCD {rt.soCCCD}
                                    </option>
                                ))}
                            </> :
                            <>
                                <option defaultValue value={"khongcogi"}>
                                    Không có Người liên kết
                                </option>
                            </>
                        }

                    </select>
                </label>


                <input
                    type="submit"

                    disabled={!isValid}
                    value="Chuyển giao"
                    style={{ maxWidth: "100%", alignItems: "end" }} />
            </form>
        </div>
    )
}