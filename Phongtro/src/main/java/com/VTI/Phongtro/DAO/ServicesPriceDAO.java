package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class ServicesPriceDAO {

    public List<ServicesPrice> getAllPrice(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from ServicesPrice", ServicesPrice.class).list();
        }
    }
    public boolean addNewService(ServicesPrice sp){
        boolean result = true;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try{
            transaction = session.beginTransaction();
            session.save(sp);
            transaction.commit();
        }catch(Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            result=false;
            e.printStackTrace();
        }finally {
            session.close();
        }
        return result;
    }
}
