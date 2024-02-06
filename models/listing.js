const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("./review.js");




const listingSchema = new Schema({
  title: {
    type:String,
    required: true,
  },
  description: {
    type:String
  },
  img: {
    url: String,
    filename: String,
  },
  price: {
    type:Number
  },
  location: {
    type: String
  },
  country: {
    type: String
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review",
  }],
  coordinates: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [0, 0], // Default coordinates if none provided
    },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});



listingSchema.post("findOneAndDelete",async(listing)=> {
if (listing) {
  await Review.deleteMany({_id: {$in: listing.reviews}});
}});

 


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
