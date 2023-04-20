package com.dress.server.service;


import com.dress.server.dto.Review;
import com.dress.server.dto.UsedReview;

import java.util.List;

public interface ReviewService {

     void addReview(Review review);

     List<Review> getAllReview();

     Review getReviewByPk(int rPk);

     List<Review> getMyResultByPk(int upk);

     void deleteMyResultByPk(int rPk);

     void myReview(UsedReview usedReview);

     List<UsedReview> getAllUsedReview();

     UsedReview getUsedReviewByPk(int rPk);

}
