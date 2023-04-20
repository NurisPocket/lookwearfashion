package com.dress.server.service;

import com.dress.server.dto.Review;
import com.dress.server.dto.UsedReview;
import com.dress.server.mapper.ReviewMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    ReviewMapper reviewMapper;
    

    public ReviewServiceImpl(ReviewMapper reviewMapper){this.reviewMapper = reviewMapper;}

    @Override
    public void addReview(Review review) {
        reviewMapper.addReview(review);
    }

    @Override
    public List<Review> getAllReview() {
        return reviewMapper.getAllReview();
    }

    @Override
    public Review getReviewByPk(int rPk) {
        return reviewMapper.getReviewByPk(rPk);
    }

    @Override
    public List<Review> getMyResultByPk(int upk) {
        return reviewMapper.getMyResultByPk(upk);
    }

    @Override
    public void deleteMyResultByPk(int rPk) {
        reviewMapper.deleteMyResultByPk(rPk);
    }

    @Override
    public void myReview(UsedReview usedReview) {
        reviewMapper.myReview(usedReview);
    }

    @Override
    public List<UsedReview> getAllUsedReview() {
        return reviewMapper.getAllUsedReview();
    }

    @Override
    public UsedReview getUsedReviewByPk(int rPk) {
        return reviewMapper.getUsedReviewByPk(rPk);
    }
}
