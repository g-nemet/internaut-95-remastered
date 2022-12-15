// CANVAS SETUP
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 800;
// GLOBAL RESETABLE VARIABLES
// Mouse Coords and States
let GameTime = 0;
let Bullet;
let mouseX, mouseY;
let gameState = "title";
let levelState;
let WeaponState = 1;
let weaponType = "close";
// Button Pressed Variables
let mouseIsPressed = false;
let spaceIsPressed = false;
// Projectile Speeds
let closeProjSpeed = 34;
// Declare Objects
let myComputer;
let theInternet;
let recycleBin;
let inbox;
let networkNeighborhood;
let theMicrosoftNetwork;
let documents;
let myBriefcase;
let startButton;
let startButton2;
let lastTime = 0;
var enemyHit = false;
// Declare enemies
let windowEnemy;
let bigHandEnemy;
// Arrays
let enemyArray = [];
let projectileArray = [];
let Mines = [];
// wavestates
let waveState = 0;
// Reset Function To Be Called On Game Over
reset();
let highScore = 0;
let score = 0;
// IMAGE ELEMENT VARIABLES
// Cursors
let arrowCursor = document.createElement("img");
arrowCursor.src = "images/cursor-arrow.png";
let handCursor = document.createElement("img");
handCursor.src = "images/cursor-hand-95.png";
// Application Icons
let documentsImg = document.createElement("img");
documentsImg.src = "images/documents.png";
let inboxImg = document.createElement("img");
inboxImg.src = "images/inbox.png";
let myBriefcaseImg = document.createElement("img");
myBriefcaseImg.src = "images/my-briefcase.png";
let myComputerImg = document.createElement("img");
myComputerImg.src = "images/my-computer.png";
let networkNeighborhoodImg = document.createElement("img");
networkNeighborhoodImg.src = "images/network-neighborhood.png";
let recycleBinEmptyImg = document.createElement("img");
recycleBinEmptyImg.src = "images/recycle-bin-empty.png";
let recycleBinFullImg = document.createElement("img");
recycleBinFullImg.src = "images/recycle-bin-full.png";
let theInternetImg = document.createElement("img");
theInternetImg.src = "images/the-internet.png";
let theMicrosoftNetworkImg = document.createElement("img");
theMicrosoftNetworkImg.src = "images/the-microsoft-network.png";
// Taskbar, Tabs & Backgrounds
let notepadTabImg = document.createElement("img");
notepadTabImg.src = "images/notepad-tab.png";
let myComputerTabImg = document.createElement("img");
myComputerTabImg.src = "images/my-computer-tab.png";
let theInternetTabImg = document.createElement("img");
theInternetTabImg.src = "images/the-internet-tab.png";
let recycleBinTabImg = document.createElement("img");
recycleBinTabImg.src = "images/recycle-bin-tab.png";
let inboxTabImg = document.createElement("img");
inboxTabImg.src = "images/inbox-tab.png";
let networkNeighborhoodTabImg = document.createElement("img");
networkNeighborhoodTabImg.src = "images/network-neighborhood-tab.png";
let theMicrosoftNetworkTabImg = document.createElement("img");
theMicrosoftNetworkTabImg.src = "images/the-microsoft-network-tab.png";
let documentsTabImg = document.createElement("img");
documentsTabImg.src = "images/documents-tab.png";
let myBriefcaseTabImg = document.createElement("img");
myBriefcaseTabImg.src = "images/my-briefcase-tab.png";
let taskbarImg = document.createElement("img");
taskbarImg.src = "images/taskbar.png";
let deathScreenImg = document.createElement("img");
deathScreenImg.src = "images/death-screen-95.png";
let startButtonImg = document.createElement("img");
startButtonImg.src = "images/start-button.png";
// Projectiles & Mines
let closeProjectileImg = document.createElement("img");
closeProjectileImg.src = "images/close-projectile.png";
let errorProjectileImg = document.createElement("img");
errorProjectileImg.src = "images/error-projectile-new.png";
let restrictProjectileImg = document.createElement("img");
restrictProjectileImg.src = "images/restrict-projectile.png";
let mineImg = document.createElement("img");
mineImg.src = "images/mine.png";
let redMineImg = document.createElement("img");
redMineImg.src = "images/redmine.png";
let explosionImg = document.createElement("img");
explosionImg.src = "images/explosion-pixel.png";
// Weapon Icons
let closeIconImg = document.createElement("img");
closeIconImg.src = "images/close-icon.png";
let errorIconImg = document.createElement("img");
errorIconImg.src = "images/error-icon.png";
let restrictIconImg = document.createElement("img");
restrictIconImg.src = "images/restrict-icon.png";
let mineIconImg = document.createElement("img");
mineIconImg.src = "images/mine-icon.png";
// Enemies
let windowEnemyImg = document.createElement("img");
windowEnemyImg.src = "images/windows-enemy.png";
let bigHandEnemyImg = document.createElement("img");
bigHandEnemyImg.src = "images/big-hand.png";
let iceOrbImg = document.createElement("img");
iceOrbImg.src = "images/IceballTransparent.png";
let plugEnemyImg = document.createElement("img");
plugEnemyImg.src = "images/plug-zap.png";
let boltImg = document.createElement("img");
boltImg.src = "images/bolt.png";
// Sounds
let burn = document.createElement("audio");
burn.src = "sounds/CMP1SNG_00009.wav";

