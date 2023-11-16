package com.VTI.Phongtro.Entities;

import java.util.Date;

public class Bill {

    private String bill_id;
    private int room_id;
    private Date date_create;
    private Date date_paid;
    private int total;
    private int water_number;
    private int elec_number;
    private boolean isPaid;

    public Bill(){

    }
    public Bill(String bill_id, int room_id,
                Date date_create, Date date_paid,
                int water_number, int elec_number,
                boolean isPaid, int total){
        this.bill_id = bill_id;
        this.date_create = date_create;
        this.date_paid = date_paid;
        this.room_id = room_id;
        this.water_number = water_number;
        this.elec_number = elec_number;
        this.isPaid = isPaid;
        this.total = total;
    }

    public Date getDate_create() {
        return date_create;
    }

    public void setRoom_id(int room_id) {
        this.room_id = room_id;
    }

    public Date getDate_paid() {
        return date_paid;
    }

    public void setBill_id(String bill_id) {
        this.bill_id = bill_id;
    }

    public int getElec_number() {
        return elec_number;
    }

    public void setDate_create(Date date_create) {
        this.date_create = date_create;
    }

    public int getRoom_id() {
        return room_id;
    }

    public void setDate_paid(Date date_paid) {
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

