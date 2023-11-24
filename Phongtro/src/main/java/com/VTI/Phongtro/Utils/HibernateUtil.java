package com.VTI.Phongtro.Utils;

import com.VTI.Phongtro.Entities.*;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtil {
    private static SessionFactory sessionFactory;
    public  static SessionFactory getSessionFactory(){
        if(sessionFactory ==null){
            try{
                Configuration configuration = new Configuration();
                configuration.configure("hibernate.cfg.xml");
                configuration.addAnnotatedClass(Renter.class);
                configuration.addAnnotatedClass(ServicesPrice.class);
                configuration.addAnnotatedClass(Room.class);
                configuration.addAnnotatedClass(RenterRoom.class);
                configuration.addAnnotatedClass(RoomStat.class);
                configuration.addAnnotatedClass(Bill.class);
                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                        .applySettings(configuration.getProperties()).build();

                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return sessionFactory;
    }
}
