package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Entities.ServicesPrice;

public class BillDTO {

    ServicesPrice currentPrice;
    Room room;
    RoomStat oldNumber;
    RoomStat newNumber;

    public BillDTO(){}

    public void setCurrentPrice(ServicesPrice currentPrice) {
        this.currentPrice = currentPrice;
    }

    public Room getRomm() {
        return room;
    }

    public void setNewNumber(RoomStat newNumber) {
        this.newNumber = newNumber;
    }

    public RoomStat getNewNumber() {
        return newNumber;
    }

    public void setOldNumber(RoomStat oldNumber) {
        this.oldNumber = oldNumber;
    }

    public RoomStat getOldNumber() {
        return oldNumber;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public ServicesPrice getCurrentPrice() {
        return currentPrice;
    }
}
