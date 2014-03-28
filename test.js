
var esprima = require('esprima'), fs = require('fs'), escodegen = require('escodegen');
console.log(escodegen.generate(esprima.parse(fs.readFileSync(process.argv[2]))));

