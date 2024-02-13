const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  body_temperature: {
    type: Number
  },
  pulse_rate: {
    type: Number
  },
  bmi: {
    type: Number
  },
  human_presence: {
    type: Boolean
  },
  medicine_reminder: {
    hour: {
      type: Number
    },
    minute: {
      type: Number
    },
    second: {
      type: Number
    }
  }
});

module.exports = mongoose.model("Product", productSchema);



