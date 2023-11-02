import RoomList from "../components/roomList"
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import styles from "./roompage.module.css"
function RoomPage() {

    const [inputFormValue, setInputFormValue] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm({
        mode: "onBlur"
    });
    function formInputHandler(data) {
        setInputFormValue(data)
        addRoom()
    }
    async function addRoom() {
        console.log(inputFormValue)
    }
    return (
        <div>
            <h1>
                Quản lý phòng trọ
            </h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <div className={styles.addRoom}>
                    <details>
                        <summary>
                            <span>
                                <FontAwesomeIcon icon={faPlus} style={{
                                    borderRadius: "10px",
                                    background: "#F9D949",
                                    padding: "7px"
                                }} />   Thêm Phòng

                            </span>

                        </summary>
                        <form
                            onSubmit={handleSubmit((data) =>
                                formInputHandler(data)
                            )}
                        >
                            <label>
                                Tên Phòng
                                <input {...register('name', { required: "Nhập nội dung" })} />
                                <ErrorMessage errors={errors} name="ten_phong" />
                            </label>
                            <label>
                                Giá phòng
                                <input {...register('roomPrice', {
                                    required: "Nhập nội dung",
                                    pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        message: "Nhap so vao"
                                    }
                                })} />
                                <ErrorMessage errors={errors} name="gia_phong" />
                            </label>
                            <label>

                                <input
                                    type='submit'
                                    value={"Thêm phòng"}
                                    disabled={!isValid && !isDirty}
                                />
                            </label>
                        </form>
                    </details>
                </div>
                <div style={{
                    paddingLeft: "30px",
                    width: "550px",
                    margin: "0 20px"

                }}>
                    <RoomList />
                </div>
            </div>

        </div>
    )

}
export default RoomPage