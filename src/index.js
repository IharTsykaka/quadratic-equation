module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var arrEquation = [];
  var a = arr[0];
  var b = arr[4];
  var c = arr[8];
  if(arr[3] === "-"){
    b = -b;
  }
  if(arr[7] === "-"){
    c = -c;
  }
  var d = b * b - 4 * a * c;
  var x1 = Math.round(-b + Math.sqrt(d)) / (2 * a);
  var x2 = Math.round(-b - Math.sqrt(d)) / (2 * a);
  arrEquation.push(x1);
  arrEquation.push(x2);
  if (x1 > x2) {
    arrEquation = [x2, x1];
  }
  else {
    arrEquation = [x1, x2];
  }
  return arrEquation;
  }
}
