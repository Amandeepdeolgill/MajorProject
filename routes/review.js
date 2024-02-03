const express = require("express");
const router =   express.Router({mergeParams:true});
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Review Post Route.
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview));

//Review delete route.
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;