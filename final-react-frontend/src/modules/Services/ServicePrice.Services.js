import axios from "axios"
const WEB_API = "http://localhost:8080/prices/"

function getAllServicesPrice() {
    let url = WEB_API + `getPrice`
    return axios.get(url)
}
function addNewService(data) {
    let url = WEB_API + `addService`
    return axios.post(url, data)
}
function updateServicePrice(data) {
    let url = WEB_API + `updateServicePrice`
    return axios.put(url, data)
}
export {
    getAllServicesPrice,
    addNewService,
    updateServicePrice
}