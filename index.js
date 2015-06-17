#! /usr/bin/env node

var fs = require('fs');
var path = __dirname + "/.yourewelcomes"

fs.readFile(path, 'utf8', function(err, data){
  if (err)  throw err;
  var a = data.split('\n');
  var lines = a.length;

  var i = Math.floor(Math.random() * lines);
  console.log(a[i]);
});
