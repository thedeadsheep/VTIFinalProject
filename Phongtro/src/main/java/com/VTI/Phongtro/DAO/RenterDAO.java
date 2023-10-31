package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class RenterDAO {

    public List<Renter> getAllRenter() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from Renter", Renter.class).list();
        }
    }
    public List<Renter> getAllRenterRelative(String id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query = session.createQuery("from Renter where link_with = :id");
            query.setParameter("id", id);
            return query.getResultList();
        }

    }
    public Renter getById(String id) {
        try( Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Renter.class, id);
        }
    }
    public String saveRenter(Renter renter) {
        String result = "init";
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(renter);
            result =renter.getId();
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
        }
        return result;
    }

    public boolean updateRenter(Renter renter) {
        boolean resuult = false;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.update(renter);
            transaction.commit();
            resuult = true;
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
            resuult = false;
        } finally {
            session.close();
        }
        return resuult;
    }

}
