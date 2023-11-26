package com.VTI.Phongtro.DAO;


import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class RoomStatDAO {
    public List<RoomStat> getAllRoomStat(){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from RoomStat").getResultList();
        }
    }

    public List<RoomStat>getRoomStatByRoomId(String room_id){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query =  session.createQuery("from RoomStat where room_id = :id");
            query.setParameter("id", room_id);
            return query.getResultList();
        }
    }
    public RoomStat getTheNewestRecordOfRoom(String room_id){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        Query query =  session.createQuery("from RoomStat r where room_id = :id order by r.recordDate desc");
        query.setParameter("id", room_id);
        List<RoomStat> RL = new ArrayList<RoomStat>();
        try{
            RL = query.getResultList();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (RL.isEmpty()){
            return  new RoomStat();
        }
        return RL.get(0);
    }
    public RoomStat getNewestUncommitedByRoomId(String room_id){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        Query query =  session.createQuery("from RoomStat r order by r.recordDate where room_id = :id and isCommited = false");
        query.setParameter("id", room_id);
        List<RoomStat> RL = new ArrayList<RoomStat>();
        try{
            query.getResultList();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (RL.isEmpty()){
            return  new RoomStat();
        }
        return RL.get(0);
    }
    public RoomStat getNewestCommitedByRoomId(String room_id){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        Query query =  session.createQuery("from RoomStat r order by r.recordDate where room_id = :id and isCommited = true");
        query.setParameter("id", room_id);
        List<RoomStat> RL = new ArrayList<RoomStat>();
        try{
            RL = query.getResultList();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (RL.isEmpty()){
            return new RoomStat();
        }
        return RL.get(0);
    }
    public RoomStat getCorrectly(String room_id, String recordDate){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        Query query =  session.createQuery("from RoomStat where room_id = :id and recordDate = :rd");
        query.setParameter("id", room_id);
        query.setParameter("rd", recordDate);
        List<RoomStat> RL = new ArrayList<RoomStat>();
        try{
            RL = query.getResultList();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (RL.isEmpty()){
            return new RoomStat();
        }
        return RL.get(0);
    }
    public void addRoomStat(RoomStat roomStat) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.save(roomStat);
            transaction.commit();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
    }
    public void updateRoomStat(RoomStat roomStat) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.merge(roomStat);
            transaction.commit();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
    }
    public void deleteRoomStatRecord(RoomStat roomStat){
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;
        try {
            transaction = session.beginTransaction();
            session.remove(roomStat);
            transaction.commit();
        }catch (Exception e){
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }finally {
            session.close();
        }
    }

}
