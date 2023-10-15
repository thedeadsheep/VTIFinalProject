package com.VTI.Phongtro.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class Demo {

    @GetMapping("/hello-world")
    public String helloWorld(){
        System.out.println("Hello-world Printed");
        return  "hello-world";
    }
}
