package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Entities.ServicesPrice;

public class BillDTO {
    ServicesPrice currentPrice;
    Room romm;
    RoomStat oldNumber;
    RoomStat newNumber;
    public BillDTO(){}

    public void setCurrentPrice(ServicesPrice currentPrice) {
        this.currentPrice = currentPrice;
    }

    public Room getRomm() {
        return romm;
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

    public void setRomm(Room romm) {
        this.romm = romm;
    }

    public ServicesPrice getCurrentPrice() {
        return currentPrice;
    }
}
