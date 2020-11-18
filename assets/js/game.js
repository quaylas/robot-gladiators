// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// function to generate random number between 40 and 60
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// Initialize player stats, including name
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 money");
            this.health += 20;
            this.money -= 7;
            console.log(`${this.name} now has ${this.health} health and ${this.money} money.`)
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert("Upgrading play'ers attack by 6 fo 7 money");
            this.attack += 6;
            this.money -= 7;
            console.log(`${this.name} now has an attack of ${this.attack} and ${this.money} money.`)
        }
    }
};

// Initialize enemy array and stats
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];
// Fight function
var fight = function(enemy) {
    console.log(enemy);
    // repeat and execute as long as the enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0){
        // alert players that they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // If player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                // subtract 10 from playerInfo.money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money " + playerInfo.money);
                break;
            }
            // if no (false), ask question again by re-runnning fight()
            else {
                fight ();
            }
        }
        // Subtract 'playerInfo.attack' from 'enemy.health'
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a message to the console to confirm the operation
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        // Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // Subtract 'enemy.attack' from 'playerInfo.health'
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a message to the console to confirm the operation
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } 
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
}
//function to start a new game
var startGame = function(){
    // reset player stats
    playerInfo.reset();

    // Fight all enemy robots
    for(var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                var pickedEnemyObj = enemyInfo[i];
                pickedEnemyObj.health = randomNumber(40,60);
                fight(pickedEnemyObj);
                // if we're not at the last enemy in the array
                if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                    // ask player if they want to go to the shop before the next battle
                    var shopConfirm = window.confirm("The fight is over. Visit the shop before the next round?");
                    // if yes, open the shop
                    if (shopConfirm){
                        shop();
                    }    
                }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // at this point, the player is either out of health or out of enemies
    endGame();
    // play again!
    startGame();
}
// end game function
var endGame = function(){
    // if player is alive, they win
    if (playerInfo.health > 0){
        window.alert("You survived the game! You now have a score of " + playerInfo.money);
    }
    // if player is not alive ... well ...
    else{
        window.alert("You've lost your robot in battle!");
    }
    // invite players to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
// shop function
var shop = function(){
    var shopOptionPrompt = window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?\nPlease enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. ");
    // use switch to fulfill request
    switch (shopOptionPrompt){
        case "REFILL":
        case "refill": 
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            break;
        default:
            window.alert("You did not make a valid selection.\nPlease enter 'REFILL', 'UPGRADE', or 'LEAVE'.");
            shop();
            break;   
    }
}
// start the game when the page loads
startGame();