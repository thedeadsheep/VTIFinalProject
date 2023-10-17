package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Services.RenterServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        Renter renter = renterServices.getRenterById(id);
        if (renter.getHo_tenlot() == null){
            return new ResponseEntity<String>("Something went wrong", HttpStatus.NOT_FOUND);
        }
        String result = new Gson().toJson(renter);
        return  new ResponseEntity<>(result,HttpStatus.OK);

    }
}
