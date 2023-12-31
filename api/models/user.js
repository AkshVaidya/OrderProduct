const mongoose = require("mongoose");

const userSchema = {
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: "String",
    required: true,
    unique: true,
    match: [
      ///[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])? /,
      /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/, //chatgpt for email validation
      "Please enter Valid emmail",
    ],
  },
  password: { type: "String", required: true },
};

module.exports = mongoose.model("User", userSchema);
