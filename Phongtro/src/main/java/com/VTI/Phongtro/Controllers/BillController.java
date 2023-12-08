package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.Bill;
import com.VTI.Phongtro.Services.BillServiecs;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/bill")
public class BillController {
    private final BillServiecs billServiecs = new BillServiecs();
    @GetMapping("/getAllBill")
    public ResponseEntity<String> GetAllBill() {
        String result = billServiecs.getAllBill();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getAllBillUnPaied")
    public ResponseEntity<String> GetAllBillUnPaied() {
        String result = billServiecs.getUnPaiedBill();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getBillById")
    public ResponseEntity<String> GetBillById(@RequestParam("bill_id") String bill_id) {
        String result = billServiecs.getBillById(bill_id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getAllBillOfRoom")
    public ResponseEntity<String> GetAllBillOfRoom(@RequestParam("room_id") String room_id) {
      
        String result = billServiecs.getAllBillOfRoom(room_id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getTempBillOfRoom")
    public ResponseEntity<String> getTempBillOfRoom(@RequestParam("room_id") String room_id) {
        String result = billServiecs.getTempBillValueOfRoom(room_id);
        if(Objects.equals(result, "err01")){
            return new ResponseEntity<>("Có cái gì đó bị lỗi", HttpStatus.BAD_REQUEST);
        }
        if(Objects.equals(result, "err02")){
            return new ResponseEntity<>("Không có chỉ số mới để tạo hóa đơn", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/billPageValue")
    public ResponseEntity<String> getBillPage(){
        return new ResponseEntity<String>(billServiecs.getOCCRoomsToCreateBills(),HttpStatus.OK);
    }
    @PostMapping("/createNewBill")
    public ResponseEntity<String> CreateNewBill(@RequestParam("room_id") String room_id, @RequestBody Bill bill) {
        String result = billServiecs.addNewBill(room_id,bill);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    /*
      @PutMapping("/updateBill")
    public ResponseEntity<String> UpdateBillContent(@RequestBody Bill bill  ) {
        String result = billServiecs.updateBill(bill);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    */

    @PutMapping("/confirmBill")
    public ResponseEntity<String> ConfirmPaiedBill(@RequestParam("bill_id") String bill_id) {
        String result = billServiecs.confirmBillWasPaid(bill_id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
