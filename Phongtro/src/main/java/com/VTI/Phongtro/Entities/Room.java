package com.VTI.Phongtro.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "phong")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "phong_id", unique = true)
    private String rId;
    @Column(name = "ten_phong")
    private String name;
    @Column(name = "_status")
    private String roomStatus;
    @Column(name = "price")
    private String roomPrice;
    @Column(name = "ma_kh")
    private String renter_id;

    public Room(){

    }
    public Room(String RId, String Name,
                String RoomStatus, String RoomPrice,
                String Renter_Id){
        this.roomStatus = RoomStatus;
        this.rId = RId;
        this.name = Name;
        this.roomPrice = RoomPrice;
        this.renter_id =Renter_Id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setRenter_id(String renter_id) {
        this.renter_id = renter_id;
    }

    public String getRenter_id() {
        return renter_id;
    }

    public void setrId(String rId) {
        this.rId = rId;
    }

    public String getrId() {
        return rId;
    }

    public void setRoomPrice(String roomPrice) {
        this.roomPrice = roomPrice;
    }

    public String getRoomPrice() {
        return roomPrice;
    }

    public void setRoomStatus(String roomStatus) {
        this.roomStatus = roomStatus;
    }

    public String getRoomStatus() {
        return roomStatus;
    }
    @Override
    public String toString(){

        return "Phong: "+this.name+", hien trang: "+this.roomStatus+" gia: "+this.roomPrice;
    }
}
