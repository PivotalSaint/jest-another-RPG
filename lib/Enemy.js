const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

Enemy.prototype.getHealth = function(){
    return `${this.name}'s health is now ${this.health}!`;
};

//returns if player is alive
Enemy.prototype.isAlive = function(){
    if (this.health === 0) {
        return false;
    }
    return true;
};

//returns the reduced health
Enemy.prototype.reduceHealth = function(health){
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

//adding get attack method
Enemy.prototype.getAttackValue = function(){
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min) + min);
};

//adding potion to player
Enemy.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

//added ability for player to use potion
Enemy.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

module.exports = Enemy;