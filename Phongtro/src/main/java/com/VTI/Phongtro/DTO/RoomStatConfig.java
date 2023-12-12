package com.VTI.Phongtro.DTO;

import com.VTI.Phongtro.Entities.RoomStat;

public class RoomStatConfig {
    private String room_id;
    private String room_name;
    private RoomStat currentStats;
    private boolean canUpdateStat;

    public RoomStatConfig(){}

    public RoomStat getCurrentStats() {
        return currentStats;
    }

    public String getRoom_id() {
        return room_id;
    }

    public String getRoom_name() {
        return room_name;
    }

    public boolean getCanUpdateStat() {
        return canUpdateStat;
    }

    public void setCurrentStats(RoomStat currentStats) {
        this.currentStats = currentStats;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public void setCanUpdateStat(boolean canUpdateStat) {
        this.canUpdateStat = canUpdateStat;
    }

    public void setRoom_name(String room_name) {
        this.room_name = room_name;
    }
}
