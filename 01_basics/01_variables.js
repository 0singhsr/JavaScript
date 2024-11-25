const accountId = 12345
let accountEmail = "0singhsr@gmail.com"
var accountPassword = "Indore123"


let accountState; // will be undefined 


console.log("accountPassword");

accountEmail = "0s@gmail.com"
accountPassword = "Sagar123"


// To take multiple outputs at once use table 
console.table([accountId,accountEmail, accountPassword, accountState])


/* 
Here's the output of our code 
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 12345          │
│ 1       │ '0s@gmail.com' │
│ 2       │ 'Sagar123'     │
│ 3       │ undefined      │
└─────────┴────────────────┘
*/