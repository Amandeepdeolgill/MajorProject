const express = require("express");
const router =   express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single('listing[img]'),
    validateListing,
    wrapAsync(listingController.createListing)); 


//new route.
router.get("/new", isLoggedIn, listingController.newListing);


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,
isOwner,
upload.single('listing[img]'),
validateListing,
wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


//Edit route.
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.editListing));


module.exports = router;