package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RenterDAO;
import com.VTI.Phongtro.DAO.RenterRoomDAO;
import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.DAO.RoomStatDAO;
import com.VTI.Phongtro.DTO.RoomStatConfig;
import com.VTI.Phongtro.DTO.RoomStatDTO;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Entities.RenterRoom;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class RoomServices {
    private final RoomDAO roomDAO = new RoomDAO();
    private final RenterDAO renterDAO = new RenterDAO();
    private final RenterRoomDAO rrDAO = new RenterRoomDAO();
    private final RoomStatDAO rsDAO = new RoomStatDAO();

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
    public String addRoomStat(String room_id, RoomStat roomStat){
        // *note: Số điện số nước không phải lúc nào cũng ghi cùng lúc
        // vì thế thì 1 trong 2 trường null
        // cần phải lấp lại bằng thông số ghi gần nhất của trường bị trống
        roomStat.setRoom_id(room_id);
        roomStat.setCommited(false);
        roomStat.setDefaultRecordDate();
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
    public String getAllRoomStatOfOccupied(){
        List<Room> RL = roomDAO.getNotEmptyRoom();
        if (RL.isEmpty()){
            return "Khong tim thay phong co nguoi";
        }
        List<RoomStatDTO> RSDTO = new ArrayList<>();
        for (Room room: RL){
            RoomStatDTO roomStatDTO = new RoomStatDTO();
            roomStatDTO.setRoomName(room.getName());
            roomStatDTO.setRoom_id(Integer.toString(room.getrId()));
            RSDTO.add(roomStatDTO);
        }
        for (RoomStatDTO roomStatDTO: RSDTO){
            roomStatDTO.setChiSoGanNhat(rsDAO.getTheNewestRecordOfRoom(roomStatDTO.getRoom_id()));
            roomStatDTO.setLichSuGhi(rsDAO.getRoomStatByRoomId(roomStatDTO.getRoom_id()));
        }
        return new Gson().toJson(RSDTO);
    }
    public String getNewsetStat(String room_id){ return new Gson().toJson(rsDAO.getTheNewestRecordOfRoom(room_id));}
    public String getRoomStatOfRoom(String room_id){
        return new Gson().toJson(rsDAO.getRoomStatByRoomId(room_id));
    }


    public String deleteRoomStat(String room_id, String recordDate){
        RoomStat roomStat = rsDAO.getCorrectly(room_id, recordDate);
        if (roomStat == null){
            return "Không thấy nội dung tìm kiếm";
        }
        if(roomStat.isCommited()){
            return "Không thể xóa nội dung này";
        }
        try{
            rsDAO.deleteRoomStatRecord(roomStat);
        }catch (Exception e){
            e.printStackTrace();
        }
        return "Xóa thành công";
    }
    public String getForRoomStatConfig(){
        List<RoomStatConfig> roomStatConfigList = new ArrayList<>();
        List<Room> RL = roomDAO.getAllRoom();
        for (Room room: RL){
            RoomStatConfig roomStatConfig = new RoomStatConfig();
            roomStatConfig.setRoom_id(Integer.toString(room.getrId()));
            roomStatConfig.setRoom_name(room.getName());
            boolean canUpdate = false;
            RoomStat rs = rsDAO.getTheNewestRecordOfRoom(Integer.toString(room.getrId()));
            if (rs.isCommited()){
                canUpdate = true;
            }
            roomStatConfig.setCanUpdateStat(canUpdate);
        }
        return new Gson().toJson(roomStatConfigList);
    }
    public String setForRoomStatConfig(String room_id, RoomStat roomStat){
        roomStat.setRoom_id(room_id);
        roomStat.setDefaultRecordDate();
        try{
            rsDAO.addRoomStat(roomStat);
        }catch (Exception e){
            e.printStackTrace();
            return "Có lỗi sảy ra hãy thử lại!";
        }
        return  "Ghi điện nước hoàn thành!";
    }
}
