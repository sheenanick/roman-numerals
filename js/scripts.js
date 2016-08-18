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
var results1 = [""]; //quotations keep an empty placeholder. absolutely necessary
var results2 = []; //finalized array without mulitples of four
var numeralsArray =["M", "D", "C", "L", "X", "V", "I"];
var letter;
var stringBefore;
var beforeLetter;
var whereAt;
var charBefore;
var charTwoBefore;

var isValid = function(input){
  if((isNaN(input)) || (input > 3999 ) || (input < 0)){
    alert("afafa");
    output = "No! All entries must be a whole number between 1 and 3999";
    return false;
  }
  else {
    converter(input);
   }
}

var converter = function(input){
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
  eliminator();
}//end converter
// var letter;
// var beforeLetter;
// var whereAt;
// var charBefore;
// var charTwoBefore;

var eliminator = function(){
  for(var i = 1; i<results1.length; i++){
     letter = results1[i].charAt(0);
     stringBefore = results1[i-1];
     beforeLetter = stringBefore.charAt(0);
     whereAt = numeralsArray.indexOf(letter);
     charBefore = numeralsArray[whereAt-1];
     charTwoBefore = numeralsArray[whereAt-2];
     if(results1[i].length ===  4){
      console.log("too many digits");
      if(beforeLetter === charBefore){
        results2.pop();
        results2.push(letter + charTwoBefore);
      }
      else{
        results2.push(letter + charBefore)
      }
    }//end if more than 4 in a row
    else{
      results2.push(results1[i]);
    }
  } //end for
  output = results2.join("");
} //end eliminator





$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    input = parseInt($("#input").val());
    isValid(input);
    $("#results").text(output);
  });//end
});
