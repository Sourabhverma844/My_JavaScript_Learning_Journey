let a = 10  //ye global scope he, yaha hum jo bhi likhenge wo value sab jgha available hogi
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);
//sometimes hum soch sakte he ki var kam kar raha he fir ye let or const kyo
//scope {curley braces hi scope he jab ye kisi function ke sath ayega ya if elese ke sath ayega}

if(true){ //ye poora block scope he
    // scope ke ander ki value bahar available nahi hona chahiye
    let d = 10
    const e = 20
    var f = 30
    c = 40
}
//console.log(d); ye error dega ki d is not defined
//console.log(e); ye bhi error dega ki d is not defined
console.log(f); //f scope ke ander define he but fir bhi isne bahar prin kar lia
console.log(g);
/*hum apne browser ke console me jo scope dekhenge wo alag he or jab actually me code environment me node ke through check karte he wo alag he*/
