const accoutNumber = 2139009572;
let accoutEmail = "aryan@jpmall.com";
var accoutPassword = "2353";
myCity = "MNR";

// accoutNumber = 3723452373 // Not allowed
myCity = "Kathmandu";
accoutEmail = "bhuvan@gmail.com"
accoutPassword = "247324"

/*
Prefer not to use var
because of issue in block and functional scope.
*/
let accoutState;
console.log("accoutNumber = " + accoutNumber);

console.table([accoutEmail, accoutNumber, accoutPassword, myCity, accoutState]);