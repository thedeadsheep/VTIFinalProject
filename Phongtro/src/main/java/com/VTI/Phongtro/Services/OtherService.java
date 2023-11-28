package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.OtherE;
import com.VTI.Phongtro.Entities.Renter;
import com.google.gson.Gson;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class OtherService {
    private final ServicesPriceDAO spDAO = new ServicesPriceDAO();
    private final RoomDAO roomDAO = new RoomDAO();
    public String getContractInformation(String room_id) throws ParseException {
        OtherE ownerInformation = new OtherE();
        DateFormat df = new SimpleDateFormat("yyyy/MM/dd");
        Date birth = df.parse("2000/03/15");

        Renter owner = new Renter(
                "Trần Quốc",
                "Việt",
                birth,
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
