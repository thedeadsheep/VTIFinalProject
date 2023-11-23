package com.VTI.Phongtro.DAO;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class ServicesPriceDAO {

    public List<ServicesPrice> getAllPrice(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from ServicesPrice sp order by sp.dateApplied desc", ServicesPrice.class).list();
        }
    }
    public ServicesPrice getCurrentPrice(){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        Query query =  session.createQuery("from ServicesPrice sp order by sp.dateApplied desc");
        List<ServicesPrice> servicesPriceList = new ArrayList<ServicesPrice>();
        try{
            servicesPriceList = query.getResultList();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (servicesPriceList.isEmpty()){
            return  new ServicesPrice();
        }
        return servicesPriceList.get(0);
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

    public void updateServicePrice(ServicesPrice servicesPrice) {
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.update(servicesPrice);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
