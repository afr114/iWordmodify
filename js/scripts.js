var findAndReplace = function(inputString, findString, replaceString) {
  return inputString.replace(new RegExp( findString, "gi" ), replaceString);
};

$(document).ready(function() {
  $("form#findReplace").submit(function(event) {

    var inputString = $("#phrase").val();
    var findString = $("input#oldWord").val();
    var replaceString = $("input#newWord").val();
    var result = findAndReplace(inputString, findString, replaceString);

    $("#replaceWordPhrase").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
