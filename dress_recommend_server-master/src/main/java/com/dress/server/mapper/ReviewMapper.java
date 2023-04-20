package com.dress.server.mapper;

import com.dress.server.dto.Review;
import com.dress.server.dto.UsedReview;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {

     void addReview(Review review);
     List<Review> getAllReview();
     Review getReviewByPk(int rPk);
     List<Review> getMyResultByPk(int upk);
     void deleteMyResultByPk(int rPk);

     void myReview(UsedReview usedReview);

     List<UsedReview> getAllUsedReview();

     UsedReview getUsedReviewByPk(int rPk);
}
