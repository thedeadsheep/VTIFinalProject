package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Bill;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class BillDAO {
    public Bill getById(String id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            return  session.get(Bill.class, id);
        }
    }
    public List<Bill> getAllBill(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from Bill b order by b.isPaid, b.date_create", Bill.class).getResultList();
        }
    }
    public List<Bill> getAllBillIsNotPay(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from Bill where isPaid = false", Bill.class).getResultList();
        }
    }
    public List<Bill> getAllBillIsPaid(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from Bill where isPaid = true", Bill.class).getResultList();
        }
    }
    public List<Bill> getAllBillOfRoom(String room_id){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            Query query = session.createQuery("from Bill b where room_id = :id order by b.isPaid, b.date_create");
            query.setParameter("id", room_id);
            return query.getResultList();
        }
    }
    public String addNewBill(Bill bill){
        String result = "init";
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(bill);
            result =bill.getBill_id();
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
    public void updateBill(Bill bill){
        Transaction transaction = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.merge(bill);
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
