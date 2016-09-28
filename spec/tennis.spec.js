function Tennis(A,B) {

  this.start_game = function(){
    return "Love-Love";
  }

};

describe("Tennis()", function() {

  it('should be "Love-Love" when Start game', function() {
    var echoScore = new Tennis();
    expect(echoScore.start_game()).toBe('Love-Love');
  });


  it('should be "Fifteen-Love" when A get score', function() {
    var echoScore = new Tennis(15,0);
    expect(echoScore.AgetScore()).toBe('Fifteen-Love');
  });
  it('should be "Fifteen-Love" when A get score', function() {
    var echoScore = new Tennis(15,0);
    expect(echoScore.AgetScore()).toBe('Fifteen-Love');
  });
});
