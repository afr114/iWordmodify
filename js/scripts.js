var findAndReplace = function(inputString, findString, replaceString) {
  return inputString.replace( new RegExp( findString, "gi" ), replaceString);
};
