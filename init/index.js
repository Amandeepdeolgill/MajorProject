const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDb = async() => {
  initData.data = initData.data.map((obj)=> ({...obj, owner: "65bb117429b75e26f3ce997b"}));
  await Listing.insertMany(initData.data);
  console.log("data saved");
}
initDb();
