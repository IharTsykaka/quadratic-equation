
module.exports = function solveEquation(equation) {
  
    let arrToEnter = equation.split(" ");
    let arrSort = [];
    let a = arrToEnter[0];
    let b = arrToEnter[4];
    let c = arrToEnter[8];
        
    if (arrToEnter[3] === "-") b = -b;
    if (arrToEnter[7] === "-") c = -c;
        
    let d = (b*b)-(4*a*c);           
        
    let x1 = Math.round(-b + Math.sqrt(d))/(2*a);
    let x2 = Math.round(-b - Math.sqrt(d))/(2*a);
    arrSort.push(x1);
    arrSort.push(x2);

    function compareNumeric(a, b) {
        return a - b;
    }            
      
    return arrSort.sort(compareNumeric);        
};
    
    

