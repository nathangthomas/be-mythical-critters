class Centaur{
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0;
  }

  reset(){
    this.actionCount = 0;
    this.cranky = false;
  }

  plusOne(){
    this.actionCount += 1;
    if (this.actionCount == 3) {
     this.cranky = true;
   }
 }

  shoot(){
    if(this.cranky || this.layingDown){
      return 'NO!';
    }else(this.plusOne());
    return 'Twang!!!';
  }
  run(){
    if(this.layingDown){
      return 'NO!';
    }else(this.plusOne());
    return 'Clop clop clop clop!!!';
  }

  sleep(){
    if(this.standing){
      return 'NO!';
    }else(this.reset());
      return 'ZZZZ';
  }

  drinkPotion(){
    if (this.layingDown){
      return "Not while I'm laying down!";
    }else if(this.standing && !this.cranky){
      this.cranky = true;
    }else(this.reset());
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur


// left this in order to explore later why this did not work.

// class Centaur{
//   constructor(name, breed){
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.actionCount = 0;
//   }
//   shoot(){
//     this.actionCount += 1
//     return 'Twang!!!'
//   }
//   run(){
//     this.actionCount += 1
//     return 'Clop clop clop clop!!!'
//   }
//   cranky(){
//     if(this.actionCount >= 3){
//       this.cranky = true;
//     }
//   }
// }
//
// module.exports = Centaur
