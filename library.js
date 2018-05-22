  function sqrRt(number, error = 0.0001) {
      let s = number;
      let __return;
      ({
          __return,
          s
      } = babylonianMt(s, number, error));
      return __return;
  }

  function babylonianMt(s, number, error) {
      while ((s - number / s) > error) //loop until precision satisfied 
      {
          s = (s + number / s) / 2;
      }
      return {
          __return: s,
          s
      };
  }

  function min(a, b) {
      return (a < b) ? a : b;
  }

  function showMin(x,y) {
      while (!(x&&y) ) {
      x = prompt("Enter the first number:");
      y = prompt("Enter the second number:");
      }
      let result = min(x,y);
      alert("Between " + x + " and " + y + ", " + result + " is less");
  }
 
  function add7(x){
      x += 7;
      return x;
  }
