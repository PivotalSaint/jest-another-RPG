const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = ''){
        super(name);

    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

}


//inherit prototype methods from character here:
//Player.prototype = Object.create(Character.prototype);

    //returns an object with various player properties
    //Player.prototype.getStats = function()
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        }
    };

    // returns the inventory array or false if empty
    //Player.prototype.getInventory = function()
    getInventory() {
        if(this.inventory.length){
            return this.inventory;
        }
        return false;
    };

    //returns the health of the array
    //Player.prototype.getHealth = function()
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    //returns if player is alive
    //Player.prototype.isAlive = function()
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    //returns the reduced health
    //Player.prototype.reduceHealth = function
    reduceHealth(health){
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    //adding get attack method
    //Player.prototype.getAttackValue = function()
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max-min) + min);
    };

    //adding potion to player
    //Player.prototype.addPotion = function(potion) 
        addPotion(potion) {
        this.inventory.push(potion);
    };
    
    //added ability for player to use potion
    //Player.prototype.usePotion = function(index) 
        usePotion(index) {
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
};


module.exports = Player;

