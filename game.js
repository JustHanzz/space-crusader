var config = {
	type: Phaser.AUTO,
	scene: [scnSplash, scnMenu, scnCredit, scnHighScore, scnSettings, scnPlay, scnPause, scnGameOver],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1366,
		height: 768,
	},
	physics: {
       	default: 'arcade',
       	arcade: {
           	gravity: { y: 200 }
       	}
   	},
}

var bgmSound = null;
var scoreDefault = [600,450,300,150,75];

if (localStorage.getItem("BGM") === null) {
    localStorage.BGM = 1;
}
if (localStorage.getItem("SFX") === null) {
    localStorage.SFX = 1;
}
if (localStorage.getItem("gameHighScore") === null) {
    localStorage.gameHighScore = JSON.stringify(scoreDefault);
}

var game = new Phaser.Game(config);