class scnHighScore extends Phaser.Scene {
	constructor() {
		super("scnHighScore");
	}

	create() {
		
		//========================================================================//
	    //=========================== INISIALISASI ===============================//
	    //========================================================================//
	    
	    var btnClicked = false;
	    var highScore = JSON.parse(localStorage.gameHighScore);

	    //========================================================================//
	    //============================== AUDIO ===================================//
	    //========================================================================//
	    
	    this.snd_click =  this.sound.add('snd_Click');
	    
	    //========================================================================//
	    //============================== OBJEK ===================================//
	    //========================================================================//
	    
	    var bgSettings = this.add.rectangle(0, 0, 4000, 2000, 0x000000);
	    bgSettings.setDepth(5);
	    bgSettings.setAlpha(0.5);
	    
	    var windowMenu = this.add.image(-500, 768/2, 'window_Menu');
	    windowMenu.setOrigin(0.5);
	    windowMenu.setDepth(10);
	    windowMenu.setScale(2);

	    //
	    var labelHighScore = this.add.text(windowMenu.x, windowMenu.y - 230, "HIGH SCORE");
	    labelHighScore.setOrigin(0.5);
	    labelHighScore.setDepth(15);
	    labelHighScore.setFontSize(50);
	    labelHighScore.setTint(0xff732e);

	    //
	    var labelTextPertama = this.add.text(windowMenu.x - 200, windowMenu.y - 150, "Pertama");
	    labelTextPertama.setOrigin(0.0);
	    labelTextPertama.setDepth(15);
	    labelTextPertama.setFontSize(50);
	    labelTextPertama.setTint(0xff732e);

	    //
	    var labelTextKedua = this.add.text(windowMenu.x - 200, windowMenu.y - 90, "Kedua");
	    labelTextKedua.setOrigin(0.0);
	    labelTextKedua.setDepth(15);
	    labelTextKedua.setFontSize(50);
	    labelTextKedua.setTint(0xff732e);

	    //
	    var labelTextKetiga = this.add.text(windowMenu.x - 200, windowMenu.y - 30, "Ketiga");
	    labelTextKetiga.setOrigin(0.0);
	    labelTextKetiga.setDepth(15);
	    labelTextKetiga.setFontSize(50);
	    labelTextKetiga.setTint(0xff732e);

	    //
	    var labelTextKeempat = this.add.text(windowMenu.x - 200, windowMenu.y + 30, "Keempat");
	    labelTextKeempat.setOrigin(0.0);
	    labelTextKeempat.setDepth(15);
	    labelTextKeempat.setFontSize(50);
	    labelTextKeempat.setTint(0xff732e);

	    //
	    var labelTextKelima = this.add.text(windowMenu.x - 200, windowMenu.y + 90, "Kelima");
	    labelTextKelima.setOrigin(0.0);
	    labelTextKelima.setDepth(15);
	    labelTextKelima.setFontSize(50);
	    labelTextKelima.setTint(0xff732e);

	    //
	    var labelScorePertama = this.add.text(windowMenu.x + 75, windowMenu.y - 150, "" + highScore[0]);
	    labelScorePertama.setOrigin(0.0);
	    labelScorePertama.setDepth(15);
	    labelScorePertama.setFontSize(50);
	    labelScorePertama.setTint(0xff732e);

	    //
	    var labelScoreKedua = this.add.text(windowMenu.x + 75, windowMenu.y - 90, "" + highScore[1]);
	    labelScoreKedua.setOrigin(0.0);
	    labelScoreKedua.setDepth(15);
	    labelScoreKedua.setFontSize(50);
	    labelScoreKedua.setTint(0xff732e);

	    //
	    var labelScoreKetiga = this.add.text(windowMenu.x + 75, windowMenu.y - 30, "" + highScore[2]);
	    labelScoreKetiga.setOrigin(0.0);
	    labelScoreKetiga.setDepth(15);
	    labelScoreKetiga.setFontSize(50);
	    labelScoreKetiga.setTint(0xff732e);

	    //
	    var labelScoreKeempat = this.add.text(windowMenu.x + 75, windowMenu.y + 30, "" + highScore[3]);
	    labelScoreKeempat.setOrigin(0.0);
	    labelScoreKeempat.setDepth(15);
	    labelScoreKeempat.setFontSize(50);
	    labelScoreKeempat.setTint(0xff732e);

	    //
	    var labelScoreKelima = this.add.text(windowMenu.x + 75, windowMenu.y + 90, "" + highScore[4]);
	    labelScoreKelima.setOrigin(0.0);
	    labelScoreKelima.setDepth(15);
	    labelScoreKelima.setFontSize(50);
	    labelScoreKelima.setTint(0xff732e);
	    
	    var homeButton = this.add.image(windowMenu.x, windowMenu.y + 200, 'btn_Home');
	    homeButton.setOrigin(0.5);
	    homeButton.setDepth(15);
	    homeButton.setScale(1);
	    homeButton.setInteractive();
	    
	    
	    //========================================================================//
	    //============================= ANIMASI ==================================//
	    //========================================================================//
	    
	    this.tweens.add({
	        targets : windowMenu,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2,
	    });
	    
	    this.tweens.add({
	        targets : labelHighScore,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2,
	    });

	    this.tweens.add({
	        targets : labelTextPertama,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 200,
	    });

	    this.tweens.add({
	        targets : labelTextKedua,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 200,
	    });

	    this.tweens.add({
	        targets : labelTextKetiga,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 200,
	    });

	    this.tweens.add({
	        targets : labelTextKeempat,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 200,
	    });

	    this.tweens.add({
	        targets : labelTextKelima,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 200,
	    });

	    this.tweens.add({
	        targets : labelScorePertama,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 + 75,
	    });

	    this.tweens.add({
	        targets : labelScoreKedua,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 + 75,
	    });

	    this.tweens.add({
	        targets : labelScoreKetiga,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 + 75,
	    });

	    this.tweens.add({
	        targets : labelScoreKeempat,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 + 75,
	    });

	    this.tweens.add({
	        targets : labelScoreKelima,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 + 75,
	    });

	    this.tweens.add({
	        targets : homeButton,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2,
	    });
	    
	    
		//========================================================================//
	    //============================== INPUT ===================================//
	    //========================================================================//
		
		this.input.on('gameobjectover', function (pointer, gameObject){
		    console.log("Scene Menu | Object Over");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == homeButton) {
		        btnPlay.setTint(0x616161);
		    }
		   
		}, this);
		
		this.input.on('gameobjectout', function (pointer, gameObject){
		    console.log("Scene Game Over | Object Out");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0xffffff);
		    }
		    
		}, this);
		
		this.input.on('gameobjectdown', function (pointer, gameObject){
		    console.log("Scene Menu | Object Click");
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		}, this);
		
		this.input.on('gameobjectup', function (pointer, gameObject){
		    console.log("Scene Menu | Object End Click");
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0xffffff);
	            this.scene.stop('scnHighScore');
		        this.scene.start('scnMenu');
		        if (localStorage.SFX == 1){
		            this.snd_click.play();
		        }
		    }
		    
		}, this);
		
		this.input.on('pointerup', function (pointer, currentlyOver){
		    
		    btnClicked = false;
		    
		}, this);
	}
}