// DRAW CURRENT GAMESTATE
window.addEventListener("load", draw);
function draw() {
	console.log(GameTime)
	if (gameState === "title") {
		drawTitle();
	} else if (gameState === "start") {
		drawStart();
	} else if (gameState === "game") {
		drawGame();
	} else if (gameState === "gameOver") {
		drawGameOver();
	}
	requestAnimationFrame(draw);
}

// TITLE GAMESTATE
function drawTitle() {
	// Title Branches
	drawTitleComponents();
	drawCursor();
	// Big Start Button Functionality
	if (cursor.x + cursor.w > startButton.x && cursor.y + cursor.h > startButton.y && cursor.x < startButton.x + startButton.w && cursor.y < startButton.y + startButton.h && mouseIsPressed) {
		gameState = "start";
	}
}

// Game Timer
GameTimeAdd = () => {
	GameTime += 1
}
setInterval(GameTimeAdd, 1000);

// TITLE COMPONENTS
function drawTitleComponents() {
	// Draw Background
	ctx.fillStyle = '#026160';
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	// Draw Title and Tab
	ctx.drawImage(notepadTabImg, 250, 100, 688, 417);
	ctx.font = "50px VT323";
	ctx.fillStyle = "black";
	ctx.fillText("INTERNAUT 95", 480, 190);
	ctx.fillText("REMASTERED", 500, 230);
	ctx.font = "20px VT323";
	ctx.fillText("A Game By Gabriel Nemet and Jeffary J. Vandale_", 420, 350);
	ctx.font = "35px VT323";
	ctx.fillText("Press START to begin", 460, 300);
	ctx.drawImage(startButtonImg, startButton.x, startButton.y, startButton.w, startButton.h);
}

// START GAMESTATE
function drawStart() {
	// Start Branches
	drawStartComponents();
	drawCursor();
	// Level Icon Functionality
	if (cursor.x + cursor.w > myComputer.x && cursor.y + cursor.h > myComputer.y && cursor.x < myComputer.x + myComputer.w && cursor.y < myComputer.y + myComputer.h && mouseIsPressed) {
		gameState = "game";
		levelState = "myComputer";
		startEnemySpawn();
	} else if (cursor.x + cursor.w > theInternet.x && cursor.y + cursor.h > theInternet.y && cursor.x < theInternet.x + theInternet.w && cursor.y < theInternet.y + theInternet.h && mouseIsPressed) {
		gameState = "game";
		levelState = "theInternet";
	} else if (cursor.x + cursor.w > recycleBin.x && cursor.y + cursor.h > recycleBin.y && cursor.x < recycleBin.x + recycleBin.w && cursor.y < recycleBin.y + recycleBin.h && mouseIsPressed) {
		gameState = "game";
		levelState = "recycleBin";
	} else if (cursor.x + cursor.w > inbox.x && cursor.y + cursor.h > inbox.y && cursor.x < inbox.x + inbox.w && cursor.y < inbox.y + inbox.h && mouseIsPressed) {
		gameState = "game";
		levelState = "inbox";
	} else if (cursor.x + cursor.w > networkNeighborhood.x && cursor.y + cursor.h > networkNeighborhood.y && cursor.x < networkNeighborhood.x + networkNeighborhood.w && cursor.y < networkNeighborhood.y + networkNeighborhood.h && mouseIsPressed) {
		gameState = "game";
		levelState = "networkNeighborhood";
	} else if (cursor.x + cursor.w > theMicrosoftNetwork.x && cursor.y + cursor.h > theMicrosoftNetwork.y && cursor.x < theMicrosoftNetwork.x + theMicrosoftNetwork.w && cursor.y < theMicrosoftNetwork.y + theMicrosoftNetwork.h && mouseIsPressed) {
		gameState = "game";
		levelState = "theMicrosoftNetwork";
	} else if (cursor.x + cursor.w > documents.x && cursor.y + cursor.h > documents.y && cursor.x < documents.x + documents.w && cursor.y < documents.y + documents.h && mouseIsPressed) {
		gameState = "game";
		levelState = "documents";
	} else if (cursor.x + cursor.w > myBriefcase.x && cursor.y + cursor.h > myBriefcase.y && cursor.x < myBriefcase.x + myBriefcase.w && cursor.y < myBriefcase.y + myBriefcase.h && mouseIsPressed) {
		gameState = "game";
		levelState = "myBriefcase";
	}

}

