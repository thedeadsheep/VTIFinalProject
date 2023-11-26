package com.VTI.Phongtro.Controllers;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bill")
public class BillController {

    @GetMapping("/getAllBill")
    public ResponseEntity<String> GetAllBill() {
        return new ResponseEntity<>("result", HttpStatus.OK);
    }
}
