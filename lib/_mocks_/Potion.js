const Player = require("../Player");

module.exports = function() {
    this.name = 'health';
    this.value = 20;
}

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};