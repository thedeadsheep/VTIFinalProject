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
    public ServicesPrice getById(int id) {
        try( Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(ServicesPrice.class, id);
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

    public boolean updateServicePrice(ServicesPrice servicesPrice) {
        boolean result = false;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.update(servicesPrice);
            transaction.commit();
            result = true;
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
            result = false;
        } finally {
            session.close();
        }
        return result;
    }
}