// START COMPONENTS
function drawStartComponents() {
	// Draw Background
	ctx.fillStyle = '#026160';
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	// Draw Taskbar
	ctx.drawImage(taskbarImg, 0, 747, 1200, 53);
	ctx.drawImage(startButtonImg, startButton2.x, startButton2.y, startButton2.w, startButton2.h);
	// Draw Application/Level Icons and Names
	ctx.font = "13px VT323";
	ctx.fillStyle = "white";
	ctx.drawImage(myComputerImg, myComputer.x, myComputer.y, myComputer.w, myComputer.h);
	ctx.fillText("My Computer", 15, 67);
	ctx.drawImage(recycleBinEmptyImg, recycleBin.x, recycleBin.y, recycleBin.w, recycleBin.h);
	ctx.fillText("Recycle Bin", 15, 132);
	ctx.drawImage(networkNeighborhoodImg, networkNeighborhood.x, networkNeighborhood.y, networkNeighborhood.w, networkNeighborhood.h);
	ctx.fillText("Network", 25, 188);
	ctx.fillText("Neighborhood", 15, 200);
	ctx.drawImage(documentsImg, documents.x, documents.y, documents.w, documents.h);
	ctx.fillText("Documents", 22, 250);
	ctx.drawImage(myBriefcaseImg, myBriefcase.x, myBriefcase.y, myBriefcase.w, myBriefcase.h);
	ctx.fillText("My Briefcase", 15, 303);
	ctx.drawImage(theInternetImg, theInternet.x, theInternet.y, theInternet.w, theInternet.h);
	ctx.fillText("The Internet", 80, 67);
	ctx.drawImage(inboxImg, inbox.x, inbox.y, inbox.w, inbox.h);
	ctx.fillText("Inbox", 95, 135);
	ctx.drawImage(theMicrosoftNetworkImg, theMicrosoftNetwork.x, theMicrosoftNetwork.y, theMicrosoftNetwork.w, theMicrosoftNetwork.h);
	ctx.fillText("The", 100, 197);
	ctx.fillText("Microsoft", 85, 209);
	ctx.fillText("Network", 90, 221);
}

// GAME GAMESTATE
function drawGame() {
	// Game Branches
	drawGameComponents();
	drawCursor();
	drawProjectiles();
	triggerProjectileCreation();
	startEnemySpawn()
	renderEnemies();
	bulletVsEnemy();
	daSplosion()
	HighScore();
	FrozenEnemy()

	// Taskbar Start Button Functionality
	if (cursor1.x + cursor1.w > startButton2.x && cursor1.y + cursor1.h > startButton2.y && cursor1.x < startButton2.x + startButton2.w && cursor1.y < startButton2.y + startButton2.h && mouseIsPressed) {
		reset();
		gameState = 'start';
	}
	// score is always 0 or positive
	if (score < 0) {
		score === 0;
	}
}

