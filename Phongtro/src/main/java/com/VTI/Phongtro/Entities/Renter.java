package com.VTI.Phongtro.Entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "khach")
public class Renter {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "kh_id", unique = true)
    private String id;
    @Column(name = "ho_lot")
    private String ho_tenlot;
    @Column(name = "ten", nullable = false)
    private String ten;
    @Column(name = "nam_sinh")
    private Date nam_sinh;
    @Column(name = "ngay_chuyen_vao", updatable = false)
    private Date ngay_chuyen_vao;
    @Column(name = "ngay_chuyen_di")
    private Date ngay_chuyen_di;
    @Column(name = "so_CCCD")
    private String soCCCD;
    @Column(name = "con_o")
    private boolean conO;
    @Column(name = "ten_qh")
    private String quanhe;
    @Column(name = "link_with")
    private String link_with;
    public Renter() {

    }
    public Renter(
            String ho_tenlot, String ten,
            Date nam_sinh, Date ngay_chuyen_vao,Date ngay_chuyen_di,
            String soCCCD, String link_with, String quanhe) {
        this.ngay_chuyen_vao = ngay_chuyen_vao;
        this.ho_tenlot = ho_tenlot;
        this.soCCCD = soCCCD;
        this.nam_sinh = nam_sinh;
        this.ten = ten;
        this.ngay_chuyen_di = ngay_chuyen_di;
        this.link_with= link_with;
        this.quanhe = quanhe;
        this.conO = true;
    }
    public Renter(String ho_tenlot, String ten, Date nam_sinh, String soCCCD) {
        this.ho_tenlot = ho_tenlot;
        this.ten = ten;
        this.soCCCD = soCCCD;
        this.nam_sinh = nam_sinh;
    }
    public Renter(String ho_tenlot, String ten, Date nam_sinh, Date ngay_chuyen_vao, String soCCCD) {
        this.ngay_chuyen_vao = ngay_chuyen_vao;
        this.ho_tenlot = ho_tenlot;
        this.soCCCD = soCCCD;
        this.nam_sinh = nam_sinh;
        this.ten = ten;
        this.conO = true;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHo_tenlot() {
        return ho_tenlot;
    }

    public void setHo_tenlot(String ho_tenlot) {
        this.ho_tenlot = ho_tenlot;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public boolean isConO() {
        return conO;
    }

    public void setConO(boolean conO) {
        this.conO = conO;
    }

    public Date getNgay_chuyen_di() {
        return ngay_chuyen_di;
    }

    public void setNgay_chuyen_di(Date ngay_chuyen_di) {
        this.ngay_chuyen_di = ngay_chuyen_di;
    }

    public Date getNgay_chuyen_vao() {
        return ngay_chuyen_vao;
    }

    public void setNgay_chuyen_vao(Date ngay_chuyen_vao) {
        this.ngay_chuyen_vao = ngay_chuyen_vao;
    }

    public Date getNam_sinh() {
        return nam_sinh;
    }

    public void setNam_sinh(Date nam_sinh) {
        this.nam_sinh = nam_sinh;
    }

    public String getSoCCCD() {
        return soCCCD;
    }

    public void setSoCCCD(String soCCCD) {
        this.soCCCD = soCCCD;
    }

    public String getLink_with() {
        return link_with;
    }

    public void setLink_with(String link_with) {
        this.link_with = link_with;
    }

    public String getQuanhe() {
        return quanhe;
    }

    public void setQuanhe(String quanhe) {
        this.quanhe = quanhe;
    }

    @Override
    public String toString() {
        return "KhachHang-HoTen" + ho_tenlot + " " + ten + " - ngay thang nam sinh " + nam_sinh.toString() + " - soCCCD " + soCCCD;
    }
}
