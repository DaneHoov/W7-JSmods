const  { sayHelloTo } = require('./say-hello-to.js')
// const sayHelloTo = say-hello-to.sayHelloTo

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

//!!START SILENT
module.exports = giveMessageToMrsPotato;
//!!END
