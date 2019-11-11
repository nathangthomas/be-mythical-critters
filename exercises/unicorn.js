class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color == undefined){
      this.color ='white';
    }else{
    this.color = color;
    }
  }
  isWhite(){
    if (this.color !== 'white'){
      return false;
    }
  }
  says(message){
    return `**;* ${message} *;**`;
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Unicorn;
