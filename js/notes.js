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
[M D C L X V I]
99
XCIX
// NO

L 49
L XXXX 9
L XXXX V
L XXXX V IIII
949

CM XL V IIII
CM XL IX

3999
 MMM D CCCC L XXXX V IIII
 MMM CM XC IX

front end
check if greater than 0 and less than 3999
if false return catty remark
else run function

getMultiples
evaluate for multiples of M (1000)
input/1000
math floor
for loop, taking math floor return,
  result =+ "M"
if (input % 1000 !===0) go to next step
else eliminate multiples of four eliminate(resultArray)
evaluate for multiples of D (1000)
  evaluate for multiples of C (1000)
    evaluate for multiples of L (1000)
      evaluate for multiples of X (1000)
        evaluate for multiples of V (1000)
          evaluate for multiples of I (1000)
ex: resultArray
eliminateFours
[D CCCC XXXX  IIII]

for(iterate over array)
  if array[i] <4
  do nothing?
  else....
  var romanPosition1 --where is firstChar of this element in our romanNumerals Array?
  [M D C L X V I]
  var romanPosition2 --and where is array[i-1]?
    if preceding roman numeral then
    concat element with two roman numeral spaces before it(ec I before X)
    and delete the previous character from our final results
    else {
      then concat character with character before it (ie (no V here to start with) ---->IIII IV)
    }
