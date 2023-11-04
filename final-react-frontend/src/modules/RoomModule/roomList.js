import styles from "./roomList.module.css"

function RoomList() {
    const exData = [
        {
            id: "1",
            name: "Phong 1",
            roomPrice: "1000000",
            roomStatus: "Trống",
        },
        {
            id: "2",
            name: "Phong 2",
            roomPrice: "1000000",
            roomStatus: "Có người ở",
        },
        {
            id: "3",
            name: "Phong 3",
            roomPrice: "1000000",
            roomStatus: "Trống",
        },
        {
            id: "4",
            name: "Phong 4",
            roomPrice: "1000000",
            roomStatus: "Đang sửa chữa",
        },
        {
            id: "5",
            name: "Phong 5",
            roomPrice: "1000000",
            roomStatus: "Có người ở",
        }
    ]

    return (
        <div >
            <h3>
                Danh sách phòng
            </h3>
            <div className={`${styles.cardWrap}`}>
                {
                    exData.map(room => (
                        <div className={`${styles.roomCard}`} key={room.id}>

                            <div className={`${styles.cardBody}`}>
                                <p>
                                    {room.name}
                                </p>

                                <p>
                                    Trạng thái:
                                </p>
                                <p
                                    className={room.roomStatus === "Trống" ?
                                        `${styles.phongTrong}` :
                                        room.roomStatus === "Có người ở" ?
                                            `${styles.coNguoi}` : `${styles.dangSuaChua}`}>
                                    {room.roomStatus}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}
export default RoomList