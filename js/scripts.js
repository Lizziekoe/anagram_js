var anagram = function(baseWord, wordsToCheck) {

  var sortedBase = baseWord.toLowerCase().split("").sort().join("");
  var matchingWords = [];

  wordsToCheck.forEach(function(word) {
    var sortedWord = word.toLowerCase().split("").sort().join("");
    if (sortedWord === sortedBase) {
      matchingWords.push(word);
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
