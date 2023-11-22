package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.DAO.RenterRoomDAO;
import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.DAO.RoomStatDAO;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.RenterRoom;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Utils.NormalUtils;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class RoomServices {
    private final RoomDAO roomDAO = new RoomDAO();
    private final RenterDAO renterDAO = new RenterDAO();
    private final RenterRoomDAO rrDAO = new RenterRoomDAO();
    private final RoomStatDAO rsDAO = new RoomStatDAO();
    private final NormalUtils normalUtils = new NormalUtils();

    public List<Room> getAllRoom(){ return roomDAO.getAllRoom();}
    public Room getRoomById(String id){return roomDAO.getById(id);}

    public List<Room> getEmptyRoom(){
        return roomDAO.getEmptyRoom();
    }
    public List<Room> getNotEmptyRoom(){
        return roomDAO.getNotEmptyRoom();
    }

    public boolean addRoom(Room room){
        room.setRoomStatus(0);
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
        int status = oldRoom.getRoomStatus();
        if (status == 1){
            return "Lỗi Phòng đang có người ở";
        }
        int newStatus;
        if (status == 0){
            newStatus = 2;
            result = "Đã thay đổi thành đang sửa chữa";
        }else {
            newStatus = 0;
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
    public boolean setRoomIsEmpty(String old_id, String new_id){
        RenterRoom rr = rrDAO.getByRenterId(old_id);
        Renter renter = renterDAO.getById(old_id);
        if(renter.getLink_with() == null){
            renter.setLink_with("");
        }

        rr.setStatus(false);
        Room room = roomDAO.getById(rr.getRoomId());
        if(renter.getLink_with().isBlank()){
            room.setRoomStatus(0);
        }
        try{
            rrDAO.updateRRStatus(rr);
            boolean a = roomDAO.updateRoom(room);
            return a;
        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
    public boolean addRenterToRoom(String id, String renter_id){
        /*
         *
         */
        boolean result = true ;
        Room oldRoom = roomDAO.getById(id);
        if(oldRoom == null) {
            return false;
        }
        if (oldRoom.getRoomStatus() == 1){
            return false;
        }
        if (oldRoom.getRoomStatus() == 2){
            return false;
        }
        RenterRoom rr = new RenterRoom(renter_id, id,true);
        oldRoom.setRoomStatus(1);
        try{
            rrDAO.addRenterRoom(rr);
            result = roomDAO.updateRoom(oldRoom);
        }catch (Exception e){
            e.printStackTrace();
            result = false;
        }
        return result;
    }
    public List<Renter> getAllRentersInRoom(String room_id){
        List <RenterRoom> rrList = rrDAO.getByRoomId(room_id);
        if (rrList == null){
            return new ArrayList<>();
        }
        List<Renter> renterList = new ArrayList<Renter>();
        for (RenterRoom rr :rrList){
            Renter renter = renterDAO.getById(rr.getRenterId());
            if (renter != null){
                if(renter.isConO()){
                    renterList.add(renter);
                }
            }
        }
        return renterList;
    }
    public String addRoomStat(RoomStat roomStat){
        // *note: Số điện số nước không phải lúc nào cũng ghi cùng lúc
        // vì thế thì 1 trong 2 trường null
        // cần phải lấp lại bằng thông số ghi gần nhất của trường bị trống
        roomStat.setCommited(false);
        roomStat.setRecordDate(normalUtils.ngayGhiDienNuoc());
        try{
            rsDAO.addRoomStat(roomStat);
        }catch (Exception e){
            e.printStackTrace();
            return "Có lỗi sảy ra hãy thử lại!";
        }
        return  "Ghi điện nước hoàn thành!";
    }
    public String updateRoomStat(RoomStat roomStat){
        roomStat.setCommited(true);
        try{
            rsDAO.updateRoomStat(roomStat);
        }catch (Exception e){
            e.printStackTrace();
            return "Có lỗi sảy ra hãy thử lại!";
        }
        return  "Ghi điện nước hoàn thành!";
    }
    public String getAllRoomStat(){
        return new Gson().toJson(rsDAO.getAllRoomStat());
    }
    public String getRoomStatOfRoom(String room_id){
        return new Gson().toJson(rsDAO.getRoomStatByRoomId(room_id));
    }
}
