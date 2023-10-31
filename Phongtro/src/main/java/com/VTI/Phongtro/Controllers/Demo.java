package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.Renter;
import com.VTI.Phongtro.Services.RenterServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@RestController
@RequestMapping("/demo")
public class Demo {
    private final RenterServices renterServices = new RenterServices();

    @GetMapping("/hello-world")
    public String helloWorld() {
        System.out.println("Hello-world Printed");
        return "hello-world";
    }

    @PostMapping("/demoRenter")
    public ResponseEntity<String> addRenter() throws ParseException {
        String result = "ha";
        DateFormat df = new SimpleDateFormat("yyyy/MM/dd");
        Date inDate = df.parse("2000/03/15");
        Date now = new Date();
        Renter renter = new Renter(
                "Tran Quoc", "Viet", inDate, now, "352538853","Long Xuyen-AnGiang", "AnGiang"
        );
        String addResult = renterServices.addRenter(renter);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
}
