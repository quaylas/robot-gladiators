// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Welcome players
window.alert("Welcome to Robot Gladiators!");
// Initialize player stats, including name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// Initialize enemy array and stats
var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// Fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0){
        // alert players that they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // If player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT"){
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
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                // subtract 2 from playerMoney
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question again by re-runnning fight()
            else {
                fight ();
            }
        }    
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}
for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}