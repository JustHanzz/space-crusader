class scnPause extends Phaser.Scene {
	constructor() {
		super("scnPause");
	}

	create() {
		
		//========================================================================//
	    //=========================== INISIALISASI ===============================//
	    //========================================================================//
	    
	    var btnClicked = false;
	    var diz = this;
	    
	    this.clickSound =  this.sound.add('snd_Click');
	    
	    //========================================================================//
	    //============================== OBJEK ===================================//
	    //========================================================================//
	    
	    var backgroundPause = this.add.rectangle(0, 0, 4000, 2000, 0x000000);
	    backgroundPause.setDepth(5);
	    backgroundPause.setAlpha(0.5);
	    
	    var windowMenu = this.add.image(-500, 768/2, 'window_Menu');
	    windowMenu.setOrigin(0.5);
	    windowMenu.setDepth(10);
	    windowMenu.setScale(2);	
	    
		//
	    var labelPause = this.add.text(windowMenu.x, windowMenu.y - 230, "PAUSE");
	    labelPause.setOrigin(0.5);
	    labelPause.setDepth(15);
	    labelPause.setFontSize(50);
	    labelPause.setTint(0xff732e);

	    //
	    var labelBGM = this.add.text(windowMenu.x - 100, windowMenu.y - 110, "BGM");
	    labelBGM.setOrigin(0.5);
	    labelBGM.setDepth(15);
	    labelBGM.setFontSize(30);
	    labelBGM.setTint(0xff732e);
	    
	    //
	    this.BGMOnButton = this.add.image(windowMenu.x , windowMenu.y - 110, 'btn_BGM_On');
	    this.BGMOnButton.setOrigin(0.5);
	    this.BGMOnButton.setDepth(10);
	    this.BGMOnButton.setAlpha(1);
	    this.BGMOnButton.setScale(0);
	    this.BGMOnButton.setInteractive();
	    
	    //
	    this.BGMOffButton = this.add.image(windowMenu.x , windowMenu.y - 110, 'btn_BGM_Off');
	    this.BGMOffButton.setOrigin(0.5);
	    this.BGMOffButton.setDepth(10);
	    this.BGMOffButton.setAlpha(1);
	    this.BGMOffButton.setScale(0);
	    this.BGMOffButton.setInteractive();
	    
	    //
	    var labelSFX = this.add.text(windowMenu.x - 110, windowMenu.y + 25, "SFX");
	    labelSFX.setOrigin(0.5);
	    labelSFX.setDepth(15);
	    labelSFX.setFontSize(30);
	    labelSFX.setTint(0xff732e);
	    
	    //
	    this.SFXOnButton = this.add.image(windowMenu.x, windowMenu.y + 25, 'btn_SFX_On');
	    this.SFXOnButton.setOrigin(0.5);
	    this.SFXOnButton.setDepth(10);
	    this.SFXOnButton.setAlpha(1);
	    this.SFXOnButton.setScale(0);
	    this.SFXOnButton.setInteractive();
	    
	    //
	    this.SFXOffButton = this.add.image(windowMenu.x, windowMenu.y + 25, 'btn_SFX_Off');
	    this.SFXOffButton.setOrigin(0.5);
	    this.SFXOffButton.setDepth(10);
	    this.SFXOffButton.setAlpha(1);
	    this.SFXOffButton.setScale(0);
	    this.SFXOffButton.setInteractive();
	    
	    var homeButton = this.add.image(windowMenu.x - 150, windowMenu.y + 175, 'btn_Home');
	    homeButton.setOrigin(0.5);
	    homeButton.setDepth(15);
	    homeButton.setInteractive();
	    
	    var resumeButton = this.add.image(windowMenu.x, windowMenu.y + 175, 'btn_Play');
	    resumeButton.setOrigin(0.5);
	    resumeButton.setDepth(15);
	    resumeButton.setInteractive();
	    
	    var retryButton = this.add.image(windowMenu.x + 150, windowMenu.y + 175, 'btn_Restart');
	    retryButton.setOrigin(0.5);
	    retryButton.setDepth(15);
	    retryButton.setInteractive();
		
		//========================================================================//
	    //============================= ANIMASI ==================================//
	    //========================================================================//
	    
	    this.tweens.add({
	        targets : windowMenu,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2,
	    });
	    
		this.tweens.add({
	        targets : labelPause,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });

	    this.tweens.add({
	        targets : labelBGM,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2 - 100
	    });
	    
	    this.tweens.add({
	        targets : diz.BGMOnButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });
	    
	    this.tweens.add({
	        targets : diz.BGMOffButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });
	    
	    this.tweens.add({
	        targets : labelSFX,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2 - 100
	    });
	    
	    this.tweens.add({
	        targets : diz.SFXOnButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });
	    this.tweens.add({
	        targets : diz.SFXOffButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });
	    
	    this.tweens.add({
	        targets : homeButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2 - 150
	    });
	    
	    this.tweens.add({
	        targets : resumeButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2
	    });
	    
	    this.tweens.add({
	        targets : retryButton,
	        ease : 'easeOut',
	        duration : 250,
	        x : 1366/2 + 150
	    });
	    
	    
		//========================================================================//
	    //============================== INPUT ===================================//
	    //========================================================================//
		
	    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

		this.input.on('gameobjectover', function (pointer, gameObject){
		    console.log("Scene Menu | Object Over");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == homeButton) {
		        btnPlay.setTint(0x616161);
		    }
		    
		    if (gameObject == retryButton) {
		        btnPlay.setTint(0x616161);
		    }
		   
		}, this);
		
		this.input.on('gameobjectout', function (pointer, gameObject){
		    console.log("Scene Game Over | Object Out");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0xffffff);
		    }
		    
		    if (gameObject == retryButton) {
		        retryButton.setTint(0xffffff);
		    }
		    
		}, this);
		
		this.input.on('gameobjectdown', function (pointer, gameObject){
		    console.log("Scene Menu | Object Click");
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		    if (gameObject == resumeButton) {
		        resumeButton.setTint(0x616161);
		        btnClicked = true;
		    }

		    if (gameObject == retryButton) {
		        retryButton.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		}, this);
		
		this.input.on('gameobjectup', function (pointer, gameObject){
		    console.log("Scene Menu | Object End Click");
		    
		    if (gameObject == homeButton) {
		        homeButton.setTint(0xffffff);
	            this.scene.stop('scnPlay');
		        this.scene.start('scnMenu');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    
		    if (gameObject == resumeButton) {
		        resumeButton.setTint(0xffffff);
	            this.scene.stop('scnPause');
		        this.scene.resume('scnPlay');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    
		    if (gameObject == retryButton) {
		        retryButton.setTint(0xffffff);
		        this.scene.stop('scnPlay');
		        this.scene.start('scnPlay');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    
		    if (gameObject == diz.BGMOnButton) {
		        diz.BGMOnButton.setTint(0xffffff);
		        localStorage.BGM = 0;
		        bgmSound.setVolume(0);
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    
		    if (gameObject == diz.BGMOffButton) {
		        diz.BGMOffButton.setTint(0xffffff);
		        localStorage.BGM = 1;
		        bgmSound.setVolume(0.35);
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }
		    
		    if (gameObject == diz.SFXOnButton) {
		        homeButton.setTint(0xffffff);
		        localStorage.SFX = 0;
		    }
		    
		    if (gameObject == diz.SFXOffButton) {
		        homeButton.setTint(0xffffff);
		        localStorage.SFX = 1;
		        this.clickSound.play();
		    }
		    
		}, this);
		
		this.input.on('pointerup', function (pointer, currentlyOver){
		    
		    btnClicked = false;
		    
		}, this);
	}

	update(){
    
	    var diz = this;
	    
	    if (this.esc.isDown){
			this.scene.stop('scnPause');
		    this.scene.resume('scnPlay');
		    if (localStorage.SFX == 1){
		        this.clickSound.play();
		    }
		}

	    if (localStorage.BGM == 1){
	        diz.BGMOnButton.setScale(1);
	        diz.BGMOffButton.setScale(0);
	    } 
	    
	    if (localStorage.BGM == 0){
	        diz.BGMOnButton.setScale(0);
	        diz.BGMOffButton.setScale(1);
	    }
	    
	    if (localStorage.SFX == 0){
	        diz.SFXOnButton.setScale(0);
	        diz.SFXOffButton.setScale(1);
	    }
	    
	    if (localStorage.SFX == 1){
	        diz.SFXOnButton.setScale(1);
	        diz.SFXOffButton.setScale(0);
	    }
	}
}