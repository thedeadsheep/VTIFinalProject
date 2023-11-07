import axios from "axios"
const WEB_API = "http://localhost:8080/room/"
async function getAllRoom() {
    let url = WEB_API + "getAllRooms"
    return await axios.get(url)
}
async function getRoomById(id) {
    let url = WEB_API + `getRoomById?id=${id}`
    return await axios.get(url)
}
async function createNewRoom(data) {
    console.log(data)
    const url = WEB_API + `addNewRoom`
    return await axios.post(url, data)
}
function addRenterToRoom(renter_id, room_id) {

}
function updateRoomStatus(room_id, data) {

}
function updateRoomDetail(room_id, data) {

}
function getAllRentersInRoom(room_id) {

}
export {
    getAllRoom,
    getRoomById,
    createNewRoom,
    addRenterToRoom,
    updateRoomDetail,
    updateRoomStatus,
    getAllRentersInRoom
}