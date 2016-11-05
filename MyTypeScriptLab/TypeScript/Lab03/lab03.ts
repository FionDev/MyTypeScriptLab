
//練習 var, let, const, 並觀察產生出來的程式碼
var aa:number = 1;

const bb:number = 2;
// b = 3; 取消註解這行

var c = 100;
for (var i = 0; i < 10; i++) {
    let c = i;
}
console.log(c);


//練習匿名函式，並練習使用 this 和觀察差別
//1
function Hi1(name)
{
    this.name = name;
    this.say = function ()
    {
        console.log(`Hi, ${this.name}`);//此this.name為undefined 因為this指向setTimeout
    }
}
var hi1 = new Hi1('Fion');
setTimeout(hi1.say, 1000);

//2
function Hi2(name) {
    this.name = name;
    this.say = ()=>{
        console.log(`Hi, ${this.name}`);//此this.name為Fion 因this指向此function Hi2的arrow function
    }
}
var hi2 = new Hi2('Fion');
setTimeout(hi2.say, 1000);


//for in vs for of
var dataList: string[] = ['a', 'b', 'c'];
//for in
for (var data in dataList) {
    console.log(data);
} 
//for of
for (var data2 of dataList) {
    console.log(data2);
} 