package com.VTI.Phongtro.Services;

import com.VTI.Phongtro.DAO.BillDAO;
import com.VTI.Phongtro.DAO.ServicesPriceDAO;
import com.VTI.Phongtro.Entities.Bill;
import com.VTI.Phongtro.Entities.ServicesPrice;
import com.google.gson.Gson;

public class BillServiecs {
    private final BillDAO billDAO = new BillDAO();
    private final ServicesPriceDAO servicesPriceDAO = new ServicesPriceDAO();

    public String getAllBill(){
        return new Gson().toJson(billDAO.getAllBill());
    }
    public String getBillById(String bill_id){
        return new Gson().toJson(billDAO.getById(bill_id));
    }
    public String getAllBillOfRoom(String room_id){
        return new Gson().toJson(billDAO.getAllBillOfRoom(room_id));
    }
    public String addNewBill(String room_id){
        Bill bill = new Bill();
        bill.initBill(room_id);
        String bill_id = billDAO.addNewBill(bill);
        bill.setBill_id(bill_id);
        return new Gson().toJson(bill);
    }

    public String updateBill(Bill updateContent){
        Bill bill = billDAO.getById(updateContent.getBill_id());
        if (bill== null){
            return "Không tìm thấy hóa đơn";
        }
        bill.setElec_number(updateContent.getElec_number());
        bill.setWater_number(updateContent.getWater_number());
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
