describe("countUp", function(){
  it("it will count to a number by a divisble", function() {
    expect(countUp(50,7)).to.equal("7,14,21,28,35,42,49");
  });
});
