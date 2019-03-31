//terneary operator


//let count=2;
//count>5?console.log("greater"):console.log("samaller");
//condition ?if true do this :elase do this;


//var a=26;
//function checkScope(){
    //console.log(a);

//}
//checkScope();
//console.log(a);



 /*var string="waited for 3 $"
console.log("Execution started...");
setTimeout(function(){
    console.log(string);
},1000) */




//count..
//10,9,8.....0

/*   var counter = 10;

function countTo(){
    setTimeout(function(){
        if(counter>=0){
            console.log("count::"+ counter--);
            countTo();
        }else {
            console.log("JOB DONE");
        }
        
    },1000)

    
}
countTo();    */



/*  (function(){
    console.log("Nice");
})();  */



// Assignment......

 /*  var timeoutHandle;

  function countdown(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function tick() {
      var counter = document.getElementById("timer");
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
    }
    tick();
  }

  countdown(2);  */

/** 
// countdown.....//


function countDown(time){
  //calculate minutes
   var min = math.floor(time/60);
   
   //calculate seconds 
   var sec = time-(min*60);

   //time out function with 1 seconds delay 
   setTimeout(function(){

    //counting up to zero seconds
    if (time>=0){

      //desired output
      console.log(min + ":" + sec);
       
      //recursion
      countDown(--time);

    }else {

      //after the counting is done
      console.log("finished");

    }
   },1000);
    
}


//
countDown(80);     */

/*
function mySquareRoot(number){
  var result = number*number ;
  //console.log(result);
  return result;
}

//mySquareRoot(5);

var result5 = mySquareRoot(5);
//result5 = result;

var result6= mySquareRoot(6);
console.log(result5);

console.log(result6);   */



/** 
function one(){
  return function(){
    console.log("returned from function one");

  }
}

one();
*/


function test(){
  return "called test";
  console.log("called test");

}
var result = test();
console.log(result);