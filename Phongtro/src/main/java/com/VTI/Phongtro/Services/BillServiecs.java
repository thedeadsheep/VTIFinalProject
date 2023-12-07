package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.BillDAO;
import com.VTI.Phongtro.DAO.RoomDAO;
import com.VTI.Phongtro.DAO.RoomStatDAO;
import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.DTO.BillDTO;
import com.VTI.Phongtro.Entities.Bill;
import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Entities.ServicesPrice;
import com.google.gson.Gson;

import java.util.List;

public class BillServiecs {
    private final BillDAO billDAO = new BillDAO();
    private final RoomStatDAO roomStatDAO = new RoomStatDAO();
    private final ServicesPriceDAO spDAO = new ServicesPriceDAO();
    private final RoomDAO roomDAO = new RoomDAO();

    public String getAllBill(){
        return new Gson().toJson(billDAO.getAllBill());
    }
    public String getBillById(String bill_id){
        return new Gson().toJson(billDAO.getById(bill_id));
    }
    public String getUnPaiedBill(){return new Gson().toJson(billDAO.getAllBillIsNotPay());}
    public String getAllBillOfRoom(String room_id){
        return new Gson().toJson(billDAO.getAllBillOfRoom(room_id));
    }
    public String getTempBillValueOfRoom(String room_id){
        BillDTO billDTO = new BillDTO();
        ServicesPrice sp = spDAO.getCurrentPrice();
        billDTO.setCurrentPrice(sp) ;
        RoomStat oldNumber = roomStatDAO.getNewestCommitedByRoomId(room_id);
        RoomStat newNumber = roomStatDAO.getNewestUncommitedByRoomId(room_id);
        if(oldNumber.getElecNumber() == -1){
            oldNumber = new RoomStat(room_id,0,0,null,false);
        }
        if (newNumber.getElecNumber() == -1){
            System.out.println("khong cos gif commit");
            System.out.println(newNumber.getElecNumber() == -1);

            System.out.println(newNumber.getElecNumber());
            return "err02";
        }
        billDTO.setOldNumber(oldNumber);
        billDTO.setNewNumber(newNumber);
        billDTO.setRoom(roomDAO.getById(room_id));
        return new Gson().toJson(billDTO);
    }
    public String addNewBill(String room_id, Bill bill){
        bill.initBill(room_id);
        String bill_id = billDAO.addNewBill(bill);
        bill.setBill_id(bill_id);
        if (!bill_id.isBlank()){
            List<RoomStat> RSL = roomStatDAO.getRoomStatUnCommitedByRoomId(room_id);
            for (RoomStat rs: RSL){
                rs.setCommited(true);
                try{
                    roomStatDAO.updateRoomStat(rs);
                }catch (Exception e){
                    e.printStackTrace();
                    return "Cập nhật thất bại, lỗi Db";
                }
            }
        }
        return new Gson().toJson(bill);
    }

    public String updateBill(Bill updateContent){
        Bill bill = billDAO.getById(updateContent.getBill_id());
        if (bill== null){
            return "Không tìm thấy hóa đơn";
        }
        bill.setNew_elec_number(updateContent.getNew_elec_number());
        bill.setNew_water_number(updateContent.getNew_water_number());
        bill.setWaterPrice(updateContent.getWaterPrice());
        bill.setElecPrice(updateContent.getElecPrice());
        bill.setTotal(updateContent.getTotal());
        try{
            billDAO.updateBill(bill);
        }catch (Exception e){
            e.printStackTrace();
            return "Cập nhật thất bại, lỗi Db";
        }
        return "Cập nhật thành công";
    }

    public String confirmBillWasPaid(String bill_id){
        Bill bill = billDAO.getById(bill_id);
        if (bill== null){
            return "Không tìm thấy hóa đơn";
        }
        bill.setIsPaid(true);
        bill.setPayDate();
        try{
            billDAO.updateBill(bill);
        }catch (Exception e){
            e.printStackTrace();
            return "Cập nhật thất bại, lỗi Db";
        }

        return "Cập nhật thành công, bill đã được thanh toán";
    }

}
