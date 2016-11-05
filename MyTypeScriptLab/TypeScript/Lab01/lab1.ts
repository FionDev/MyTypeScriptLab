function Calculate(a:number,b:number):number{
    var result = a + b;
    return result;
}

var result = Calculate(1, 2);

//var result2 = Calculate(1, '22');//typescript會提示錯誤


class Hello {
    constructor(private dom: Element) {
    }

    Say() {
        //this.dom.innerHTML = "Hello Typescript";
    }
}

var dom = document.querySelector("#content");
var hello = new Hello(dom);
hello.Say();