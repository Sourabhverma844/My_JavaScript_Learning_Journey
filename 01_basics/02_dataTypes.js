/*Pahle or aj ki JavaScript me bahut Jyada Farak he Pahle Classes, 
Arrow Functions Ye Sab nahi Hua Karte the Lekin ab He.
but JS Ki Organization Ye Nahi Chahti Thi Ki Purana Code Kharab Ho Jae
Beacuse ap to new version ke hisab se new code use kar rahe ho,
ab Jab new code use kar rahe he to poore code ko ek new code ki trha use kro, 
Kyoki sara code run to engine se hi hona he , thats why we write

"use strict"; jo ki engine ko btata he ki treat all code as newer version
But abhi Js itna advanced ho chuka he ki hme ye lin ebhi likhne ki jarurat nahi he 
because ye By Default Strict Mode Me Chalta he.*/

//alert(3 + 3); we are using node js not browser islia run nahi hoga, agar hum ise browser pe likhe hote t run ho jata or 6 output deta kyoki browser me javascript ka engine chupa hota he.

// we can read about documantations from mdn website , mdn is created by mozilla organisations.
// and js ka orignal jo documantation tc39.es par availale he. ise ecma script kahta he.
// pahle javascript me sabke alag standards the , because of dirrent browsers
// so all people decided to form an organization and decide one standard that follows by all. to ye organization sirf standards likhti he code nahi js nahi.
//Jese ap loop lga rahe he to is trha se input lena chaiye , ese output ayega ye sab
let Name = "Sourabh Verma" //String we can also wite this under ''
let age = 24  // integer or number range is 2^53
let isLoggedIn = false // boolean value
let state; //Hamne variable define kia he lekin value nahi di to undefined output ayega
null 
console.table([age,isLoggedIn,Name])

//null = standalone value jab Koi Bhi Value na dena ho empty dena ho tab hum use karte he , null ka mean 0 nahi he because agar kisi program me hum temprature ko lete he to 0 hone par bhi wo ek temprature hi hua, to agar us waqt program theak treeke se kam nahi kar raha ho to hum null denge.
//symbol = Jab bhi hme bat karna he unique ke lie , to hum symbols use kar lete he, iska use react me jyada hota he.
// object 
console.log(typeof age)
console.log(typeof state)
console.log(typeof null)
//typeof se hum kisi ka bhi type jan sakte he.
//undefined khud me hi ek special value he or iska type undefined hi he 
//null ek object type he 