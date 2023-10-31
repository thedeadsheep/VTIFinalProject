package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;

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
    public boolean updateServicePrice(String sp_id, ServicesPrice servicesPrice){
        boolean result = false;
        ServicesPrice oldSP = servicesPriceDAO.getById(sp_id);
        if(oldSP == null){
            return false;
        }
        oldSP.setPrice(servicesPrice.getPrice());
        oldSP.setName(servicesPrice.getName());
        try{
            result = servicesPriceDAO.updateServicePrice(oldSP);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
