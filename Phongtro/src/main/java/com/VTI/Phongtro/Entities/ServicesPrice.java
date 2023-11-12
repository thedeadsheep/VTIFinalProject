package com.VTI.Phongtro.Entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "gia_DV")
public class ServicesPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DV_id", unique = true)
    private int id;

    @Column(name="ten_dv")
    private String name;

    @Column(name = "gia_dv")
    private String price;
    public ServicesPrice(){

    }
    public ServicesPrice(int id, String name, String price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
    @Override
    public String toString(){
        return "Ten dich vu:" +this.name +" gia dich vu: " +this.price;
    }
}
