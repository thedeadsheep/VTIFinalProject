package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.List;

public class RenterDAO {

    public List<Renter> getAllRenter() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from Renter", Renter.class).list();
        }
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
