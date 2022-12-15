class scnSplash extends Phaser.Scene {
	constructor() {
		super("scnSplash");
	}

	preload() {
		
		// BACKGROUNDS
		this.load.image("bg_Main", "assets/backgrounds/bg_Main.png")
		this.load.image("window_Menu", "assets/backgrounds/window_Menu.png")


		// BUTTONS
		this.load.image("btn_BGM_Off", "assets/buttons/btn_BGM_Off.png")
		this.load.image("btn_BGM_On", "assets/buttons/btn_BGM_On.png")
		this.load.image("btn_Credit", "assets/buttons/btn_Credit.png")
		this.load.image("btn_Highscore", "assets/buttons/btn_Highscore.png")
		this.load.image("btn_Home", "assets/buttons/btn_Home.png")
		this.load.image("btn_Pause", "assets/buttons/btn_Pause.png")
		this.load.image("btn_Play", "assets/buttons/btn_Play.png")
		this.load.image("btn_Restart", "assets/buttons/btn_Restart.png")
		this.load.image("btn_Settings", "assets/buttons/btn_Settings.png")
		this.load.image("btn_SFX_Off", "assets/buttons/btn_SFX_Off.png")
		this.load.image("btn_SFX_On", "assets/buttons/btn_SFX_On.png")

		
		// OBSTACLES
		this.load.image("obs_Asteroid", "assets/obstacles/obs_Asteroid.png")


		// SOUNDS
	    this.load.audio("snd_Beam", ["assets/sounds/snd_Beam.ogg", "assets/sounds/snd_Beam.mp3"]);
	    this.load.audio("snd_BGM", ["assets/sounds/snd_BGM.ogg", "assets/sounds/snd_BGM.mp3"]);
	    this.load.audio("snd_Click", ["assets/sounds/snd_Click.ogg", "assets/sounds/snd_Click.mp3"]);
	    this.load.audio("snd_Explosion", ["assets/sounds/snd_Explosion.ogg", "assets/sounds/snd_Explosion.mp3"]);
	    
	    
		// SPRITE
		this.load.image("ship_Enemy", "assets/sprite/ship_Enemy.png");
		this.load.image("ship_Player", "assets/sprite/ship_Player.png");


		// SPRITESHEET
		this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
	      frameWidth: 16,
	      frameHeight: 16
	    });
	    this.load.spritesheet("player_Beam", "assets/spritesheets/player_Beam.png",{
	      frameWidth: 16,
	      frameHeight: 16
	    });

	}

	create() {
		
		// Animasi Meledak
	    this.anims.create({
	      key: "explode",
	      frames: this.anims.generateFrameNumbers("explosion"),
	      frameRate: 20,
	      repeat: 0,
	      hideOnComplete: true
	    });

	    // Animasi Senjata Player
	    this.anims.create({
	      key: "anim_Beam",
	      frames: this.anims.generateFrameNumbers("player_Beam"),
	      frameRate: 20,
	      repeat: -1
	    });

	    // Loading dan Perpindahan Scene
	    this.add.text(20,20, "Loading game...")
		this.scene.start("scnMenu");
	}
}