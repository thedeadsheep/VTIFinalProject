package com.VTI.Phongtro.Services;


import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.Entities.Renter;

import java.util.Date;
import java.util.List;

public class RenterServices {
    private final RenterDAO renterDAO = new RenterDAO();

    public List<Renter> getAllRenter() {
        return renterDAO.getAllRenter();
    }

    public List<Renter> getAllRenterRelative(String id){return renterDAO.getAllRenterRelative(id);}
    public boolean addRenter(Renter renter) {
        boolean result = false;
        try {
            result = renterDAO.saveRenter(renter);
        } catch (Exception e) {
            e.printStackTrace();
        }
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
        oldRenterProfile.setNam_sinh(renter.getNam_sinh());

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
}
