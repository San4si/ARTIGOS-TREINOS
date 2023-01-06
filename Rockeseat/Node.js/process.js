const getFlag = require("./exports");

//lista de argumentos
//console.log(process.argv);

//console.log("Meu nome é ", process.argv[2] + " " + process.argv[3]);

// const firtName = process.argv[2];

// const lastName = process.argv[3];

// console.log(`Seu nome é ${firtName} ${lastName}`);

console.log(`Oi ${getFlag("--name")}. ${getFlag("--greeting")}`);
