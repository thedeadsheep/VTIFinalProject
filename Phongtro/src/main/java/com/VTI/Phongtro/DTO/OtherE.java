package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.ServicesPrice;

import java.util.List;

public class OtherE {
    private Renter chuNha;
    private Room thongTinPhong;
    private ServicesPrice giaDichVu;

    public ServicesPrice getGiaDichVu() {
        return giaDichVu;
    }

    public void setChuNha(Renter chuNha) {
        this.chuNha = chuNha;
    }

    public Renter getChuNha() {
        return chuNha;
    }

    public void setGiaDichVu(ServicesPrice giaDichVu) {
        this.giaDichVu = giaDichVu;
    }

    public Room getThongTinPhong() {
        return thongTinPhong;
    }

    public void setThongTinPhong(Room thongTinPhong) {
        this.thongTinPhong = thongTinPhong;
    }
}
