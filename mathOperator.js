//Basic Math (Add or Subtract)
function calculate(str) {
        return eval(str.replace(/plus/g,"+").replace(/minus/g,"-")).toString();
    
    }