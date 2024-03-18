const myself = require('./information.js');
const cowsay = require  ("cowsay")
console.log(cowsay.say({
    text : `${myself.myname} ${myself.mycampus} ${myself.mypassions}`}))