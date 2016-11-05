function Calculate(a, b) {
    var result = a + b;
    return result;
}
var result = Calculate(1, 2);
//var result2 = Calculate(1, '22');//typescript會提示錯誤
var Hello = (function () {
    function Hello(dom) {
        this.dom = dom;
    }
    Hello.prototype.Say = function () {
        //this.dom.innerHTML = "Hello Typescript";
    };
    return Hello;
})();
var dom = document.querySelector("#content");
var hello = new Hello(dom);
hello.Say();
//# sourceMappingURL=lab1.js.map