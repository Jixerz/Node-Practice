var _ = require('lodash');
var jsonfile = require('jsonfile')
var file = 'data.json'
//console.dir(jsonfile.readFileSync(file))
var json = JSON.parse(require('fs').readFileSync('data.json', 'utf8'));
console.log("Name: " + json.items[0].fname + "  Last Name: " + json.items[0].lname + "  Age: " + json.items[0].age);
console.log("Name: " + json.items[1].fname + "  Last Name: " + json.items[1].lname + "  Age: " + json.items[1].age);

