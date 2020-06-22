package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/ani")
    public String ani(){
        return "animations";
    }

    @GetMapping("/data")
    public String data(){
        return "data";
    }

    @GetMapping("/file")
    public String file(){
        return "file_load";
    }
}
