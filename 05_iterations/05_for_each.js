const coding = ["js", "ruby", "java", "solidity", "python"]

// kuch loops ararys ke ander direct hi properties me add kar die jate he.
// jese hum is array ko console me ja ke print karte he to we can see in prototype.
// there is foreach loop available in prototype and map also.
// for each loop ka hi ek parametar he jise by default hi inject karke rakha gya he and ye ek higher order function he 
// forEach(callbackfn): callback function ka matlub he ki muje ek function de do ki muje kya karna he.
// yaha par bhi function ko sab pta he kya length he kya he hme bus function dena hota he
// callback function me kabhibhi function ka name nahi hota he 
// arrayname.forEach( function (varnam) {

// } )

coding.forEach( function (langName){
    console.log(langName);
})

// hum arrow function aka use bhi yaha kar sakte he

const car = ["Pagani Zonda", "Aventador", "Maclarem"]
car.forEach( (item) => {
    console.log(item);
} )

// coding.forEach(printMe)
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName : "JavaScript",
        langFileName : "js"
    },
    {
        langName : "Python",
        langFileName : "py"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(item.langName);
} )

// for each hme koi bhi value return nahi karta he 
const bike = ["M15", "Apache", "Pulsar", "Hunk", "Xtream"]

// kya ho agar me for each se return ayi value ko variable me store karna chahu.
const bikename = bike.forEach((bname) => {
    console.log(bname); // agar me console.log(bname); ko bhi comment karte // return bname likhu tab bhi undefined
    //return bname // yaha manually return likhne par bhi value undefined ayi he
} )
//lets check ki jo hamne var bikename declare kia usme for each ne kya values return ki he
console.log(bikename);
// fir hamne dekha ki isne kuch retun nahi kia he undefined aya.

// in the end we find out ki for each jo he wo value return hi nahi karta chahe ap chahe ya nahi ye value to 
// retun nahi karne wala he.

/*
Hamesha ye jaroori nahi he na ki hum array se jo value lenge wo hme print hi karana ho kaibar ho sakta he 
ki hme koi condion check karna ho, ki uska name java ho to use retun kriye nahi to nahi, then ese case me kya krunga
fir me , fir to hamara for each loop fail ho jaega.
but for doin this we have diffrent approch
*/
myNum = ["1]