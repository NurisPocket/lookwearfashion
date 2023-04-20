package com.dress.server.dto;

import lombok.Data;

@Data
public class Review {
    private  int rPk;
    private String bottomImgUrl;
    private String topImgUrl;
    private String createDate;
    private int uPk;
    private String content;
    private String uId;

}

