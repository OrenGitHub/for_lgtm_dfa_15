const utils = require('utils')
class Person
{
    name = utils.escapeHtml('http://www.github.com/?foo=шеллы');
    lastName = "cohen";
}
var p = new Person();
console.log(decodeURI(p.name));
