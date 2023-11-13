package com.VTI.Phongtro.Services;


import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.DAO.RenterRoomDAO;
import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.RenterRoom;
import com.VTI.Phongtro.Entities.Room;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;

public class RenterServices {
    private final RenterDAO renterDAO = new RenterDAO();
    private final RenterRoomDAO rrDAO = new RenterRoomDAO();
    private final RoomDAO roomDAO = new RoomDAO();

    public List<Renter> getAllRenter() {
        return renterDAO.getAllRenter();
    }

    public List<Renter> getAllRenterRelative(String id){return renterDAO.getAllRenterRelative(id);}
    public String addRenter(Renter renter) {
        String result = "init";
        try {
            result = renterDAO.saveRenter(renter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    public String addRenterRelative(Renter renter) {
        String result = "init";
        try {
            result = renterDAO.saveRenter(renter);
            renter.setId(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        //Result là id của người vừa được add
        String chuPhong = renter.getLink_with();
        RenterRoom rr = rrDAO.getByRenterId(chuPhong);
        rr.setRenterId(renter.getId());
        rrDAO.addRenterRoom(rr);
        return result;
    }

    public boolean updateRenterProfile(String id, Renter renter) {
        //Cập nhật họ tên ngày sinh người thuê
        boolean result = false;

        Renter oldRenterProfile = renterDAO.getById(id);
        if(oldRenterProfile == null){
            return false;
        }
        oldRenterProfile.setHo_tenlot(renter.getHo_tenlot());
        oldRenterProfile.setTen(renter.getTen());
        oldRenterProfile.setNgay_sinh(renter.getNgay_sinh());
        oldRenterProfile.setDiaChiThuongTru(renter.getDiaChiThuongTru());
        oldRenterProfile.setQueQuan(renter.getQueQuan());
        oldRenterProfile.setSoCCCD(renter.getSoCCCD());
        try {
            result = renterDAO.updateRenter(oldRenterProfile);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    public boolean updateRenterStatus(String id) {
        boolean result = false;
        Renter renter = renterDAO.getById(id);
        renter.setConO(false);
        renter.setNgay_chuyen_di(new Date());
        try {
            result = renterDAO.updateRenter(renter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    public Renter getRenterById(String id){
        Renter renter = new Renter();
        try{
            renter = renterDAO.getById(id);
        }catch (Exception e){
            e.printStackTrace();
        }
        return renter;
    }
    public String changeRelative(String old_id, String new_id){
        List<Renter> renterRL = renterDAO.getAllRenterRelative(old_id);
        if(renterRL.isEmpty()){ //Không có người liên kết, đổi thành phòng trống
            return "Không có nội dung cập nhật";
        }
        Renter newRenter = renterDAO.getById(new_id);
        Renter oldRenter = renterDAO.getById(old_id);
        if (oldRenter == null){
            return "Lỗi sảy ra, sai khách trọ cũ";
        }
        if (newRenter == null){
            return "Lỗi sảy ra, sai khách trọ mới";
        }
        renterRL.removeIf(renter -> Objects.equals(renter.getId(), new_id));
        renterRL.add(oldRenter);
        newRenter.setLink_with(null);
        boolean kq1 = renterDAO.updateRenter(newRenter);


        for (Renter renter: renterRL){
            renter.setLink_with(new_id);
            boolean rs = renterDAO.updateRenter(renter);
            if(!rs){
                return "Lỗi cập nhật người dùng "+ renter.getHo_tenlot()+" " +renter.getTen();
            }
        }
        return "Cập nhật thành công";
    }
}
