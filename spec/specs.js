describe('anagram', function() {
  it("compares two of the same word and tells if they are anagrams of each other", function() {
    expect(anagram("yes", ["yes"])).to.eql(["yes"]);
  });

  it("compares a word and tells if the second word is an anagram", function() {
    expect(anagram("yes", ["eys"])).to.eql(["eys"]);
  });

  it("compares a word to an array of words and returns the ones that are anagrams", function() {
    expect(anagram("yes", ["eys", "sey", "yes", "no"])).to.eql(["eys", "sey", "yes"]);
  });

  it("is case insensitive", function() {
    expect(anagram("YES", ["yes", "yES", "YES", "no"])).to.eql(["yes", "yES", "YES"]);
  });
  it("tells if baseword includes partial matches", function() {
    expect(anagram("path", ["hat"])).to.eql(["hat"]);
  });
  it("tells if baseword includes partial matches, accounting for right number of letters", function() {
    expect(anagram("at", ["aat"])).to.eql([]);
  });

});
