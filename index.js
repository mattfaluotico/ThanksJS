#! /usr/bin/env node

var fs = require('fs');
var path = __dirname + "/.yourewelcomes"

fs.readFile(path, 'utf8', function(err, data) {
  if (err)  throw err;
  var list = data.split('\n');
  var lines = list.length;
  
  var thankYou = Math.floor(Math.random() * (lines - 1));
  console.log(list[thankYou]);
});
