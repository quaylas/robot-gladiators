// Fight function
function fight () {
    window.alert("The fight has begun!");
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract 'playerAttack' from 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;
    // Log a message to the console to confirm the operation
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract 'enemyAttack' from 'playerHealth'
    playerHealth = playerHealth - enemyAttack;
    // Log a message to the console to confirm the operation
    console.log(enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
fight();