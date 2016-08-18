// add all characters together, ex: 2 will be "II"
// if more than three characters in a row, subtract from the next character value available, ex: 9 will become "IX"
// A value cannot be subtracted by V,L, or D. stated otherwise, ony by multiples of ten. ex: 51 is not LCV
// each chunk must have its equivalent in decimal format, ex: XCIX
// will not accept value greater than 3,999

// if string length is less than two, add digits together
// if string length is 2,
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var output = [];
    if(input ===5){
      output.push ("V");
    }
    else if (input < 4){
      for(var i= 0; i <input; i++){
        output.push("I");
      }
    }
    else if (input > 5){
      output.push("V");
      for (var i= 5; i <input; i++){
        output.push("I");
      }
    }
    var results = output.join();
    $("#results").text(output);
  }); //end submit
}); //end jquery
