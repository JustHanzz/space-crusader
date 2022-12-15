class scnCredit extends Phaser.Scene {

	constructor() {
		super("scnCredit");
	}

	create() {
		
		//========================================================================//
	    //=========================== INISIALISASI ===============================//
	    //========================================================================//
	    
	    var btnClicked = false;
	    
	    this.clickSound =  this.sound.add('snd_Click');
	    

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

	    var creditLabel = this.add.text(windowMenu.x, windowMenu.y - 230, "CREDIT");
	    creditLabel.setOrigin(0.5);
	    creditLabel.setDepth(15);
	    creditLabel.setFontSize(50);
	    creditLabel.setTint(0xff732e);

	    //
	    var labelTextTeam = this.add.text(windowMenu.x - 200, windowMenu.y - 150, "Main Team");
	    labelTextTeam.setOrigin(0.0);
	    labelTextTeam.setDepth(15);
	    labelTextTeam.setFontSize(25);
	    labelTextTeam.setTint(0xff732e);

	    //
	    var labelAnggotaTeam1 = this.add.text(windowMenu.x - 200, windowMenu.y - 100, "Muammar Farhan Londjo (197006024)");
	    labelAnggotaTeam1.setOrigin(0.0);
	    labelAnggotaTeam1.setDepth(15);
	    labelAnggotaTeam1.setFontSize(25);
	    labelAnggotaTeam1.setTint(0xff732e);

	    //
	    var labelAnggotaTeam2 = this.add.text(windowMenu.x - 200, windowMenu.y - 70, "Muhammad Irsyad Shiddiq (197006044)");
	    labelAnggotaTeam2.setOrigin(0.0);
	    labelAnggotaTeam2.setDepth(15);
	    labelAnggotaTeam2.setFontSize(25);
	    labelAnggotaTeam2.setTint(0xff732e);

	    //
	    var labelTextAsset = this.add.text(windowMenu.x - 200, windowMenu.y, "Asset dari");
	    labelTextAsset.setOrigin(0.0);
	    labelTextAsset.setDepth(15);
	    labelTextAsset.setFontSize(25);
	    labelTextAsset.setTint(0xff732e);

	    //
	    var labelTextCredit = this.add.text(windowMenu.x - 200, windowMenu.y + 50, "Canva & OpenGameArt.org");
	    labelTextCredit.setOrigin(0.0);
	    labelTextCredit.setDepth(15);
	    labelTextCredit.setFontSize(25);
	    labelTextCredit.setTint(0xff732e);
	    
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
	        targets : creditLabel,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2,
	    });

	    this.tweens.add({
	        targets : labelTextTeam,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 280,
	    });

	    this.tweens.add({
	        targets : labelAnggotaTeam1,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 280,
	    });

	    this.tweens.add({
	        targets : labelAnggotaTeam2,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 280,
	    });

	    this.tweens.add({
	        targets : labelTextAsset,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 280,
	    });

	    this.tweens.add({
	        targets : labelTextCredit,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 250,
	        x : 1366/2 - 280,
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
	            this.scene.stop('scnCredit');
		        this.scene.start('scnMenu');
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