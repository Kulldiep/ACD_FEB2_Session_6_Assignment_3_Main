function forSum(A) {
 
  var x = 0;
    for(var i = 1; i <= A; i++){
      x =x + i;
    }
    return x;
}

function forStart(){
  var val1 = document.getElementById("forVal").value;
  document.getElementById("for").innerHTML=forSum(val1);
  }

function whileSum(B) {
    var y = 0;
    var b = 1;
    do {
        y= y + b;
        b++;
    }
    while (b <= B);
    return y;
}
function doStart(){
var val2= document.getElementById("doVal").value;
  document.getElementById("doWhile").innerHTML=whileSum(val2);
  }