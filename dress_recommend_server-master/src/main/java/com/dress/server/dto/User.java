package com.dress.server.dto;

import lombok.Data;

@Data
public class User {
    private int uPk;
    private String uId;
    private String uPassword;
    private String uName;
    private String uGender;
    private String uEmail;
    private String uPhon;


}
