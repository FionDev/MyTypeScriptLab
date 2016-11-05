# Lab 02

## 練習步驟

1. 練習 boolean
    
    ``` typescript
    var a: boolean = true;
    var b: boolean = 1 > 2;
    ```

1.  練習 number

   ``` typescript
   var c: number = 5.2;
   var d: number = +"1";
   ```
   
1. 練習 string

    ``` typescript
    var e: string = "John";
    var f: string = 5 + "";
    var h: string = `Hello, ${e}`;
    ```
    
1. 練習 Enum, 轉成數字, 轉成文字

   ``` typescript
   enum SizeEnum {
        XL,

        L,

        M,

        S
    }

    //// Enum 轉數字
    d = SizeEnum.XL;
    //// Enum 轉文字
    e = SizeEnum[SizeEnum.XL];
   ```
   
1. 練習 any

    ``` typescript
    var g: any = 1;
    g = "Test";
    g = [];
    
    ```


