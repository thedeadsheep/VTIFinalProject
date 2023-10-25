package com.VTI.Phongtro.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public class ServicesPriceController {
    @GetMapping("/getPrice")
    public ResponseEntity getPrice(){

        return  new ResponseEntity<>("", HttpStatus.OK);
    }
}
