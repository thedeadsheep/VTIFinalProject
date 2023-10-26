package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Services.ServicesPriceServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/prices")
public class ServicesPriceController {

    private ServicesPriceServices servicesPriceServices = new ServicesPriceServices();
    @GetMapping("/getPrice")
    public ResponseEntity getPrice(){
        String Result = new Gson().toJson(servicesPriceServices.getAllPrices());
        return  new ResponseEntity<>(Result, HttpStatus.OK);
    }
}
