var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:290},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:1400,y:299},
                {type: 'sawblade',x:2400,y:400},
                {type: 'sawblade',x:1000,y:groundY},
                {type: 'sawblade',x:1800,y:groundY},
                {type: 'sawblade',x:100,y:200},
                {type: 'enemy',x:2000,y:groundY-400},
                {type: 'reward',x:400,y:groundY-400},
                {type: 'reward',x:2600,y:groundY-400}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;


//function createSawBlade(x,y) {
//    var obstacleImage = draw.bitmap('img/sawblade.png');
//
//var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
//myObstacle.addChild(obstacleImage);
//myObstacle.x = x;
//myObstacle.y = y;
//game.addGameItem(myObstacle);    
//
//}  
////createSawBlade(185,450);
////createSawBlade(100,370);
////createSawBlade(90,400);
//for ( var i = 0; i < levelData.gameItems.length; i++) {
//    var gameItem = levelData.gameItems[i];
//    createSawBlade(gameItem.x, gameItem.y);
//    // Create a sawblade using the .x and .y property of each game item object
//}

        // TODO 10: Roll Your Own Obstacles

    function createBox(x,y) {
            var box = game.createObstacle(hitZoneSize,damageFromObstacle);
                box.x = x;
                box.y = y;
                game.addGameItem(box);
                box.velocityX = -3;
            var boxImage = draw.bitmap('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c9935a-b5fd-49e2-befa-a3c1bea3ccba/dd31e94-858c9432-39a1-4482-bc99-9ec6671d082d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyYzk5MzVhLWI1ZmQtNDllMi1iZWZhLWEzYzFiZWEzY2NiYVwvZGQzMWU5NC04NThjOTQzMi0zOWExLTQ0ODItYmM5OS05ZWM2NjcxZDA4MmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sl5If3zbx2BfwADfCPFbYl6tPSkXI26uErQMKiTApu4');   
                boxImage.scaleX = 0.7;
                boxImage.scaleY = 0.7;
                box.addChild(boxImage);
                boxImage.x = -140;
                boxImage.y = -140;
    }
            function createEnemy(x, y){
                var enemy =  game.createGameItem('enemy',200);
                enemy.x = x;
                enemy.y = groundY - y;
                game.addGameItem(enemy);
                enemy.velocityX = -2;
                enemy.onPlayerCollision = function() {
                    console.log('The enemy has hit Halle');
                    enemy.onPlayerCollision = game.changeIntegrity(-9999999999999);    
                };
                enemy.onProjectileCollision = function() {
                    console.log("Halle has hit the enemy");
                    enemy.onProjectileCollision = game.increaseScore(2000);
                    enemy.shrink();
                };
                var redSquare = draw.bitmap('http://www.pngall.com/wp-content/uploads/2016/03/Dragon-PNG.png');
                redSquare.x = -250;
                redSquare.y = -375;
                enemy.addChild(redSquare);
        }
             function createReward(x, y){
           var reward = game.createGameItem('reward', 25);
           reward.x = x;
           reward.y = groundY - y;
           game.addGameItem(reward);
           reward.velocityX = -2;
           var rewardImg = draw.bitmap('https://i.pinimg.com/originals/55/ab/ea/55abeab434145deb4277ff1e961a4427.png');
           rewardImg.scaleX = 0.1;
           rewardImg.scaleY = 0.1;
           reward.onPlayerCollision = function() {
               console.log('Halle has collected a reward');
               reward.onPlayerCollision = game.increaseScore(3500);
               reward.fadeOut();
           };
           
           reward.addChild(rewardImg);
           rewardImg.x = -20;
           rewardImg.y = -25;
           
       }
           
            
            
            
            
            
            
            for (var j = 0; j < levelData.gameItems.length; j++){
            var gameItem = levelData.gameItems[j];
            if (levelData.gameItems[j].type === 'sawblade'){
            createBox(gameItem.x, gameItem.y);
            }
            if (levelData.gameItems[j].type === 'enemy'){
            createEnemy(gameItem.x, gameItem.y);
            }
            if (levelData.gameItems[j].type === 'reward'){
            createReward(gameItem.x, gameItem.y);
            }
       }
        
        
        
        
    };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}


