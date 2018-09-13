var express = require('express');
var router = express.Router();
var fs = require("fs");
var util = require("util");
var writeFile = util.promisify(fs.writeFile);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var pic = require("../pic");
router.post("/addPic",function(req,res){
  pic.push(req.body);
  fs.writeFile("./pic.json",JSON.stringify(pic),function(err){})
  res.send(req.body);
})
module.exports = router;
