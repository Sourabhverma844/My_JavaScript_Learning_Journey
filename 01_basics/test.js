const accountId = 12345
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// account Id = 2 is not allowed Beacase Hamne const me store kia tha or const me hum jo bhi store krenge wo constant rahega use change nahi ki aja sakta he.

console.log(accountId);
accountEmail = "Aniketverma458@gmail.com"
accountPassword = "54321"
accountCity = "Indore"
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// Agar Hum Sirf Variable Define Karke rakh de use value na de to runtime par use undefined value de di jati he.
// hum let or var dono ki value ko change kar pa rahe he , then hame dono ki jaurat kyo he hum kisi ek ko hi har jgha use kar lete ?
// initially javascript scope pe base par kam hi nahi karti th , JS me Scope ka ek problem tha, ye BlockScope ko control nahi kar pati thi, ab ese me ko new programmer aya or usne var me change kia to hjaha bh var ka refrence dia hoga wo sab jgha change ho jaega. islia hum let ka use karne lge. 
// var is function scoped and let is block scoped.
// Final Note Please do not use var, use let in most case

// accountCity me hamne direct Value di na var likha na let likha fir ye kese chal gya.
// in js hum direct bina datatype die variable bna sakte he ya value store kar sakte he.