// GAME COMPONENTS
function drawGameComponents() {
	// Draw Background
	ctx.fillStyle = '#026160';
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	// Draw Taskbar
	ctx.drawImage(taskbarImg, 0, 747, 1200, 53);
	ctx.drawImage(startButtonImg, startButton2.x, startButton2.y, startButton2.w, startButton2.h);
	// Draw Weapon Icons
	ctx.drawImage(closeIconImg, 180, 760, 32, 32);
	ctx.drawImage(errorIconImg, 217, 760, 32, 32);
	ctx.drawImage(restrictIconImg, 254, 760, 32, 32);
	ctx.drawImage(mineIconImg, 291, 760, 32, 32);
	// draw score and highscore
	ctx.font = "30px VT323";
	ctx.fillStyle = "black";
	ctx.fillText(`Score: ${score}`, 360, 783);
	ctx.fillText(`Highscore: ${highScore}`, 550, 783);

	if (weaponType === "close") {
		// blue close
		ctx.strokeStyle = "blue";
		ctx.strokeRect(179, 759.5, 33, 33);
	} else if (weaponType === "error") {
		// blue error
		ctx.strokeStyle = "blue";
		ctx.strokeRect(216, 759.5, 33, 33);
	} else if (weaponType === "restrict") {
		// blue restrict
		ctx.strokeStyle = "blue";
		ctx.strokeRect(253, 759.5, 33, 33);
	} else if (weaponType === "mine") {
		// blue mine
		ctx.strokeStyle = "blue";
		ctx.strokeRect(290, 759.5, 33, 33);
	}

	if (levelState === "myComputer") {
		ctx.drawImage(myComputerTabImg, 467.5, 25, 265, 219);
	} else if (levelState === "theInternet") {
		ctx.drawImage(theInternetTabImg, 350, 25, 480, 321);
	} else if (levelState === "recycleBin") {
		ctx.drawImage(recycleBinTabImg, 390, 25, 210, 201);
	} else if (levelState === "inbox") {
		ctx.drawImage(inboxTabImg, 395.5, 25, 509, 262);
	} else if (levelState === "networkNeighborhood") {
		ctx.drawImage(networkNeighborhoodTabImg, 184, 25, 816, 641);
	} else if (levelState === "theMicrosoftNetwork") {
		ctx.drawImage(theMicrosoftNetworkTabImg, 99, 25, 501, 301);
	} else if (levelState === "documents") {
		ctx.drawImage(documentsTabImg, 342, 25, 404, 413);
	} else if (levelState === "myBriefcase") {
		ctx.drawImage(myBriefcaseTabImg, 0, 25, 817, 251);
	}
}

// PROJECTILE AND ENEMY INTERACTION
function bulletVsEnemy() {
	// Vars For Projectiles And Enemies
	let Px;
	let Py;
	let Pw;
	let Ph;
	let PI;
	let PT;

	let Mx;
	let My;
	let Mw;
	let Mh;
	let MI;

	// Assign values
	for (C = 0; C < projectileArray.length; C++) {
		Px = projectileArray[C].x;
		Py = projectileArray[C].y;
		Pw = projectileArray[C].w;
		Ph = projectileArray[C].h;
		PI = C
		PT = projectileArray[C].t;

		for (let i = 0; i < enemyArray.length; i++) {
			Mx = enemyArray[i].x;
			My = enemyArray[i].y;
			Mw = enemyArray[i].w;
			Mh = enemyArray[i].h;
			MI = i
			// enemy hit var
			if (Mx + Mw > Px && My + Mh > Py && Mx < Px + Pw && My < Py + Ph) {
				enemyHit = true

			}

			for (let i = 0; i < 480; i++)
				if (Mx + Mw > Px && My + Mh > Py && Mx < Px + Pw && My < Py + Ph && weaponType === "restrict") {
					enemyArray[MI].fro = true;
				}
			// normal proj
			if (Mx + Mw > Px && My + Mh > Py && Mx < Px + Pw && My < Py + Ph && weaponType === "close") {
				enemyArray[MI].hp--;

				projectileArray.splice(PI, 1);
			}

			if (enemyArray[MI].hp <= 0) {
				score += enemyArray[MI].pointValue;

			}
		}
	}
}





function FrozenEnemy() {
	// Loops through THE enemy array and changes their movement speed to 0 and draws cool imag
	for (let i = 0; i < enemyArray.length; i++) {
		if (enemyArray[i].fro === true) {
			enemyArray[i].moveY = 0;
			enemyArray[i].moveX = 0;
			ctx.drawImage(iceOrbImg, enemyArray[i].x - 5, enemyArray[i].y - 5, enemyArray[i].w + 5, enemyArray[i].h + 5);
			if (GameTime % 2 === 0) {
				enemyArray[i].hp -= 5;
			}
		}
	}
}

