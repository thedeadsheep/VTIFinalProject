import ModalPopup from "../components/ModalPopup"
import { useState } from "react"
import CreateAndUpdatePrice from "./CUPrice"
import styles from "./priceList.module.css"

export default function PriceList(props) {
    const priceList = props.priceList || {}

    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState()
    const [modalTitle, setModalTitle] = useState()
    function openModal(price) {
        setModalTitle("Cập nhật giá")
        setComponent(
            <CreateAndUpdatePrice state={{
                defaultValues: price
            }}
            />
        )
        setIsOpen(true)
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
    function dateConverter(date) {
        if (date) {
            return `${date.slice(4, 6)}/${date.slice(6, 8)}/${date.slice(0, 4)}`
        }
        return
    }
    return (
        <div className={styles.priceConfig}>
            <div className={styles.priceHeader}>
                <h2>
                    Bảng giá dịch vụ
                </h2>

                <button onClick={() => { openModal(priceList) }}>
                    Cập nhật giá
                </button>
            </div>
            <div>
                <h3>
                    Giá áp dụng từ: {dateConverter(priceList.dateApplied)}
                </h3>
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
                    <tr>
                        <td>
                            Giá điện (VND/1kWh)
                        </td>
                        <td>
                            {priceList.elecPrice}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Giá nước (VND/1m<sup>3</sup>)
                        </td>
                        <td>
                            {priceList.waterPrice}
                        </td>
                    </tr>
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