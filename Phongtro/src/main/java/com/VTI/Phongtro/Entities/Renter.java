package com.VTI.Phongtro.Entities;

import com.VTI.Phongtro.DTO.RenterDTO;
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
    @Column(name = "ngay_sinh")
    private Date ngay_sinh;
    @Column(name = "SDT")
    private String SDT;
    @Column(name = "que_quan")
    private String queQuan;
    @Column(name = "dia_chi_TT")
    private String diaChiThuongTru;
    @Column(name = "so_CCCD")
    private String soCCCD;
    @Column(name = "ngay_chuyen_vao", updatable = false)
    private Date ngay_chuyen_vao;
    @Column(name = "ngay_chuyen_di")
    private Date ngay_chuyen_di;

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
            Date ngay_sinh, Date ngay_chuyen_vao,Date ngay_chuyen_di,
            String soCCCD, String link_with, String quanhe,
            String diaChiThuongTru, String queQuan, String SDT) {
        this.ngay_chuyen_vao = ngay_chuyen_vao;
        this.ho_tenlot = ho_tenlot;
        this.soCCCD = soCCCD;
        this.ngay_sinh = ngay_sinh;
        this.ten = ten;
        this.ngay_chuyen_di = ngay_chuyen_di;
        this.link_with= link_with;
        this.queQuan = queQuan;
        this.diaChiThuongTru = diaChiThuongTru;
        this.quanhe = quanhe;
        this.conO = true;
        this.SDT = SDT;
    }
    public Renter(
            String ho_tenlot, String ten,
            Date ngay_sinh, Date ngay_chuyen_vao, String soCCCD,
            String diaChiThuongTru, String queQuan) {
        this.ngay_chuyen_vao = ngay_chuyen_vao;
        this.ho_tenlot = ho_tenlot;
        this.soCCCD = soCCCD;
        this.ngay_sinh = ngay_sinh;
        this.ten = ten;
        this.queQuan = queQuan;
        this.diaChiThuongTru = diaChiThuongTru;
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

    public Date getNgay_sinh() {
        return ngay_sinh;
    }

    public void setNgay_sinh(Date ngay_sinh) {
        this.ngay_sinh = ngay_sinh;
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

    public void setDiaChiThuongTru(String diaChiThuongTru) {
        this.diaChiThuongTru = diaChiThuongTru;
    }

    public String getDiaChiThuongTru() {
        return diaChiThuongTru;
    }

    public void setQueQuan(String queQuan) {
        this.queQuan = queQuan;
    }

    public String getQueQuan() {
        return queQuan;
    }

    public String getSDT() {
        return SDT;
    }

    public void setSDT(String SDT) {
        this.SDT = SDT;
    }
    public RenterDTO toDTO(){
        return  new RenterDTO(ho_tenlot,ten,ngay_sinh.toString(),soCCCD,link_with,quanhe,diaChiThuongTru,queQuan,SDT,id);
    }
    @Override
    public String toString() {
        return "KhachHang-HoTen" + ho_tenlot + " " + ten + " - soCCCD " + soCCCD;
    }
}
