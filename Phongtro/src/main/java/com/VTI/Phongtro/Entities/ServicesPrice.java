package com.VTI.Phongtro.Entities;

import jakarta.persistence.*;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "gia_DV")
public class ServicesPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DV_id", unique = true)
    private int id;

    @Column(name="gia_dien")
    private String elecPrice;
    @Column(name="gia_nuoc")
    private String waterPrice;
    @Column(name = "thoi_gian_ap_dung")
    private String dateApplied;
    @Column(name = "thoi_gian_ket_thuc")
    private String expireDate ;

    public ServicesPrice(){

    }
    public ServicesPrice(int id, String elecPrice, String waterPrice, String dateApplied, String expireDate){
        this.id= id;
        this.elecPrice = elecPrice;
        this.waterPrice = waterPrice;
        this.dateApplied = dateApplied;
        this.expireDate = expireDate;
    }
    public void setDateAppliedDefault(){
        String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(Calendar.getInstance().getTime());
        this.dateApplied = timeStamp;
    }
    public void setExpireDateDefault(){
        String timeStamp = new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime());
        this.expireDate = timeStamp;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setdateApplied(String dateApplied) {
        this.dateApplied = dateApplied;
    }

    public void setElecPrice(String elecPrice) {
        this.elecPrice = elecPrice;
    }

    public void setexpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

    public void setWaterPrice(String waterPrice) {
        this.waterPrice = waterPrice;
    }

    public String getdateApplied() {
        return dateApplied;
    }

    public String getElecPrice() {
        return elecPrice;
    }

    public String getexpireDate() {
        return expireDate;
    }

    public String getWaterPrice() {
        return waterPrice;
    }
}
