var mongoose = require('mongoose');
var User = new mongoose.Schema({
    username: {
        type: String
    },
    lastname: {
        type: String
    },
    roll_no: {
        type: Number
    },
    age: {
        type: String
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("User", User);