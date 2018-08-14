function replaceVowels(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
      array[i] = "-";
    }
  }
}


//User Interface
$(document).ready(function() {
  var inputArray = [];
  $("#sentence").submit(function(event){
    var userInput = $("#inputBox").val();
    inputArray = userInput.split("");

    replaceVowels(inputArray);

    var puzzleString = inputArray.join("");
    $("#sentence").hide();
    $(".results").slideDown();

    $("#outputResult").text(puzzleString);

    event.preventDefault();
  });


});
