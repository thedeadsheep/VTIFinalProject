package com.VTI.Phongtro.DAO;
import com.VTI.Phongtro.Entities.RenterRoom;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class RenterRoomDAO {
    public List<RenterRoom> getAllRoom(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from RenterRoom", RenterRoom.class).list();
        }
    }
    public RenterRoom getByRenterId(String id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query = session.createQuery("from RenterRoom where renterId = :id and status = true");
            query.setParameter("id", id);
            RenterRoom rr = new RenterRoom();
            try{
                 rr = (RenterRoom) query.getSingleResult();
            }catch (Exception e){
                e.printStackTrace();
            }
            return rr;
        }
    }
    public RenterRoom getCorrectly(String room_id, String renter_id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query = session.createQuery("from RenterRoom where roomId = :id and renterId = :rid");
            query.setParameter("id", room_id);
            query.setParameter("rid", renter_id);
            RenterRoom rr = (RenterRoom) query.getSingleResult();
            if (rr == null){
                return new RenterRoom();
            }
            return rr;
        }
    }
    public List<RenterRoom> getByRoomId(String id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query = session.createQuery("from RenterRoom where roomId = :id  and status = 1");
            query.setParameter("id", id);
            return query.getResultList();
        }
    }
    public void addRenterRoom(RenterRoom rr){
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(rr);
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
    public void updateRRStatus(RenterRoom rr){
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.update(rr);
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
