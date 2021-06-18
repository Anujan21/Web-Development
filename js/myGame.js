//this script is used to create a canvas game to supplement article on the same page

//https://www.youtube.com/watch?v=XmqAPQsc1n4
//used above source as guidance to help get some parts of the code working
//Accessed May 5, 2020


//intialize variables needed
var ship = { //start in the middle of the canvas
    top: 185,
    left: 0,
}
var missiles = [];
var asteroids = [];
var x = 0;
var continuegame = false;
var missilelimit = 20; //total missiles allowed
var missilecounter = 0; 
var missilesremaining = missilelimit-missilecounter;

document.onkeydown = function(key) { //to identify what key is pressed
    if(continuegame){
        if ((key.keyCode === 38) || (key.keyCode ===87)) { //use Up arrow key or W to move up
            if (ship.top>15){
                ship.top = ship.top - 7; //move up 7 pixels
                moveShip();
            }
        }
        else if ((key.keyCode === 40)||(key.keyCode ===83)) { //use down arrow key or S to move down
            if (ship.top<355){
                ship.top = ship.top + 7;
                moveShip(); //move down 7 pixels
            }
        }
        else if(key.keyCode === 32) { //spacebar to shoot
            if(missilecounter< missilelimit){ //only if there are missiles remaining
                missiles.push({ //to show where the missile shall be launched from, push to missiles array
                    left: ship.left + 60,
                    top: ship.top + 10
                })
                drawMissiles(); //activiate function to draw missile and change the counters accordingly
                missilecounter+=1;
                missilesremaining = missilelimit-missilecounter;
                document.getElementById("missilecount").innerHTML = "MISSILES: " + missilesremaining;
            }
        }
    }
}

function moveShip(){ //to move the ship
    document.getElementById('ship').style.top = ship.top + "px";
}

function drawMissiles(){ //to redraw the missiles
    document.getElementById('missiles').innerHTML = "";
    for(var missile = 0; missile < missiles.length;missile++){ //new position of each missile
        document.getElementById("missiles").innerHTML += "<div class = 'missile' style = 'left: " + missiles[missile].left 
        + "px; top: " + missiles[missile].top + "px;'></div>";
    }
}

function moveMissiles(){ //will actually move the missiles by changing margin
    for(var missile = 0; missile < missiles.length;missile++){
        missiles[missile].left += 15;
        if (missiles[missile].left >575){
            missiles.splice(missile,1);
        }
    }
}

function asteroidGenerator(){ //using random number generator, the height position of asteroids is determined and a new asteroid is pushed onto an array
    let summon = Math.floor((Math.random() * 1000) + 1);
    if (summon > 850){ //arbitrarily chosen to limit the asteroids generated
        let asteroidheight = Math.floor((Math.random() * 325) + 25);
        asteroids.push({
            left: 500,
            top: asteroidheight
        })
    }
}

function drawAsteroids(){ //to draw each asteroid (similar to drawMissiles)
    document.getElementById('asteroids').innerHTML = "";
    for(var asteroid = 0; asteroid < asteroids.length;asteroid++){
        document.getElementById("asteroids").innerHTML += "<div class = 'asteroid' style = 'left: " + asteroids[asteroid].left 
        + "px; top: " + asteroids[asteroid].top + "px;'></div>";
    }
}

function moveAsteroids(){ //will actually move the asteroids by changing margin
    for(var asteroid = 0; asteroid < asteroids.length;asteroid++){
        asteroids[asteroid].left -= 10;
        if (asteroids[asteroid].left < 5){
            asteroids.splice(asteroid,1);
        }
    }  
}

function collisionDetection(){ //this is to detect collision between asteroid and missile
    for(var asteroid = 0; asteroid < asteroids.length;asteroid++){ //checks each missile and asteroid
        for(var missile = 0; missile < missiles.length;missile++){
            if(
                (missiles[missile].top >= asteroids[asteroid].top - 10) && //due to different sizes in pixels, these are necesarry to capture all possible hit points
                (missiles[missile].top  <= asteroids[asteroid].top + 35) &&
                (missiles[missile].left + 20 >= asteroids[asteroid].left ) &&
                (missiles[missile].left <= asteroids[asteroid].left )
                ){
                    asteroids.splice(asteroid, 1); //if they "hit", remove both asteroid and missile
                    missiles.splice(missile,1);
                }
        }
    }
}

function gameOver(){ //to know when the game is over, which is when an asteroid collides with the ship
    for(var asteroid = 0; asteroid < asteroids.length;asteroid++){
        if(
            (ship.top >= asteroids[asteroid].top - 27) && //same logic as collisionDetection() above
            (ship.top <= asteroids[asteroid].top + 35) &&
            (ship.left + 45 >= asteroids[asteroid].left ) &&
            (ship.left <= asteroids[asteroid].left )
        ){
            continuegame = false; //to stop the game
        }
    }
}

function highScore(){ //to continuously show the score on top right of the canvas
    document.getElementById("score").innerHTML = "SCORE: " + x;
    console.log(score);
}

//https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
//following 5 lines of code taken from above link
//accessed April 30, 2020
window.addEventListener("keydown", function(e) { //used to prevent the page from moving when pressing arrow keys
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }}, false);

function intialize(){ //to intialize variables back to original state in case game is rerun
    ship = {
        top: 185,
        left: 0,
    }
    moveShip();
    missilecounter = 0;
    missiles = [];
    asteroids = [];
    x = 0;
    continuegame = true;
    missilesremaining = missilelimit-missilecounter;
    document.getElementById("missilecount").innerHTML = "MISSILES: " + missilesremaining;
}

function gameLoop(){ //gameloop used to repeat sequence over and over again
    if(continuegame){
        x+=1;
        setTimeout(gameLoop,100); //timedelay for proper speed
        moveMissiles();
        drawMissiles();
        moveAsteroids();
        drawAsteroids();
        collisionDetection();
        gameOver();
        highScore();
        asteroidGenerator();
    }
    else{ //restart game option is shown if game ends
        document.getElementById("startGame").style.display = "block";
        document.getElementById("restart").innerHTML = "RESTART GAME";
    }
}

function startGame(){ //function to begin the game, and hide the "start game" button
    var hide = document.getElementById("startGame");
    hide.style.display = "none";
    intialize();
    document.getElementById("missilecount").innerHTML = "MISSILES: " + missilesremaining;
    gameLoop();
}


