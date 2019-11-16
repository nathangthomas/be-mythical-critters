class Sphinx{
  constructor(riddles){
    this.riddles = []
    this.correctAnswers = []
    this.heroesEaten = 0
  }
  collectRiddle(riddle){
    if(this.riddles.length == 3){
      this.riddles.shift(riddle);
    }
    this.riddles.push(riddle)
  }

  attemptAnswer(answer) {
    var result = this.riddles.find(i => i.answer === answer);
    var index = this.riddles.indexOf(result);

    if (result) {
      this.riddles.splice(index, 1);
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
          }
      else {
        return "That wasn't that hard, I bet you don't get the next one";
        }
      }
    else {
      this.heroesEaten += 1;
    }
  }
}

module.exports = Sphinx
