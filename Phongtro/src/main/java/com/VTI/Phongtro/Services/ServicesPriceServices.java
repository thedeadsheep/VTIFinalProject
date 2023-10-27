package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.ServicesPrice;

import java.util.List;

public class ServicesPriceServices {
    private final ServicesPriceDAO servicesPriceDAO = new ServicesPriceDAO();

    public List<ServicesPrice> getAllPrices(){
        return servicesPriceDAO.getAllPrice();
    }

    public boolean addService(ServicesPrice sp){
        boolean result = true;
        try{
            result = servicesPriceDAO.addNewService(sp);
        }catch(Exception e){
            e.printStackTrace();
            result = false;
        }
        return result;
    }
}
