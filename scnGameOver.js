class scnGameOver extends Phaser.Scene {

	constructor() {
		super("scnGameOver");
	}

	create() {
		
		//========================================================================//
	    //=========================== INISIALISASI ===============================//
	    //========================================================================//
	    
	    var skorTerakhir = localStorage.gameLastScore || 0;
	    var btnClicked = false;
	    
	    this.clickSound =  this.sound.add('snd_Click');
	    
	    //========================================================================//
	    //============================== OBJEK ===================================//
	    //========================================================================//
	    
	    //
	    var bgGameOver = this.add.rectangle(0, 0, 4000, 2000, 0x000000);
	    bgGameOver.setDepth(5);
	    bgGameOver.setAlpha(0);
	    
	    //
	    var windowMenu = this.add.image(-500, 768/2, 'window_Menu');
	    windowMenu.setOrigin(0.5);
	    windowMenu.setDepth(10);
	    windowMenu.setScale(2);
	    
	    //
	    var labelGameOver = this.add.text(windowMenu.x, windowMenu.y - 230, "GAME OVER");
	    labelGameOver.setOrigin(0.5);
	    labelGameOver.setDepth(15);
	    labelGameOver.setFontSize(50);
	    labelGameOver.setTint(0xff732e);

	    //
	    var labelTextScore = this.add.text(windowMenu.x, windowMenu.y - 100, "Score: ");
	    labelTextScore.setOrigin(0.5);
	    labelTextScore.setDepth(15);
	    labelTextScore.setFontSize(50);
	    labelTextScore.setTint(0xff732e);

	    //
	    var labelPointScore = this.add.text(windowMenu.x, windowMenu.y , "" + skorTerakhir);
	    labelPointScore.setOrigin(0.5);
	    labelPointScore.setDepth(15);
	    labelPointScore.setFontSize(100);
	    labelPointScore.setTint(0xff732e);
	    
	    //
	    var btnHome = this.add.image(windowMenu.x - 100, windowMenu.y + 175, 'btn_Home');
	    btnHome.setOrigin(0.5);
	    btnHome.setDepth(15);
	    btnHome.setInteractive();
	    
	    //
	    var btnRetry = this.add.image(windowMenu.x + 100, windowMenu.y + 175, 'btn_Restart');
	    btnRetry.setOrigin(0.5);
	    btnRetry.setDepth(15);
	    btnRetry.setInteractive();
	    
	    
	    //========================================================================//
	    //============================= ANIMASI ==================================//
	    //========================================================================//
	    
		this.tweens.add({
	        targets : bgGameOver,
	        alpha : 0.5,
	        duration : 10,
	        delay : 1500,
	    });

	    this.tweens.add({
	        targets : windowMenu,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2,
	    });
	    
	    this.tweens.add({
	        targets : labelGameOver,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2,
	    });

	    this.tweens.add({
	        targets : labelTextScore,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2,
	    });

	    this.tweens.add({
	        targets : labelPointScore,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2,
	    });
	    
	    this.tweens.add({
	        targets : btnHome,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2 - 100,
	    });
	    
	    this.tweens.add({
	        targets : btnRetry,
	        ease : 'easeOut',
	        duration : 250,
	        delay : 1500,
	        x : 1366/2 + 100,
	    });
	    
	    
		//========================================================================//
	    //============================== INPUT ===================================//
	    //========================================================================//
		
		this.input.on('gameobjectover', function (pointer, gameObject){
		    console.log("Scene Menu | Object Over");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == btnHome) {
		        btnPlay.setTint(0x616161);
		    }
		    
		    if (gameObject == btnRetry) {
		        btnPlay.setTint(0x616161);
		    }
		   
		}, this);
		
		this.input.on('gameobjectout', function (pointer, gameObject){
		    console.log("Scene Game Over | Object Out");
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == btnHome) {
		        btnHome.setTint(0xffffff);
		    }
		    
		    if (gameObject == btnRetry) {
		        btnRetry.setTint(0xffffff);
		    }
		    
		}, this);
		
		this.input.on('gameobjectdown', function (pointer, gameObject){
		    console.log("Scene Menu | Object Click");
		    
		    if (gameObject == btnHome) {
		        btnHome.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		    if (gameObject == btnRetry) {
		        btnRetry.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		}, this);
		
		this.input.on('gameobjectup', function (pointer, gameObject){
		    console.log("Scene Menu | Object End Click");
		    
		    if (gameObject == btnHome) {
		        btnHome.setTint(0xffffff);
	            this.scene.stop('scnPlay');
		        this.scene.start('scnMenu');
		        //if (localStorage.SFX == 1){
		        //    this.clickSound.play();
		        //}
		    }
		    
		    if (gameObject == btnRetry) {
		        btnRetry.setTint(0xffffff);
		        this.scene.start('scnPlay');
		        //if (localStorage.SFX == 1){
		        //    this.clickSound.play();
		        //}
		    }
		    
		}, this);
		
		this.input.on('pointerup', function (pointer, currentlyOver){
		    
		    btnClicked = false;
		    
		}, this);
	}
}