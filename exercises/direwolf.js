class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive'){
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = []
  }
  protect(stark){
    if(this.starksToProtect.length < 2 && this.home == stark.location){
      this.starksToProtect.push(stark);
      return stark.safe = true;
    }
  }
  leave(stark){
    this.starksToProtect.pop(stark)
    stark.safe = false;
  }
}

module.exports = Direwolf
