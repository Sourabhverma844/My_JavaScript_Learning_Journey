/* 
truthsy and falsy value's :-
There is a intresting concept in JavaScript Called truthy Value and falsy Value.
as we know true and false are always remain strict true and false. 
but kuch value esi hoti he jinhe assume kar lia jata ki ki ha ye truth hi hongi ye false hi hongi.
*/
const empEmail = "sourabhverma844@ripple.com"
// yaha hamne koi comparision nahi kia bus man lia ki string true value he to agar waha koi bhi value ayi to hmesa true rahega
if (empEmail){
    console.log(`Hello ${empEmail} welcome in ripple as a smart contract developer`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const Email = ""
//empty string ki value false ki trha behave kar rahi he.
//string me koi bhi data nahi tha islia else part run hua, agar koi bhi value string me hoti to true ho jati or if run hota.
if (Email){
    console.log(`Hello ${Email} welcome in ripple as a smart contract developer`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const salary = []
// [] empty array ki value true ki trha behave karti he. 
if (salary){
    console.log(`Hello Sourabh welcome in ripple as a smart contract developer your CTC is 6000000`)
}
else{
    console.log("Your Interview date is 15-June-2025");
}

const array = []
if (array.length === 0){
    console.log("array is empty")
}
//Kabhi object empty aya tab kese check krenge
const emptyObj = {}
//as we know Object.keys(objectname) hme keys ka ek array return kar deta he 
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/*
falsy values :- esi values jinhe false assume kiya ja sakta he 
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values :- esi values jinhe truth assume kiya ja sakta he 
single quotes '' me ho ya double quotes "", string ke ander agar koi bhi value a gai to wo truthy value he
"0", '0', "false", 'false', " "yaha string me ander space he, []empty array, {}empty Object, function(){}empty function.

some points to be remember
false == 0
true

false == ''
true

0 == ''
true
*/
