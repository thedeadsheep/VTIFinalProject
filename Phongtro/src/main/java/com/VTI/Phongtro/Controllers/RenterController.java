package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.DTO.RenterDTO;
import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Services.RenterServices;
import com.VTI.Phongtro.Services.RoomServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;

@RestController
@RequestMapping("/renter")
public class RenterController {

    private final RenterServices renterServices = new RenterServices();
    private final RoomServices roomServices = new RoomServices();
    @GetMapping("/getAllRenters")
    public ResponseEntity<String> GetAllRenter() {
        String result = new Gson().toJson(renterServices.getAllRenter());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getAllRenterRelatives")
    public ResponseEntity<String> GetAllRenterRelatives(@RequestParam("id") String id) {
        String result = new Gson().toJson(renterServices.getAllRenterRelative(id));
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getRenterById")
    public  ResponseEntity<String> getRenterById(@RequestParam("id") String id){
        Renter renter = renterServices.getRenterById(id);
        String result = new Gson().toJson(renter);
        if (result.contains("null")){
            return new ResponseEntity<>("Something went wrong!", HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(result,HttpStatus.OK);
    }
    @PostMapping("/addNewRenter")
    public ResponseEntity addNewRenter(@RequestBody RenterDTO renterDTO) throws ParseException {
        /*
           {
                "ho_tenlot": "Nguyễn",
                "ten": "Thi",
                "ngay_sinh": "2000-01-01",
                "soCCCD": "0123456789",
                "dia_chi_TT": "HaNoi",
                "que_quan":"HaNoi"
            }

        */

        Renter renter = renterDTO.toRenter();
        Date currentDate = new Date();
        renter.setNgay_chuyen_vao(currentDate);
        renter.setConO(true);
        String result = renterServices.addRenter(renter);
        if (result.contains("init")) {
            return new ResponseEntity("Something wentWrong!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }
    @PostMapping("/addNewRenterRelative")
    public ResponseEntity addNewRenterRelative(@RequestParam("id") String id, @RequestBody RenterDTO renterDTO) throws ParseException {
        /* id is id of relatived
            {
                "ho_tenlot": "Nguyễn",
                "ten": "Thi",
                "ngay_sinh": "2000-01-01",
                "soCCCD": "0123456789",
                "dia_chi_TT": "HaNoi",
                "que_quan":"HaNoi",
                "quanhe":"Nguoi nha"
            }
        */
        Date currentDate = new Date();
        Renter renter = renterDTO.toRenter();
        renter.setNgay_chuyen_vao(currentDate);
        renter.setConO(true);
        renter.setLink_with(id);
        String result = renterServices.addRenterRelative(renter);
        if (result.contains("init")) {
            return new ResponseEntity("Something Went Wrong!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(result, HttpStatus.OK);
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
    public ResponseEntity updateRenterStatus(@RequestParam("old_id") String old_id, @RequestParam("new_id") String new_id){
        boolean result = renterServices.updateRenterStatus(old_id);
        if(!result){
            new ResponseEntity("Phát sinh lỗi", HttpStatus.BAD_REQUEST);
        }
        String stringRS = renterServices.changeRelative(old_id,new_id);
        boolean rs = roomServices.setRoomIsEmpty(old_id, new_id);

        return new ResponseEntity(stringRS, HttpStatus.OK);
    }

}