// The HARDEST FUNCTION TO MAKE
function daSplosion() {
	// Defines variables which get passed to the for loops which pass them on to more for loops 
	
	// mine
	let Px;
	let Py;
	let Pw;
	let Ph;
	let PI;
	let PT;
	// enemy
	let Mx;
	let My;
	let Mw;
	let Mh;
	let MI;

	// draws mines and starts the forloopception
	for (let M = 0; M < Mines.length; M++) {

		Px = Mines[M].x;
		Py = Mines[M].y;
		Pw = Mines[M].w;
		Ph = Mines[M].h;
		MI = M;
		PT = Mines[M].t;
		ctx.drawImage(Mines[M].img, Mines[M].x, Mines[M].y, Mines[M].w, Mines[M].h);

		// makes explosion object
		let splosion = {
			x: Px - 76,
			y: Py - 64,
			w: 152.166666667,
			h: 128.166666667,
		}

		// makes the mine red for every even second that passes
		if (GameTime % 2 === 0) {
			Mines[M].img = redMineImg;
		} else {
			Mines[M].img = mineImg;
		}

		// console.log(Mines[M].f, "I AM LITERALLY 'SPLODING RIGHT NOW");
		if (GameTime > Mines[M].f) {


			ctx.drawImage(explosionImg, splosion.x, splosion.y, splosion.w, splosion.h);
			for (let i = 0; i < Mines.length; i++) {
				ctx.drawImage(explosionImg, splosion.x, splosion.y, splosion.w, splosion.h);
				if (GameTime <= Mines[i].f + 5) {
					for (let i = 0; i < enemyArray.length; i++) {
						Mx = enemyArray[i].x;
						My = enemyArray[i].y;
						Mw = enemyArray[i].w;
						Mh = enemyArray[i].h;
						MI = i


						if (Mx + Mw > splosion.x && My + Mh > splosion.y && Mx < splosion.x + splosion.w && My < splosion.y
							+ splosion.h) {


							enemyArray[MI].hp -= 5;

						}

						if (enemyArray[MI].hp <= 0) {
							score += enemyArray[MI].pointValue;
						}

					}
				}
			}
			if (GameTime = Mines[M].f + 8) {
				Mines.splice(MI, 1);
			}
		}
	}
}
// constantly update highscore
function HighScore() {
	if (score >= highScore) {
		highScore = score
	}
}
// Draws the Enemies on screen
function renderEnemies() {
	if (gameState === "game") {

		for (i = 0; i < enemyArray.length; i++) {

			ctx.drawImage(enemyArray[i].img, enemyArray[i].x, enemyArray[i].y, enemyArray[i].w, enemyArray[i].h);

			if (enemyArray[i].x + enemyArray[i].w > cursor1.x + 10 && enemyArray[i].y +
				enemyArray[i].h > cursor1.y - 10 && enemyArray[i].x < cursor1.x - 10 + cursor1.w + 10
				&& enemyArray[i].y < cursor1.y - 10 + cursor1.h + 10) {
				gameState = "gameOver";
			}

			if (cursor1.y < 721) {
				enemyArray[i].y += enemyArray[i].moveY;
				enemyArray[i].x += enemyArray[i].moveX;
			}

			if (enemyArray[i].x + enemyArray[i].w >= cnv.width) {
				enemyArray[i].hp = 0;
			}

			if (enemyArray[i].y + enemyArray[i].h >= 747 && enemyArray[i].img !== boltImg) {
				enemyArray[i].hp = 0;
			}
			if (enemyArray[i].x > 16 && enemyArray[i].img === plugEnemyImg) {
				enemyArray[i].moveX = 0;
			}

			// bolt ricochet action
			if (enemyArray[i].img === boltImg && enemyArray[i].y + enemyArray[i].h >= 747) {
				enemyArray[i].moveX = 8;
				enemyArray[i].moveY = -8;
			}
			if (enemyArray[i].img === boltImg && enemyArray[i].x + enemyArray[i].w >= cnv.width) {
				enemyArray[i].moveX = -8;
				enemyArray[i].moveY = -8;
			}
			if (enemyArray[i].img === boltImg && enemyArray[i].y <= 0) {
				enemyArray[i].moveX = -8;
				enemyArray[i].moveY = 8;
			}
			if (enemyArray[i].img === boltImg && enemyArray[i].x <= 0) {
				enemyArray[i].moveX = 8;
				enemyArray[i].moveY = 8;
			}

      // splice enemy after death
			if (enemyArray[i].hp <= 0) {
				enemyArray.splice(i, 1);

			}
		}

		if (cursor1.y + cursor1.h > 747) {
			ctx.fillStyle = "rgba(220, 220, 220, 0.3)";
			ctx.fillRect(0, 0, cnv.width, 747);
			ctx.fillStyle = "white"
			ctx.fillRect(550, 180, 50, 150);
			ctx.fillRect(620, 180, 50, 150);
			projectileArray = [];
		}
	}
}
	// Allows you to shoot stuff (and spam as fast as you can click)
	function triggerProjectileCreation() {
		if (Bullet === 0 && mouseIsPressed && cursor1.y < 741.5) {
			Bullet = 1;
			CreateProjectile();
		} else if (mouseIsPressed === false) {
			Bullet = 0
		}
	}

	// constructor for bullets you fire at whatever you want
	function CreateProjectile() {

		if (weaponType === "close") {
			let closeProj = {
				t: 'close',
				x: cursor1.x + 4,
				y: cursor1.y - 15,
				h: 16,
				w: 16,
				s: 10,
				img: closeProjectileImg
			};

			projectileArray.push(closeProj);
		} else if (weaponType === "error" && score >= 3) {
			let errorProj = {
				t: 'error',
				x: cursor1.x + 4,
				y: cursor1.y - 15,
				h: 16,
				w: 16,
				s: 7,
				img: errorProjectileImg
			};

			score -= 3
			errorShoot(errorProj)
		} else if (weaponType === "mine" && score >= 15) {
			let Fuse = GameTime + 5;

			let mineProj = {
				t: 'mine',
				x: cursor1.x + 4,
				y: cursor1.y - 15,
				h: 32,
				w: 32,
				s: 0,
				f: Fuse,
				img: mineImg
			};

			score -= 15;
			Mines.push(mineProj);
		} else if (weaponType === "restrict" && score >= 4) {
			let Time = GameTime + 10;

			let restrictProj = {
				t: 'restrict',
				x: cursor1.x + 2,
				y: cursor1.y - 15,
				h: 16,
				w: 16,
				s: 20,
				t: Time,
				img: restrictProjectileImg
			};

			score -= 4
			projectileArray.push(restrictProj);
		}


	}
