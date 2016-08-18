var romanNumerals = function(input){
  if(isValid(input)){
    ems = Math.floor(input/1000);
    output = ems;
    console.log("yo?");
    for(var i =0; i<ems ; i++){
      result += "M";
    }
    results1.push(result);
  }//end if valid
}//end romanNumerals


var isValid = function(input){
  if((isNaN(input)) || (input > 3999 ) || (input < 0)){
  return false;
  }
  else {
    return true;
  }
}

var result= "";
var output;
var input;
var ems;
var dees;
var cees;
var ells;
var exes;
var vees;
var eyes;
var results1 = []; //array with mulitiples of four
var results2 = [] //finalized array without mulitples of four


$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    input = parseInt($("#input").val());

    output = romanNumerals(input);
    $("#results").text(results1);
  });//end
});
