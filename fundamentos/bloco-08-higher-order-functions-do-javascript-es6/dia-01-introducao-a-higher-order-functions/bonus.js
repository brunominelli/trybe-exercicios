const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => {
      const minimumDamage = 15;
      const dragonDamage = Math.floor(Math.random() * (dragon.strength - minimumDamage + 1) + minimumDamage);
      return dragonDamage;
  }

  console.log(dragonAttack(dragon));