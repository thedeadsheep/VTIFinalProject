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


export {
    getAllRenters
}