describe("findAndReplace", function (){
  it('will replace one word with another word', function (){
    expect(findAndReplace("Hello world", "world", "universe")).to.equal("Hello universe");
  });
});
