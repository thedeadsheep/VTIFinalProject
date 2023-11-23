package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Utils.HibernateUtil;
import com.google.gson.Gson;
import org.hibernate.Session;

import java.util.List;

public class ServicesPriceServices {
    private final ServicesPriceDAO servicesPriceDAO = new ServicesPriceDAO();

    public List<ServicesPrice> getAllPrices(){
        return servicesPriceDAO.getAllPrice();
    }
    public String getCurrentPrice(){
        return new Gson().toJson(servicesPriceDAO.getCurrentPrice());
    }

    public boolean addService(ServicesPrice sp){
        boolean result = true;
        sp.setDateAppliedDefault();
        try{
            result = servicesPriceDAO.addNewService(sp);
        }catch(Exception e){
            e.printStackTrace();
            result = false;
        }
        return result;
    }
    public boolean updateServicePrice(int sp_id, ServicesPrice servicesPrice){
        boolean result = true;

        ServicesPrice oldSP = servicesPriceDAO.getById(sp_id);
        if(oldSP != null){
            oldSP.setExpireDateDefault();
            try{
                servicesPriceDAO.updateServicePrice(oldSP);
            }catch (Exception e){
                e.printStackTrace();
                result =false;
            }
        }
        servicesPrice.setDateAppliedDefault();
        try{
            servicesPriceDAO.addNewService(servicesPrice);
        }catch (Exception e){
            e.printStackTrace();
            result =false;
        }
        return result;
    }
}
