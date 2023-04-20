package com.dress.server.dto;

import lombok.Data;

@Data
public class UsedReview {
    private int urPk;
    private String contents;
    private int rating;
    private String fileUrl;
    private String title;
    private int rPk;
    private String createDate;
    private String uId;

}
