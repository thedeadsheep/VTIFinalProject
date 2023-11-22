package com.VTI.Phongtro.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name="chiso_phong")
public class RoomStat {

    @Id
    @Column(name = "ma_phong")
    private String room_id;

    @Column(name = "chiso_dien")
    private int elecNumber;

    @Column(name ="chiso_nuoc")
    private int waterNumber;

    @Id
    @Column(name = "ngay_ghi")
    private String recordDate;//

    @Column(name = "ghi_nhan")
    private boolean isCommited;

    public RoomStat(){}
    public RoomStat(String room_id, int elecNumber, int waterNumber, String recordDate, boolean isCommited){
        this.elecNumber = elecNumber;
        this.recordDate = recordDate;
        this.waterNumber = waterNumber;
        this.room_id = room_id;
        this.isCommited= isCommited;
    }


    public boolean isCommited() {
        return isCommited;
    }

    public void setCommited(boolean commited) {
        isCommited = commited;
    }

    public String getRecordDate() {
        return recordDate;
    }

    public void setElecNumber(int elecNumber) {
        this.elecNumber = elecNumber;
    }

    public int getElecNumber() {
        return elecNumber;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public int getWaterNumber() {
        return waterNumber;
    }

    public void setRecordDate(String recordDate) {
        this.recordDate = recordDate;
    }

    public String getRoom_id() {
        return room_id;
    }

    public void setWaterNumber(int waterNumber) {
        this.waterNumber = waterNumber;
    }
}
