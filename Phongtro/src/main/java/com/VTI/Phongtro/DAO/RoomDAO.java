package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Utils.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class RoomDAO {
    public List<Room> getAllRoom(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from Room", Room.class).list();
        }
    }
    public Room getById(String id) {
        try( Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Room.class, id);
        }
    }
    public boolean saveRoom(Room room) {
        boolean result = false;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(room);
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
    public boolean updateRoom(Room room) {
        boolean resuult = false;
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.update(room);
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
