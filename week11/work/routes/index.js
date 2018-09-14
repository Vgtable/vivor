var express = require('express');
var router = express.Router();
var fs = require("fs");
var util = require("util");
var writeFile = util.promisify(fs.writeFile);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '相册'});
// });
var pic = require("../pic");
router.get("/initPic",function(req,res){
  res.send(pic);
})
router.post("/addPic",function(req,res){
  console.log(req.body);
  pic.push(req.body);
  fs.writeFile("./pic.json",JSON.stringify(pic),function(err){})
  res.send(req.body);
  return
})
module.exports = router;
