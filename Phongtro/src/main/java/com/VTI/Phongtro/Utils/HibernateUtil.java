package com.VTI.Phongtro.Utils;

import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.RenterRoom;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.ServicesPrice;
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
