package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class RenterDAO {

    public List<Renter> getAllRenter() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from Renter", Renter.class).list();
        }
    }
    public Renter getById(String id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Renter renter = new Renter();
        try {
            renter = session.load(Renter.class, id);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return renter;
    }
    public boolean saveRenter(Renter renter) {
        boolean result = false;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(renter);
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
