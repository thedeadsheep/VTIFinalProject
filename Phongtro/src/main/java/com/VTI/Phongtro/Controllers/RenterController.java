package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Services.RenterServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
