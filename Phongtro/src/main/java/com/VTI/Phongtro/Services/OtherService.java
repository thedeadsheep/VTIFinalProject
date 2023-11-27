package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.OtherE;
import com.VTI.Phongtro.Entities.Renter;
import com.google.gson.Gson;

import java.util.Date;

public class OtherService {
    private final ServicesPriceDAO spDAO = new ServicesPriceDAO();
    private final RoomDAO roomDAO = new RoomDAO();
    public String getContractInformation(String room_id){
        OtherE ownerInformation = new OtherE();
        Renter owner = new Renter(
                "Trần Quốc",
                "Việt",
                new Date("15/03/2000"),
                null,
                null,
                "352538853",
                null,null,
                "51 Đường 6 TDC, Dĩ An, Bình Dương",
                "An Giang",
                "0838224577"
        );
        ownerInformation.setChuNha(owner);
        ownerInformation.setGiaDichVu(spDAO.getCurrentPrice());
        ownerInformation.setThongTinPhong(roomDAO.getById(room_id));
        return new Gson().toJson(ownerInformation);
    }
}
