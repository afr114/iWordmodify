describe("findAndReplace", function (){
  it('will replace one word with another word', function (){
    expect(findAndReplace("Hello world", "world", "universe")).to.equal("Hello universe");
  });

  it("will find and replace the same word in multiple places", function (){
    expect(findAndReplace("world Hello world", "world", "universe")).to.equal("universe Hello universe");
  });

  it("will find and replace a word with a special character", function (){
    expect(findAndReplace("world's Hello world's", "world", "universe")).to.equal("universe's Hello universe's");
  });

  it("will find and replace a special character", function (){
    expect(findAndReplace("world's Hello world's", "'", ",")).to.equal("world,s Hello world,s");
  });

  it("will find and replace a word within a word", function () {
    expect(findAndReplace("wordHello", "word", "world")).to.equal("worldHello");
    });

   it("will find and replace a number within a word", function(){
     expect(findAndReplace("wordHello23", "23", "15")).to.equal("wordHello15");
   });
});
