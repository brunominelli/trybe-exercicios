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
  };

  const warriorAttack = (warrior) => {
      const minimumDamage = warrior.strength;
      const maximumDamage = warrior.strength * warrior.weaponDmg;
      const warriorDamage = Math.floor(Math.random() * (maximumDamage - minimumDamage + 1) + minimumDamage);
      return warriorDamage;
  }
  
  const mageAttack = () => {
      const mana = mage.mana;
      const minimumDamage = mage.intelligence;
      const maximumDamage = mage.intelligence * 2;
      const message = 'Não possui mana suficiente';
      const manaTrack = {
          mana: 0,
          damage: message,
      }

      if (mana > 15) {
        const mageDamage = Math.floor(Math.random() * (maximumDamage - minimumDamage + 1) + minimumDamage);
        manaTrack.mana = 15;
        manaTrack.damage = mageDamage;
      } else manaTrack.damage = message;
      return manaTrack;
      
  };

  console.log(mageAttack());