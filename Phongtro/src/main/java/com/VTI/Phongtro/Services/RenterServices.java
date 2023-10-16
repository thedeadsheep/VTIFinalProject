package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.Entities.Renter;

import java.util.List;

public class RenterServices {
    private RenterDAO renterDAO = new RenterDAO();

    public List<Renter> getAllRenter() {
        return renterDAO.getAllRenter();
    }

    public boolean addRenter(Renter renter) {
        boolean result = false;
        try {
            result = renterDAO.saveRenter(renter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public boolean updateRenter(Renter renter) {
        boolean result = false;
        try {
            result = renterDAO.updateRenter(renter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
