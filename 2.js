
var esprima = require('esprima');
var code = 'console.log("hello world");';
// var ast = esprima.parse(code);
var ast = esprima.parse(code, { log: true });
console.log(ast);