// error proj function
	function errorShoot(bullet) {
		let A = bullet.x - 10

		for (i = 0; i < 5; i++) {
			bullet.A = A
			projectileArray.push(bullet);

			A += 10
		}
	}

	// Draws da bullets so ya can actually see what you're hitting 
	function drawProjectiles() {
		for (let i = 0; i < projectileArray.length; i++) {

			if (projectileArray[i].x < 0) {
				projectileArray.splice(i, 1);
			}

			ctx.drawImage(projectileArray[i].img, projectileArray[i].x, projectileArray[i].y,
				projectileArray[i].w, projectileArray[i].h);
			projectileArray[i].y -= projectileArray[i].s
			if (projectileArray[i].y < 0) {
				projectileArray.splice(i, 1);
			}
		}
	}

	// GAME OVER GAMESTATE
	let A = 0;
	let adfg = 0;
	A = Math.floor(Math.random() * 10 + 1);
	function drawGameOver() {
		// Draw Death Screen

		ctx.fillStyle = "#1C00B0";
		ctx.fillRect(0, 0, cnv.width, cnv.height);
		ctx.fillStyle = "#A8A8A8";
		ctx.fillRect(500, 100, 200, 55);
		ctx.font = "60px VT323";
		ctx.fillStyle = "#1C00B0";
		ctx.fillText("WINDOWS", 515, 145);
		ctx.font = "50px VT323";
		ctx.fillStyle = "white";
		if (adfg = 1) {
			flavourText(A);
		} else {
			flavourText(A);
			adfg = 1
		}

		ctx.fillText("Consider GETTING GOOD_", 385, 280);
		ctx.font = "30px VT323";
		ctx.fillStyle = "white";
		ctx.fillText("PRESS R TO RETURN TO TITLE SCREEN", 410, 400);
		ctx.fillText("OR", 589, 440);
		ctx.fillText("PRESS SPACE TO RETURN TO DESKTOP", 419, 480);
	}

	function flavourText(X) {

		if (X === 1) {
			ctx.fillText("ERROR A Fatal SKILL ISSUE Occured", 271, 230);
		} else if (X === 2) {
			ctx.fillText("IT WAS A MISINPUT A MISINPUT, CALM DOWN YOU CALM DOWN IT WAS A MISINPUT", 30, 230);
		} else if (X === 3) {
			ctx.fillText("", 271, 230);
		} else if (X === 4) {
			ctx.fillText("ERROR Ya gotta be kidding Me MAN!", 271, 230);
		} else if (X === 5) {
			ctx.fillText("ERROR YOU >= Bad", 271, 230);
		} else if (X === 6) {
			ctx.fillText(`Can't Believe you only got ${score} Points, I got ${score + 1}`, 230, 230);
		} else if (X === 7) {
			ctx.fillText("ERROR ERROR ERROR ERROR ERROR ERROR ERRROR ERRRRoRRRRRR", 271, 230);
		} else if (X === 8) {
			ctx.fillText("ERROR You < EPIC", 271, 230);
		} else if (X === 9) {
			ctx.fillText("ERROR Missing Token (skill)", 271, 230);
		} else {
			ctx.fillText("ERROR Cannot Find Properties of Git Gud", 271, 230);
		}

	}

	// Draw Either Cursor Based on Game State
	function drawCursor() {
		if (gameState === "start" || gameState === "title") {
			ctx.drawImage(arrowCursor, cursor.x, cursor.y, cursor.w, cursor.h);
			// arrow cursor movement
			cursor.x = mouseX - cursor.w / 2;
			cursor.y = mouseY - cursor.h / 10;
			// arrow cursor collision
			if (cursor.x < 0) {
				cursor.x = 0;
			} else if (cursor.x + cursor.w > cnv.width) {
				cursor.x = cnv.width - cursor.w;
			} else if (cursor.y < 0) {
				cursor.y = 0;
			} else if (cursor.y + cursor.h > cnv.height) {
				cursor.y = cnv.height - cursor.h;
			}
		} else if (gameState === "game") {
			ctx.drawImage(handCursor, cursor1.x, cursor1.y, cursor1.w, cursor1.h);
			// hand cursor movement
			cursor1.x = mouseX - cursor1.w / 2;
			cursor1.y = mouseY - cursor1.h / 10;
			// hand cursor collision
			if (cursor1.x < 0) {
				cursor1.x = 0;
			} else if (cursor1.x + cursor1.w > cnv.width) {
				cursor1.x = cnv.width - cursor1.w;
			} else if (cursor1.y < 0) {
				cursor1.y = 0;
			} else if (cursor1.y + cursor1.h > cnv.height) {
				cursor1.y = cnv.height - cursor1.h;
			}
		}
	}

	// OBJECTS AND VARIABLES TO BE RESET AFTER RESTART
	function reset() {
		ctx.globalAlpha = 100
		gameState = "title";
		enemyArray = [];
		// score = 0;
		cursor = {
			x: 0,
			y: 0,
			w: 23.030303,
			h: 40
		}
		cursor1 = {
			x: 0,
			y: 0,
			w: 32.0638297872,
			h: 41.4893617021
		}
		startButton = {
			x: 470,
			y: 550,
			w: 250,
			h: 140
		}
		startButton2 = {
			x: 0,
			y: 741.5,
			w: 125,
			h: 70
		}
		myComputer = {
			x: 25,
			y: 15,
			w: 40,
			h: 40
		}
		theInternet = {
			x: 90,
			y: 15,
			w: 40,
			h: 40
		}
		recycleBin = {
			x: 25,
			y: 80,
			w: 40,
			h: 40
		}
		inbox = {
			x: 90,
			y: 83,
			w: 40,
			h: 40
		}
		networkNeighborhood = {
			x: 25,
			y: 140,
			w: 40,
			h: 40
		}
		theMicrosoftNetwork = {
			x: 90,
			y: 145,
			w: 40,
			h: 40
		}
		documents = {
			x: 25,
			y: 205,
			w: 40,
			h: 40
		}
		myBriefcase = {
			x: 25,
			y: 255,
			w: 40,
			h: 40
		}

	}

	function spawnEnemy() {

		let SpawnPercent = RanDec(0, 12)

		windowEnemy = {
			hp: 1,
			moveX: 0,
			moveY: 1,
			pointValue: 1,
			x: 568,
			y: 0,
			w: 32,
			h: 32,
			fro: false,
			img: windowEnemyImg
		}

		bigHandEnemy = {
			hp: 2,
			moveX: 1,
			moveY: 0,
			pointValue: 1,
			x: 0,
			y: 0,
			w: 34,
			h: 82,
			fro: false,
			img: bigHandEnemyImg
		}

		plugEnemy = {
			hp: 3,
			moveX: 1,
			moveY: 0,
			pointValue: 1,
			x: -50,
			y: 32,
			w: 32,
			h: 29,
			fro: false,
			img: plugEnemyImg
		}

		bolt = {
			hp: 1000,
			moveX: 8,
			moveY: 8,
			pointValue: 1000,
			x: 32,
			y: 32,
			w: 6,
			h: 6,
			fro: false,
			img: boltImg
		}

		bigHandEnemy.y = RanDec(0, cnv.height);
		windowEnemy.x = RanDec(0, cnv.width);

		if (SpawnPercent < 5) {
			enemyArray.push(windowEnemy)
		} else if (SpawnPercent < 8) {
			enemyArray.push(bigHandEnemy)
			enemyArray.push(windowEnemy)
		} else if (SpawnPercent < 9) {
			enemyArray.push(bigHandEnemy)
			enemyArray.push(windowEnemy)
			enemyArray.push(bigHandEnemy)
			enemyArray.push(windowEnemy)
			spawnEnemy()
		} else if (SpawnPercent <= 12) {
			enemyArray.push(bigHandEnemy)
			enemyArray.push(windowEnemy)
			enemyArray.push(plugEnemy)
			enemyArray.push(bolt);
		}



		// enemyArray.push(windowEnemy, bigHandEnemy, plugEnemy, bolt);
	}

	function startEnemySpawn() {
		var spawn = RanDec(0, 100); // amount spawning is random amount from 0 to 100
		if (spawn < 1) {
			spawnEnemy();
		}
		for (var i = 0; i < enemyArray.length; i++) {
			spawn--;
		}
	}

	// EVENT LISTENERS
	document.addEventListener("mousedown", mousedownHandler);
	document.addEventListener("mouseup", mouseupHandler);
	document.addEventListener("mousemove", mousemoveHandler);
	document.addEventListener("keyup", keyupHandler);
	document.addEventListener("keydown", keydownHandler);

	// EVENT FUNCTIONS 
	function mousedownHandler() {
		mouseIsPressed = true;
	}

	function mouseupHandler() {
		mouseIsPressed = false;
	}

	function mousemoveHandler(event) {
		let cnvRect = cnv.getBoundingClientRect();
		mouseX = event.x - cnvRect.x;
		mouseY = event.y - cnvRect.y;
	}

	function keydownHandler(event) {
		console.log(event)

		if (event.keyCode === 49 && gameState === "game") {
			weaponType = "close";
			console.log(weaponType);
		} else if (event.key === "2" && gameState === "game") {
			weaponType = "error";
			console.log(weaponType);
		} else if (event.keyCode === 51 && gameState === "game") {
			weaponType = "restrict";
			console.log(weaponType);
		} else if (event.keyCode === 52 && gameState === "game") {
			weaponType = "mine";
			console.log(weaponType);
		} else if (event.keyCode === 75) {
			gameState = "gameOver";
			adfg = 0
			A = Math.floor(Math.random() * 10 + 1)
		} else if (event.keyCode === 82) {
			reset();
			adfg = 0
			A = Math.floor(Math.random() * 10 + 1)
		} else if (event.keyCode === 32 && gameState === "gameOver") {
			reset();
			gameState = 'start';
			adfg = 0
			A = Math.floor(Math.random() * 10 + 1)
		} else if (event.keyCode === 90) {
			spawnEnemy()
			burn.play()
		}
	}
	//mfw key up != epic
	function keyupHandler() {
		if (event.keyCode === 32) {
			spaceIsPressed = false;
		}
	}

	function RanDec(low, high) {
		return Math.random() * (high - low) + low;
	}

