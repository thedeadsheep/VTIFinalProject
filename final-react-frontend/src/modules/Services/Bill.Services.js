import axios from "axios"

const WEB_API = "http://localhost:8080/bill/"

async function getAllBills() {
    let url = WEB_API + `getAllBill`
    return await axios.get(url)
}
async function getAllBillsByRoomId(room_id) {
    let url = WEB_API + `getAllBillOfRoom?room_id=${room_id}`
    return await axios.get(url)
}
async function getAllUnPaidBills() {
    let url = WEB_API + `getAllBillUnPaied`
    return await axios.get(url)
}
async function getTempBillOfRoom(room_id) {
    let url = WEB_API + `getTempBillOfRoom?room_id=${room_id}`
    return await axios.get(url)
}
async function getBillById(bill_id) {
    const url = WEB_API + `getBillById?bill_id=${bill_id}`
    return await axios.get(url)
}
async function createNewBill(room_id, data) {
    const url = WEB_API + `createNewBill?room_id=${room_id}`
    return await axios.post(url, data)
}
async function confirmBill(bill_id) {
    const url = WEB_API + `confirmBill?bill_id=${bill_id}`
    return await axios.put(url)
}
export {
    getAllBills,
    getAllBillsByRoomId,
    getTempBillOfRoom,
    getBillById,
    createNewBill,
    confirmBill,
    getAllUnPaidBills
}