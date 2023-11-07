package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.Room;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class RoomServices {
    private final RoomDAO roomDAO = new RoomDAO();
    private final RenterDAO renterDAO = new RenterDAO();

    public List<Room> getAllRoom(){ return roomDAO.getAllRoom();}
    public Room getRoomById(String id){return roomDAO.getById(id);}

    public boolean addRoom(Room room){
        room.setRoomStatus("0");
        boolean result = true;
        try{
            result = roomDAO.saveRoom(room);
        }catch (Exception e){
            e.printStackTrace();
            result = false;
        }
        return result;
    }
    public String changeStatusRoom(String id){
        /* 0 <--> 2
         * 0: Trống
         * 1: Có người ở
         * 2: Đang sửa chữa
         */
        String result = "Cập nhật thành công" ;
        boolean updateResult = false;
        Room oldRoom = roomDAO.getById(id);
        if(oldRoom == null) {
            return "Lỗi Phòng không tồn tại";
        }
        String status = oldRoom.getRoomStatus();
        if (status.contains("1")){
            return "Lỗi Phòng đang có người ở";
        }
        String newStatus;
        if (status.contains("0")){
            newStatus = "2";
            result = "Đã thay đổi thành đang sửa chữa";
        }else {
            newStatus = "0";
            result = "Đã thay đổi thành đang phòng trống";
        }
        oldRoom.setRoomStatus(newStatus);
        try{
            updateResult = roomDAO.updateRoom(oldRoom);
        }catch (Exception e){
            e.printStackTrace();
        }
        if (updateResult == false){
            result= "Lỗi cập nhật thông tin";
        }
        return result;
    }
    public Boolean updateDetailRoom(String id, Room room){
        /*
         *
         */
        boolean result = false ;
        Room oldRoom = roomDAO.getById(id);
        if(oldRoom == null) {
            return false;
        }
        oldRoom.setName(room.getName());
        oldRoom.setRoomPrice(room.getRoomPrice());
        try{
            result = roomDAO.updateRoom(oldRoom);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
    public boolean addRenterToRoom(String id, String renter_id){
        /*
         *
         */
        boolean result = false ;
        Room oldRoom = roomDAO.getById(id);
        if(oldRoom == null) {
            return false;
        }
        if (Objects.equals(oldRoom.getRoomStatus(), "1")){
            return false;
        }
        if (Objects.equals(oldRoom.getRoomStatus(), "2")){
            return false;
        }
        oldRoom.setRenter_id(renter_id);
        oldRoom.setRoomStatus("1");
        try{
            result = roomDAO.updateRoom(oldRoom);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
    public List<Renter> getAllRentersInRoom(String room_id){
        boolean result = true;
        Room room = roomDAO.getById(room_id);
        if (room == null){
            return new ArrayList<>();
        }
        String renterId = room.getRenter_id();
        if (renterId == null || renterId.isEmpty()){
            return new ArrayList<>();
        }
        Renter renter = renterDAO.getById(renterId);
        List<Renter> renterList = renterDAO.getAllRenterRelative(renterId);
        renterList.add(renter);
        return renterList;
    }
}
