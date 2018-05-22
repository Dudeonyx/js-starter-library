 let newFunction;
 let div;

 function init() {
     div = document.querySelector("div");
     newFunction = document.querySelector("#func-name");
 }

 function functioncreate() {

     if (RegExp(newFunction.value).test(div.innerHTML) )
     return;
     div.innerHTML += "<hr><button onclick=\"" + newFunction.value + "()" + "\"" + ">Execute " + newFunction.value + "</button>";
 }

 function sqrRt(number, error = 0.0001) {
     while ((number !=="cancel") && !number) number = prompt("Enter a number whose square root you wish to find:")
     if (number == "cancel") 
     return ; 
     let s = number;
     let result = babylonianMt(s, number, error);
     result = Math.round(result*100)/100;
     alert(result)
     return result;
 }

 function babylonianMt(s, number, error) {
     while ((s - number / s) > error) //loop until precision satisfied 
     {
         s = (s + number / s) / 2;
     }
     return s;
 }

 function min(a, b) {
     return ((a < b) ? a : b);
 }

 function showMin(x, y) {
     while (!x, !y) {
         x = Number(prompt("Enter the first number:"));
         y = Number(prompt("Enter the second number:"));
     }
     let result = min(x, y);
     alert("Between " + x + " and " + y + ", " + result + " is less");
 }

 function showAdd7(x) {
     while (!x) x = Number(prompt("Enter a number:"));
     alert(add7(x))
     return add7(x);
 }

 function add7(x) {
     x += 7;
     return x;
 }