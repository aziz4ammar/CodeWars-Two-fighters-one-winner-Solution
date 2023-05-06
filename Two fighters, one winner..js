function declareWinner(fighter1, fighter2, firstAttacker) {
    let currentAttacker = firstAttacker;
    let fighter1Rounds = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let fighter2Rounds = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  
    if (fighter1Rounds > fighter2Rounds) {
      return fighter1.name;
    } else if (fighter2Rounds > fighter1Rounds) {
      return fighter2.name;
    } else {
      return currentAttacker;
    }
  }
  