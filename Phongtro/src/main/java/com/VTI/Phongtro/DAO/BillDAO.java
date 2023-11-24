package com.VTI.Phongtro.DAO;

import com.VTI.Phongtro.Entities.Bill;
import com.VTI.Phongtro.Utils.HibernateUtil;
import jakarta.persistence.Query;
import org.hibernate.Session;

import java.util.List;

public class BillDAO {
    public Bill getById(String id){
        try (Session session = HibernateUtil.getSessionFactory().openSession()){
            return  session.get(Bill.class, id);
        }
    }
    public List<Bill> getAllBill(){
        try(Session session = HibernateUtil.getSessionFactory().openSession()){
            return session.createQuery("from Bill", Bill.class).getResultList();
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
            Query query = session.createQuery("from Bill b order by b.isPaid, b.date_create where room_id = :id",Bill.class);
            query.setParameter("id", room_id);
            return query.getResultList();
        }
    }
}
