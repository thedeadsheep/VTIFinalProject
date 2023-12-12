import axios from "axios"
const WEB_API = "http://localhost:8080/room/"
async function getAllRoom() {
    let url = WEB_API + "getAllRooms"
    return await axios.get(url)
}
async function getAllRoomCanEditStat() {
    let url = WEB_API + `getForRoomStatConfig`
    return await axios.get(url)
}
async function getNewestStat(id) {
    let url = WEB_API + `getNewestStat?room_id=${id}`
    return await axios.get(url)
}
async function getRoomById(id) {
    let url = WEB_API + `getRoomById?id=${id}`
    return await axios.get(url)
}
async function getEmptyRoom() {
    let url = WEB_API + `getEmptyRoom`
    return await axios.get(url)
}
async function getNotEmptyRoom() {
    let url = WEB_API + `getNotEmptyRoom`
    return await axios.get(url)
}
async function createNewRoom(data) {
    console.log(data)
    const url = WEB_API + `addNewRoom`
    return await axios.post(url, data)
}
async function addRoomRecord(room_id, data) {
    const url = WEB_API + `addRoomRecord?room_id=${room_id}`
    return await axios.post(url, data)
}
async function setRoomRecord(room_id, data) {
    const url = WEB_API + `setForRoomStatConfig?room_id=${room_id}`
    return await axios.post(url, data)
}
async function addRenterToRoom(renter_id, room_id) {
    const url = WEB_API + `addRenterToRoom?renter_id=${renter_id}&room_id=${room_id}`
    return await axios.put(url)
}
async function updateRoomStatus(room_id) {
    const url = WEB_API + `changeStatus?id=${room_id}`
    return await axios.put(url)
}
async function updateRoomDetail(room_id, data) {
    const url = WEB_API + `updateDetailRoom?id=${room_id}`
    return await axios.put(url, data)
}
async function getAllRentersInRoom(room_id) {
    let url = WEB_API + `getRenterInRoom?room_id=${room_id}`
    return await axios.get(url)

}
async function getRSOfOCCRoom(room_id) {
    let url = WEB_API + `getRSOfOCCRoom`
    return await axios.get(url)
}
async function deleteRoomRecord(room_id, recordDate) {
    let url = WEB_API + `deleteRoomRecord?room_id=${room_id}&record_date=${recordDate}`
    return await axios.delete(url)
}
export {
    getAllRoom,
    getRoomById,
    getEmptyRoom,
    createNewRoom,
    updateRoomDetail,
    updateRoomStatus,
    addRenterToRoom,
    getAllRentersInRoom,
    getNotEmptyRoom,
    addRoomRecord,
    getNewestStat,
    getRSOfOCCRoom,
    deleteRoomRecord,
    getAllRoomCanEditStat,
    setRoomRecord
}