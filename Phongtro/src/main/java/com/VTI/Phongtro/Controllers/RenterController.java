package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Services.RenterServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/renter")
public class RenterController {

    private final RenterServices renterServices = new RenterServices();

    @GetMapping("/getAllRenter")
    public ResponseEntity<String> GetAllRenter() {
        String result = new Gson().toJson(renterServices.getAllRenter());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getRenterById")
    public  ResponseEntity<String> getRenterById(@RequestParam("id") String id){
        System.out.println(id);
        Renter renter = renterServices.getRenterById(id);

        String result = new Gson().toJson(renter);
        System.out.println(result);
        if (result.contains("null")){
            return new ResponseEntity<>("Something went wrong!", HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(result,HttpStatus.OK);
    }
    @PutMapping("/updateRenterProfile")
    public ResponseEntity updateRenterProfile(@RequestParam("id") String id, @RequestBody Renter renter){
        boolean result = renterServices.updateRenterProfile(id, renter);
        if(!result){
            return  new ResponseEntity("not found", HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity("update completed", HttpStatus.OK);
    }
    @PutMapping("/updateRenterStatus")
    public ResponseEntity updateRenterStatus(@RequestParam("id") String id){
        boolean result = renterServices.updateRenterStatus(id);
        if(!result){
            new ResponseEntity("Phát sinh lỗi", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity("Đã chuyển đi", HttpStatus.OK);
    }


}
