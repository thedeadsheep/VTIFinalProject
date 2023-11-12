package com.VTI.Phongtro.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "khach_phong")
public class RenterRoom {
    @Id
    @Column(name = "ma_kh")
    private String renterId;
    @Id
    @Column(name = "ma_phong")
    private String roomId;
    @Column(name="trang_thai")
    private boolean status;
    public RenterRoom(){}
    public RenterRoom(String renterId, String roomId, boolean status){
        this.renterId= renterId;
        this.roomId = roomId;
        this.status = status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
    public void setRenterId(String renterId) {
        this.renterId = renterId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }
    public boolean getStatus(){
        return status;
    }
    public String getRoomId() {
        return roomId;
    }

    public String getRenterId() {
        return renterId;
    }
}
