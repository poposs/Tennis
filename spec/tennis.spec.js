function Tennis(A,B) {
  var score;
  this.A = A;
  this.B = B;

  this.start_game = function(){
    return "Love-Love";
  }
  this.AgetScore = function(){

    if(this.A === 15){
      score = "Fifteen-";
      score += this.BgetScore();
    } else if(this.A === 30){
      score = "Thirty-";
      score += this.BgetScore();
    }
    return score;
  }

  this.BgetScore = function() {
    if(this.B === 0){
      return "Love";
    }
  }

  this.start_game = function(){
    return "Love-Love";
  }

};

describe("Tennis()", function() {

  it('should be "Love-Love" when Start game', function() {
    var echoScore = new Tennis();
    expect(echoScore.start_game()).toBe('Love-Love');
  });

  it('should be "Fifteen-Love" when A get score 15-0', function() {
    var echoScore = new Tennis(15,0);
    expect(echoScore.AgetScore()).toBe('Fifteen-Love');
  });
   it('should be "Thirty-Love" when A get score 30-0', function() {
    var echoScore = new Tennis(30,0);
    expect(echoScore.AgetScore()).toBe('Thirty-Love');
  });
    it('should be "Forty-Love" when A get score 30-0', function() {
    var echoScore = new Tennis(40,0);
    expect(echoScore.AgetScore()).toBe('Forty-Love');
  });
});
