# Lab 01

## 練習步驟

1. 建立一個新的 TypeScript 專案
1. 修改 app.ts ，練習建立一個 TypeScript 的 Class

	``` typescript
	class Hello {
		constructor(private dom: Element) {
		}

		Say() {
			this.dom.innerHTML = "Hello Typescript";
		}
	}

	var dom = document.querySelector("#content");
	var hello = new Hello(dom);
	hello.Say();
	```

1. 開啟網頁，檢查是否成功
1. 觀察是否有自動產生 js 檔案
1. 練習使用 Debug 模式