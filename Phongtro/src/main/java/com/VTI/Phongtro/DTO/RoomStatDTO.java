package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.RoomStat;

import java.util.List;

public class RoomStatDTO {
    private String room_id;
    private String roomName;

    private RoomStat chiSoGanNhat;
    private List<RoomStat> lichSuGhi;
    public RoomStatDTO(){}

    public String getRoom_id() {
        return room_id;
    }

    public List<RoomStat> getLichSuGhi() {
        return lichSuGhi;
    }

    public RoomStat getChiSoGanNhat() {
        return chiSoGanNhat;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public void setChiSoGanNhat(RoomStat chiSoGanNhat) {
        this.chiSoGanNhat = chiSoGanNhat;
    }

    public void setLichSuGhi(List<RoomStat> lichSuGhi) {
        this.lichSuGhi = lichSuGhi;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }
}
