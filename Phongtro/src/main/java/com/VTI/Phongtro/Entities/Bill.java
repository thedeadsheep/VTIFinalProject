package com.VTI.Phongtro.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", unique = true)
    private String bill_id;
    @Column(name = "phong_id")
    private String room_id;
    @Column(name = "ngay_tao_hd")
    private String date_create;
    @Column(name = "ngay_thanh_toan_hd")
    private String date_paid;
    @Column(name = "tong_tien")
    private int total;
    @Column(name = "gia_dien")
    private String elecPrice;
    @Column(name = "gia_nuoc")
    private String waterPrice;
    @Column(name = "so_dien")
    private int new_water_number;
    @Column(name = "so_nuoc")
    private int new_elec_number;
    @Column(name = "so_dien_cu")
    private int old_water_number;
    @Column(name = "so_nuoc_cu")
    private int old_elec_number;
    @Column(name = "da_thanh_toan")
    private boolean isPaid;

    public Bill(){

    }
    public Bill(String bill_id, String room_id,
                String date_create, String date_paid,
                int new_water_number, int new_elec_number,
                int old_elec_number, int old_water_number,
                boolean isPaid, int total,
                String waterPrice, String elecPrice){
        this.bill_id = bill_id;
        this.date_create = date_create;
        this.date_paid = date_paid;
        this.room_id = room_id;
        this.new_water_number = new_water_number;
        this.new_elec_number = new_elec_number;
        this.old_elec_number = old_elec_number;
        this.old_water_number = old_water_number;
        this.isPaid = isPaid;
        this.total = total;
        this.waterPrice = waterPrice;
        this.elecPrice = elecPrice;
    }
    public void initBill(String room_id){
        this.room_id= room_id;
        this.isPaid = false;
        this.date_create = new SimpleDateFormat("yyyyMMddHHmmss").format(Calendar.getInstance().getTime());
    }
    public void setPayDate(){
        this.date_paid =  new SimpleDateFormat("yyyyMMddHHmmss").format(Calendar.getInstance().getTime());
    }
    public String getElecPrice() {
        return elecPrice;
    }


    public String getWaterPrice() {
        return waterPrice;
    }

    public void setElecPrice(String elecPrice) {
        this.elecPrice = elecPrice;
    }

    public void setWaterPrice(String waterPrice) {
        this.waterPrice = waterPrice;
    }

    public String getDate_create() {
        return date_create;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public String getDate_paid() {
        return date_paid;
    }

    public void setBill_id(String bill_id) {
        this.bill_id = bill_id;
    }



    public void setDate_create(String date_create) {
        this.date_create = date_create;
    }

    public String getRoom_id() {
        return room_id;
    }

    public void setDate_paid(String date_paid) {
        this.date_paid = date_paid;
    }

    public int getTotal() {
        return total;
    }
    public int getNew_elec_number() {
        return new_elec_number;
    }
    public void setNew_elec_number(int elec_number) {
        this.new_elec_number = elec_number;
    }
    public int getNew_water_number() {
        return new_water_number;
    }
    public void setNew_water_number(int water_number) {
        this.new_water_number = water_number;
    }

    public void setOld_elec_number(int old_elec_number) {
        this.old_elec_number = old_elec_number;
    }

    public int getOld_elec_number() {
        return old_elec_number;
    }

    public void setOld_water_number(int old_water_number) {
        this.old_water_number = old_water_number;
    }

    public int getOld_water_number() {
        return old_water_number;
    }

    public void setIsPaid(boolean isPaid) {
        this.isPaid = isPaid;
    }

    public String getBill_id() {
        return bill_id;
    }

    public void setTotal(int total) {
        this.total = total;
    }


}

