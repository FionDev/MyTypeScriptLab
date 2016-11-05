//boolean
var a: boolean = true;
var b: boolean = 1 > 2;
console.log(b);

//number
var c: number = 5.2;
var d: number = +"1";
console.log(d);

//String
var name = "Fion";
var vM = `Welcome,${name}`;
console.log(vM);

//Enum 
enum MemberLevel {
    Top,
    Middle,
    Low
}
var level: MemberLevel = MemberLevel.Low;
console.log(MemberLevel[level]);

//