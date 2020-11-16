// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
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
    while(enemyHealth > 0 && playerHealth > 0){
        // alert players that they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // If player choses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                // subtract 10 from playerMoney
                playerMoney = playerMoney - 10;
                console.log("playerMoney " + playerMoney);
                break;
            }
            // if no (false), ask question again by re-runnning fight()
            else {
                fight ();
            }
        }
        // Subtract 'playerAttack' from 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;
        // Log a message to the console to confirm the operation
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
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
            break;
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
//function to start a new game
var startGame = function(){
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // Fight all enemy robots
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
                // if we're not at the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1){
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
    if (playerHealth > 0){
        window.alert("You survived the game! You now have a score of " + playerMoney);
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 money.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {   
                window.alert("Upgrading player's attack by 6 for 7 money.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
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