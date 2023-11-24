package com.VTI.Phongtro.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", unique = true)
    private String bill_id;
    @Column(name = "phong_id")
    private int room_id;
    @Column(name = "ngay_tao_hd")
    private String date_create;
    @Column(name = "ngay_thanh_toan_hd")
    private String date_paid;
    @Column(name = "tong_tien")
    private int total;
    @Column(name = "gia_dien")
    private int elecPrice;
    @Column(name = "gia_nuoc")
    private int waterPrice;
    @Column(name = "so_dien")
    private int water_number;
    @Column(name = "so_nuoc")
    private int elec_number;
    @Column(name = "da_thanh_toan")
    private boolean isPaid;

    public Bill(){

    }
    public Bill(String bill_id, int room_id,
                String date_create, String date_paid,
                int water_number, int elec_number,
                boolean isPaid, int total,
                int waterPrice, int elecPrice){
        this.bill_id = bill_id;
        this.date_create = date_create;
        this.date_paid = date_paid;
        this.room_id = room_id;
        this.water_number = water_number;
        this.elec_number = elec_number;
        this.isPaid = isPaid;
        this.total = total;
        this.waterPrice = waterPrice;
        this.elecPrice = elecPrice;
    }

    public int getElecPrice() {
        return elecPrice;
    }

    public int getWaterPrice() {
        return waterPrice;
    }

    public void setElecPrice(int elecPrice) {
        this.elecPrice = elecPrice;
    }

    public void setWaterPrice(int waterPrice) {
        this.waterPrice = waterPrice;
    }

    public String getDate_create() {
        return date_create;
    }

    public void setRoom_id(int room_id) {
        this.room_id = room_id;
    }

    public String getDate_paid() {
        return date_paid;
    }

    public void setBill_id(String bill_id) {
        this.bill_id = bill_id;
    }

    public int getElec_number() {
        return elec_number;
    }

    public void setDate_create(String date_create) {
        this.date_create = date_create;
    }

    public int getRoom_id() {
        return room_id;
    }

    public void setDate_paid(String date_paid) {
        this.date_paid = date_paid;
    }

    public int getTotal() {
        return total;
    }

    public void setElec_number(int elec_number) {
        this.elec_number = elec_number;
    }

    public int getWater_number() {
        return water_number;
    }

    public void setPaid(boolean paid) {
        isPaid = paid;
    }

    public String getBill_id() {
        return bill_id;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setWater_number(int water_number) {
        this.water_number = water_number;
    }
}

