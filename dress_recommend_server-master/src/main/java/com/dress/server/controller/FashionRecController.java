package com.dress.server.controller;

import com.dress.server.service.FashionRecService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("rec")
@RestController
@AllArgsConstructor
public class FashionRecController {
    private FashionRecService fashionRecService;

    @GetMapping("/woman/{top}/{bottom}")
    public ResponseEntity getWomanClothes(@PathVariable int top,@PathVariable int bottom){
        List result = fashionRecService.getWomanClothes(top,bottom);
        System.out.println(top);
        System.out.println(bottom);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/man/{top}/{bottom}")
    public ResponseEntity getManClothes(@PathVariable int top,@PathVariable int bottom){
        List result = fashionRecService.getManClothes(top,bottom);
        System.out.println(top);
        System.out.println(bottom);
        return ResponseEntity.ok().body(result);
    }
}
