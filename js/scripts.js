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

var isValid = function(input){
  if((isNaN(input)) || (input > 3999 ) || (input < 0)){
  return false;
  }
  else {
    return true;
  }
}

var romanNumerals = function(input){
  if(isValid(input)){
    ems = Math.floor(input/1000);
    for(var i =0; i<ems ; i++){
      result += "M";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (ems * 1000);
    ///D's
    dees = Math.floor(input/500);
    for(var i =0; i<dees ; i++){
      result += "D";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (dees * 500);
    /////C's
    cees = Math.floor(input/100);
    for(var i =0; i<cees ; i++){
      result += "C";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (cees * 100);
    //// L's
    ells = Math.floor(input/50);
    for(var i =0; i<ells ; i++){
      result += "L";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (ells * 50);
    /// X's
    exes = Math.floor(input/10);
    for(var i =0; i<exes ; i++){
      result += "X";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (exes * 10);
    ///V's
    vees = Math.floor(input/5);
    for(var i =0; i<vees ; i++){
      result += "V";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (vees * 5);
    /// I's
    eyes =input
    for(var i =0; i<eyes ; i++){
      result += "I";
    }
    if(result){
      results1.push(result);
    }
    result = ""
    input= input - (eyes * 1);
  }//end if valid
}//end romanNumerals

var eliminator = function(){
  for(var i = 0; i<results1.length; i++){
    if( results1[i].length ===  4){
      
    }
  } //end for
} //end eliminator





$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    input = parseInt($("#input").val());
    romanNumerals(input);
    eliminator();
    output = results1.join(" ");
    $("#results").text(output);
  });//end
});
