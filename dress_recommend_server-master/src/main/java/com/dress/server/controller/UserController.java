package com.dress.server.controller;

import com.dress.server.dto.User;
import com.dress.server.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/user")
@RestController
public class UserController {
    UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody User user){
        if(user.getUId().equals("")){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        userService.addUser(user);

        return ResponseEntity.ok().build();
    }
//ResponseEntity 는 응답의 결과를 포함하는 클래스(dto)
    @PostMapping("/logIn")
    public  ResponseEntity logIn(@RequestBody User user){

        //System.out.println(user.getUId());

        User resultUser = userService.getUser(user);

        //System.out.println(resultUser);

        if(resultUser == null){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }else{
            return ResponseEntity.ok().body(resultUser);
        }
    }

    @GetMapping("/{upk}")
    public ResponseEntity myInfo(@PathVariable int upk){
        User user = userService.getMyInfoByPk(upk);
        //System.out.println(user);
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/idcheck/{userId}")
    public ResponseEntity getIdDoubleCheck(@PathVariable String userId){
        User doubleCheckUser = userService.getIdDoubleCheck(userId);
        //System.out.println(doubleCheckUser);

        return ResponseEntity.ok().body(doubleCheckUser);
    }

    @PutMapping("/update")
    public ResponseEntity updateMyInfo(@RequestBody User user){
        userService.updateMyInfo(user);
        //System.out.println(user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{upk}")
    public ResponseEntity getDeleteUser(@PathVariable int upk){
        userService.getDeleteUser(upk);
        //System.out.println(upk);
        return ResponseEntity.ok().build();
    }

}
