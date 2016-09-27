function Tennis(A,B) {
  
};

describe("Tennis()", function() {

  it('should be "Love-Love" when Start game', function() {
    var echoScore = new Tennis();
    expect(echoScore.start_game()).toBe('Love-Love');
  });
});
