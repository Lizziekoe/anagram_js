var anagram = function(baseWord, wordsToCheck) {

  var sortedBase = baseWord.toLowerCase().split("").sort().join("");
  var matchingWords = [];

  wordsToCheck.forEach(function(word) {
    var sortedWord = word.toLowerCase().split("").sort().join("");
    if (sortedWord === sortedBase) {
      matchingWords.push(word);
    } else { //check for partial matches
      var isMatch = true;
      var lettersInBaseWord = sortedBase.split("");
      var joinedBase = lettersInBaseWord.join("");
      var lettersInSortedWord = sortedWord.split("");
      lettersInSortedWord.forEach(function(letter) {
        if (joinedBase.indexOf(letter) !== -1) { // if found
          joinedBase = joinedBase.replace(letter, "");
          debugger;
        } else { // a letter is not found in the base word (so not an anagram)
          isMatch = false;
        }
      });
      if(isMatch) {
        matchingWords.push(word);
      }

    }

  });

  return matchingWords;
};

$(document).ready(function() {
  $("form#anagramForm").submit(function(event) {
    var baseWord = $("input#baseWord").val();
    var words = $("input#words").val();

    var anagramList = anagram(baseWord, words.split(" "));

    htmlToInsert = "";
    anagramList.forEach(function(word) {
      htmlToInsert = htmlToInsert + "<li>" + word + "</li>";
    });


    $("#results ul").html(htmlToInsert)
  event.preventDefault();
  });
});
