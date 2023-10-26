package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

public class ServicesPriceDAO {

    public List<ServicesPrice> getAllPrice(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from ServicesPrice", ServicesPrice.class).list();
        }
    }
}
