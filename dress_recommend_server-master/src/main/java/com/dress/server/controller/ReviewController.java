package com.dress.server.controller;

import com.dress.server.dto.Review;
import com.dress.server.dto.UsedReview;
import com.dress.server.dto.User;
import com.dress.server.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.freemarker.FreeMarkerView;

import java.util.List;

@RequestMapping("/review")
@RestController
public class ReviewController {

    ReviewService reviewService;

    public ReviewController(ReviewService reviewService){this.reviewService = reviewService;}

    @PostMapping("/review")
    public ResponseEntity review(@RequestBody Review review ){

        //System.out.println(review);
        reviewService.addReview(review);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public ResponseEntity allReview(){
        List reviews = reviewService.getAllReview();
        //System.out.println(reviews);

        return ResponseEntity.ok().body(reviews);
    }

    @GetMapping("/{rPk}")
    public ResponseEntity getReviewByPk(@PathVariable int rPk){
        Review review =  reviewService.getReviewByPk(rPk);

        return ResponseEntity.ok().body(review);
    }

    @GetMapping("/myresult/{upk}")
    public ResponseEntity getMyResultByPk(@PathVariable int upk){
        List review = reviewService.getMyResultByPk(upk);
        //System.out.println(review);
        return ResponseEntity.ok().body(review);
    }

    @DeleteMapping("deleteMyResultByPk/{rPk}")
    public ResponseEntity deleteMyResultByPk(@PathVariable int rPk){
        reviewService.deleteMyResultByPk(rPk);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/myReview")
    public ResponseEntity myReview (@RequestBody UsedReview usedReview){
        reviewService.myReview(usedReview);
        //System.out.println(usedReview);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/allUsedReview")
    public ResponseEntity getAllUsedReview(){
       List allUsedReview = reviewService.getAllUsedReview();
       //System.out.println(allUsedReview);
       return ResponseEntity.ok().body(allUsedReview);
    }

    @GetMapping("/getUsedReviewByPk")
    public ResponseEntity getUsedReviewByPk(@PathVariable int rPk){
        reviewService.getUsedReviewByPk(rPk);
        return ResponseEntity.ok().build();
    }
}
