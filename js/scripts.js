
var romanNumerals = function(input){
  if((isNaN(input)) || (input > 3999 ) || (input < 0)){
    $("#results").text("bad input");
  }
  else {
    $("#results").text("good input");
  }
}
var output;
var input;


$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    input = parseInt($("#input").val());
    var results1 = []; //array with mulitiples of four
    var results2 = [] //finalized array without mulitples of four
    output = romanNumerals(input);
    $("#results").text(output);
  });//end
});
