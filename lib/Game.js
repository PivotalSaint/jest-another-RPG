const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game(){
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'clubber lang'));
    this.enemies.push(new Enemy('skelton', 'bow'));

    this.currentEnemy = this.enemies[0];
};

inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
})

//destructure name from the promp object
.then(({name}) => {
    this.player = new Player(name);

    console.log(this.startNewBattle());

// test the object creation
    //console.log(this.currentEnemy, this.player);
})

Game.prototype.startNewBattle = function(){
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }

    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
};

module.exports = Game;
