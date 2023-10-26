package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.ServicesPrice;

import java.util.List;

public class ServicesPriceServices {
    private final ServicesPriceDAO servicesPriceDAO = new ServicesPriceDAO();

    public List<ServicesPrice> getAllPrices(){
        return servicesPriceDAO.getAllPrice();
    }
}
