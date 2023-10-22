package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.Renter;
import jakarta.persistence.Column;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class RenterDTO {
    private String ho_tenlot;
    private String ten;
    private String ngay_sinh;
    private String queQuan;
    private String diaChiThuongTru;
    private String soCCCD;
    private String quanhe;
    private String link_with;

    public RenterDTO(
            String ho_tenlot, String ten,
            String ngay_sinh,
            String soCCCD, String link_with, String quanhe,
            String diaChiThuongTru, String queQuan) {
        this.ho_tenlot = ho_tenlot;
        this.soCCCD = soCCCD;
        this.ngay_sinh = ngay_sinh;
        this.ten = ten;
        this.link_with= link_with;
        this.queQuan = queQuan;
        this.diaChiThuongTru = diaChiThuongTru;
        this.quanhe = quanhe;
    }
    public Renter toRenter() throws ParseException {
        Renter renter = new Renter();
        Date nS= new SimpleDateFormat("yyyy-MM-dd").parse(this.ngay_sinh);
        renter.setNgay_sinh(nS);
        renter.setLink_with(this.link_with);
        renter.setQueQuan(this.queQuan);
        renter.setTen(this.ten);
        renter.setHo_tenlot(this.ho_tenlot);
        renter.setDiaChiThuongTru(this.diaChiThuongTru);
        renter.setQuanhe(this.quanhe);
        renter.setSoCCCD(this.soCCCD);
        return renter;
    }
}
