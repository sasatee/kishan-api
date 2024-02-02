const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  binNumber: ["String"],
  categories: ["String"],
  location: {
    coordinates1: ["Number"],
    coordinates2: ["Number"],
  },
  wasteLevel: {
    currentStatus: "String",
    nextStatus: "String",
  },
  binCapacity: ["String"],
  timeSchedule: {
    date: ["Date"],
  },
});

module.exports = mongoose.model("Product", productSchema);
