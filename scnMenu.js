class scnMenu extends Phaser.Scene {
	constructor() {
		super("scnMenu");
	}

	create() {

		//========================================================================//
	    //=========================== INISIALISASI ===============================//
	    //========================================================================//

		var btnClicked = false;
    	var diz = this;


    	//========================================================================//
	    //============================== AUDIO ===================================//
	    //========================================================================//
	    
	    if (bgmSound == null) {
		    bgmSound = this.sound.add('snd_BGM');
		    bgmSound.loop = true;
		    if (localStorage.BGM == 0){
		        bgmSound.setVolume(0);
		    }
		    if(localStorage.BGM == 1){
		        bgmSound.setVolume(0.35);
		    }
		    bgmSound.play();
		}

		this.clickSound =  this.sound.add('snd_Click');


		//========================================================================//
	    //============================== OBJEK ===================================//
	    //========================================================================//

		var background = this.add.image(0,0,"bg_Main");
		background.setOrigin(0,0);

		var titleGame = this.add.text(1366/2, 200, "SPACE CRUSADER");
		titleGame.setOrigin(0.5);
		titleGame.setFontSize(120);

		var creditButton = this.add.image(1300, 60, "btn_Credit");
		creditButton.setOrigin(0.5);
		creditButton.setInteractive();

		var playButton = this.add.image(1366/2, 400, "btn_Play");
		playButton.setScale(1.3)
		playButton.setOrigin(0.5);
		playButton.setInteractive();

		var highscoreButton = this.add.image(playButton.x + 150, 475, "btn_Highscore");
		highscoreButton.setScale(1.3)
		highscoreButton.setOrigin(0.5);
		highscoreButton.setInteractive();

		var settingsButton = this.add.image(playButton.x - 150, 475, "btn_Settings");
		settingsButton.setScale(1.3)
		settingsButton.setOrigin(0.5);
		settingsButton.setInteractive();

		/// INPUT ///
		this.input.on('gameobjectover', function (pointer, gameObject){
	    
	    if (!btnClicked) return;
	    
		    if (gameObject == playButton) {
		        playButton.setTint(0x616161);
		    }
		   
		}, this);
		
		this.input.on('gameobjectout', function (pointer, gameObject){
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == playButton) {
		        playButton.setTint(0xffffff);
		    }
		    
		}, this);
		
		this.input.on('gameobjectdown', function (pointer, gameObject){
		    
		    if (gameObject == playButton) {
		        playButton.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		}, this);

		this.input.on('gameobjectup', function (pointer, gameObject){
			if (gameObject == playButton) {
		        playButton.setTint(0xffffff);
		        this.scene.start('scnPlay');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
	    

		    if (gameObject == settingsButton) {
		        settingsButton.setTint(0xffffff);
		        this.scene.launch('scnSettings');
		        this.scene.pause('scnMenu');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    

		    if (gameObject == creditButton) {
		        creditButton.setTint(0xffffff);
		        this.scene.launch('scnCredit');
		        this.scene.pause('scnMenu');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }

		    if (gameObject == highscoreButton) {
		        highscoreButton.setTint(0xffffff);
		        this.scene.launch('scnHighScore');
		        this.scene.pause('scnMenu');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
	    }, this);
	
		this.input.on('pointerup', function (pointer, currentlyOver){
		    
		    btnClicked = false;
		    
		}, this);
	}
}