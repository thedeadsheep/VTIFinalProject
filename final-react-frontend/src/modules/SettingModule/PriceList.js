import ModalPopup from "../components/ModalPopup"
import { useState } from "react"
import CreateAndUpdatePrice from "./CUPrice"
import styles from "./priceList.module.css"

export default function PriceList(props) {
    const pl = props.priceList || []

    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()

    function openModal(state, price) {
        if (state === "update") {
            setModalTitle("Cập nhật thông tin")
            setComponent(
                <CreateAndUpdatePrice state={{
                    MODE: "update",
                    defaultValues: price
                }}
                />
            )
            setIsOpen(true)
        }
        if (state === "create") {
            setModalTitle("Thêm dịch vụ")
            setComponent(
                <CreateAndUpdatePrice state={{
                    MODE: "create",
                }}
                />
            )
            setIsOpen(true)
        }

    }
    function closeModalPopUp(event) {
        try {
            if (event.target.id === "close-modal-position") {
                console.log(
                    'CloseModal'
                )
                setIsOpen(false)
                setComponent(<></>)
                setModalTitle("")
            }
        } catch {
            return
        }
    }
    return (
        <div className={styles.priceConfig}>
            <div className={styles.priceHeader}>
                <h2>
                    Bảng giá dịch vụ
                </h2>
                <button onClick={() => { openModal("create") }}>
                    Thêm dịch vụ
                </button>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>
                            Tên dịch vụ
                        </th>
                        <th>
                            Giá dịch vụ
                        </th>
                    </tr>
                    {pl.map(price => (
                        <tr key={price.id} onClick={() => openModal("update", price)}>
                            <td>
                                {price.name}
                            </td>
                            <td>

                                {price.price}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalPopup
                isOpen={isOpen}
                closeModal={closeModalPopUp}
                component={component}
                modalTitle={modalTitle}
            />
        </div>
    )
}