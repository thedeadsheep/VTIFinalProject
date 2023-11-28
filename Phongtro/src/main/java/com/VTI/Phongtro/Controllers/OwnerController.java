package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Services.OtherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/owner")
public class OwnerController {
    private final OtherService otherService = new OtherService();
    @GetMapping("ownerInformation")
    public ResponseEntity<String> getOwnerInformation(@RequestParam("room_id") String room_id) throws ParseException {
        String result = otherService.getContractInformation(room_id) ;
        return new ResponseEntity<String>(result,HttpStatus.OK );
    }
}
