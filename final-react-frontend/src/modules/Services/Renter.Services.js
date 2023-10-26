import axios from "axios"

const WEB_API = "http://localhost:8080/renter/"

async function getAllRenters() {
    const url = WEB_API + "getAllRenters"

    let response = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.json()
}
async function getRenterById(id) {
    const url = WEB_API + `getRenterById?id=${id}`

    let response = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.json()
}
async function getAllRenterRelatives(id) {
    const url = WEB_API + `getAllRenterRelatives?id=${id}`

    let response = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.json()
}
async function addNewRenter(data) {
    const url = WEB_API + `addNewRenter`
    return await axios.post(url, data)
}
async function addNewRelative(id, data) {
    const url = WEB_API + `addNewRenterRelative?id=${id}`
    return await axios.post(url, data)
}
async function confirmMoveAway(id) {
    const url = WEB_API + `updateRenterStatus?id=${id}`
    return await axios.put(url)
}
export {
    addNewRelative,
    addNewRenter,
    getAllRenters,
    getRenterById,
    getAllRenterRelatives,
    confirmMoveAway
}