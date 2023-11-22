package com.VTI.Phongtro.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "phong")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "phong_id", unique = true)
    private int rId;
    @Column(name = "ten_phong")
    private String name;
    @Column(name = "_status")
    private int roomStatus;
    @Column(name = "price")
    private String roomPrice;
    @Column(name = "dia_chi")
    private String RoomAddress;

    public Room(){

    }
    public Room(int RId, String Name,
                int RoomStatus, String RoomPrice,
                String Renter_Id){
        this.roomStatus = RoomStatus;
        this.rId = RId;
        this.name = Name;
        this.roomPrice = RoomPrice;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setrId(int rId) {
        this.rId = rId;
    }

    public int getrId() {
        return rId;
    }

    public void setRoomPrice(String roomPrice) {
        this.roomPrice = roomPrice;
    }

    public String getRoomPrice() {
        return roomPrice;
    }

    public void setRoomStatus(int roomStatus) {
        this.roomStatus = roomStatus;
    }

    public int getRoomStatus() {
        return roomStatus;
    }
    @Override
    public String toString(){

        return "Phong: "+this.name+", hien trang: "+this.roomStatus+" gia: "+this.roomPrice;
    }
}
