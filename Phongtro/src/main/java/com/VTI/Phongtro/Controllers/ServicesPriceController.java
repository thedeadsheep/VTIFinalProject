package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.ServicesPrice;
import com.VTI.Phongtro.Services.ServicesPriceServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/prices")
public class ServicesPriceController {

    private ServicesPriceServices servicesPriceServices = new ServicesPriceServices();
    @GetMapping("/getPriceList")
    public ResponseEntity getPriceList(){
        String Result = new Gson().toJson(servicesPriceServices.getAllPrices());
        return  new ResponseEntity<>(Result, HttpStatus.OK);
    }
    @GetMapping("/getPrice")//get current price -take for contract
    public ResponseEntity getPrice(){
        String Result = servicesPriceServices.getCurrentPrice();
        return  new ResponseEntity<>(Result, HttpStatus.OK);
    }

    @PostMapping("/addService")
    public ResponseEntity addService(@RequestBody ServicesPrice sp){
        boolean result = servicesPriceServices.addService(sp);
        if (!result) {
            return new ResponseEntity<>("Them bi Loi", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Them dich vu thanh cong", HttpStatus.OK);
    }

    @PutMapping("/updateServicePrice")
    public ResponseEntity<String> updateRenterProfile(@RequestParam("old_sp") String oldSP_id, @RequestBody ServicesPrice servicesPrice) {
        int id = Integer.parseInt(oldSP_id) ;
        boolean result = servicesPriceServices.updateServicePrice(id, servicesPrice);
        if (!result) {
            return new ResponseEntity("not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity("update completed", HttpStatus.OK);
    }

}
