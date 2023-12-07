package com.VTI.Phongtro.DTO;

public class BillPageDTO {
    private String room_id;
    private String room_name;
    private Boolean canCreateBill;

    public String getRoom_id() {
        return room_id;
    }

    public Boolean getCanCreateBill() {
        return canCreateBill;
    }

    public String getRoom_name() {
        return room_name;
    }

    public void setRoom_id(String room_id) {
        this.room_id = room_id;
    }

    public void setCanCreateBill(Boolean canCreateBill) {
        this.canCreateBill = canCreateBill;
    }

    public void setRoom_name(String room_name) {
        this.room_name = room_name;
    }
}
