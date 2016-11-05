//boolean
var a = true;
var b = 1 > 2;
console.log(b);
//number
var c = 5.2;
var d = +"1";
console.log(d);
//String
var name = "Fion";
var vM = "Welcome," + name;
console.log(vM);
//Enum 
var MemberLevel;
(function (MemberLevel) {
    MemberLevel[MemberLevel["Top"] = 0] = "Top";
    MemberLevel[MemberLevel["Middle"] = 1] = "Middle";
    MemberLevel[MemberLevel["Low"] = 2] = "Low";
})(MemberLevel || (MemberLevel = {}));
var level = MemberLevel.Low;
console.log(MemberLevel[level]);
// 
//# sourceMappingURL=lab02.js.map