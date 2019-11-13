class Werewolf{
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true
    this.wolf = false
    this.hungry = false
  }

  change(){
    this.human = !this.human
    this.wolf = !this.wolf
    this.hungry = true
  }

  eat(victim){
    if(this.hungry == false){
      return "I cannot eat because I am not hungry."
    } else(victim.alive = false)
        this.hungry = false
        return "YUM!"
  }
}

module.exports = Werewolf;
