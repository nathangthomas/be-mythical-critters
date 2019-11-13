class Medusa {
  constructor(name, statues) {
    this.name = name;
    if (statues == undefined){
      this.statues = [];
    }
  }

  capture(victim){
    this.statues.push(victim)
    victim.stoned = true
  }

  release(){
    var freedVictim = this.statues.shift()
    freedVictim.stoned = false
  }

  stare(victim){
    if (this.statues.length == 3){
      this.release()
    }
    this.capture(victim)
  }
}

module.exports = Medusa;
