var User = require('../models/model');

exports.PostUser = function (req, res) {
    console.log(req);
    var user = new User({
        username: req.body.username,
        lastname: req.body.lastname,
        roll_no: req.body.roll_no,
        age: req.body.age,
        createdAt: new Date(),
        updateAt: null
    });
    user.save(function (err, response) {
        if (err) {
            return "Error";

        }
        res.json({
            success: true,
            body: response
        })

    })
}

exports.GetId = function(req, res){
    var id = req.params.id;
    User.findOne({roll_no:id}, function(err, response){
        if(err){
            return "error";
        }
        res.json(response);
    })
}

exports.GetUser = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return "Error";
        }
        res.json(response);
    })
}



exports.GetReg = function(req, res){
    var Reg = new RegExp (req.params.Reg);
    User.find({username:Reg}, function(err, response){
        if(err){
            return "error";
        }
        res.json(response);
    })
}