class scnPlay extends Phaser.Scene {
	constructor() {
		super("scnPlay");
	}

	create() {
		
		/////////////////////////////////////////////////////	
		/////////////////// INISIALISASI ////////////////////
		/////////////////////////////////////////////////////

	    this.physics.world.setBoundsCollision();
	    this.projectiles = this.add.group();

	    this.score = 0;
	    this.timerHalangan = 0;
	    this.multiplier = 1;

	    this.backgrounds = [];
	    this.halangan = [];

	    var bg_x = 1366/2 - 171;
	    var btnClicked = false;
	    var diz = this;

	    /////////////////////////////////////////////////////	
		/////////////////////// OBJEK ///////////////////////
		/////////////////////////////////////////////////////

	    for (let i = 0; i < 4; i++) {
		    // Array background baru
	        var bg_awal = [];

	    	// Membuat Background dan Foregorund
	        var BG1 = this.add.image(bg_x, 768/2, 'bg_Main');
	        	        
	        // Menambahkan Custom Data
	        BG1.setData('kecepatan', 5);
	        
	        BG1.setDepth(10);
	        
	    	// Memasukkan Background ke dalam Array baru
	        bg_awal.push(BG1);
	    
	    	// Memasukkan Array background baru ke dalam array this.backgrounds
	        this.backgrounds.push(bg_awal);
	    
	    	// Menambah nilai bg_x untuk perulangan selanjutnya
	        bg_x += 1365;
	    }

		var pauseButton = this.add.image(1300, 60, "btn_Pause");
		pauseButton.setOrigin(0.5);
		pauseButton.setDepth(15);
		pauseButton.setInteractive();

		this.player = this.physics.add.sprite(200,250,"ship_Player");
		this.player.body.setImmovable(true);
		this.player.body.setAllowGravity(false);
		this.player.setCollideWorldBounds(true);
		this.player.setScale(0)
		this.player.setDepth(20)

		//this.enemy = this.physics.add.sprite(600, 600, "ship_Enemy");
		//this.enemy.body.setImmovable(true);
		//this.enemy.body.setAllowGravity(false);
		//this.enemy.setDepth(20)
	    //this.enemy.setInteractive();

	    this.label_score = this.add.text(1366/2, 60, this.score);
	    this.label_score.setOrigin(0.5);
	    this.label_score.setDepth(19);
	    this.label_score.setFontSize(50);
	    this.label_score.setTint(0xFFFFFF);

		this.projectiles = this.add.group();


	    this.beamSound = this.sound.add("snd_Beam");
	    this.clickSound =  this.sound.add('snd_Click');
		this.explosionSound = this.sound.add("snd_Explosion");

		// ANIMASI //
		this.tweens.add({
        delay: 250,
	        targets: this.player,
	        ease: 'Back.Out',
	        duration: 500,
	        scaleX : 0.3,
	        scaleY : 0.3,
	        onComplete: function(){
	            diz.isGameRunning = true;
	        }
	    });

		/// CUSTOM FUNCTION ///
		this.gameOver = function() {
        
	        let lastScore = localStorage.gameLastScore || 0;
	        localStorage.gameLastScore = diz.score;


	        let highScore = JSON.parse(localStorage.gameHighScore)

	        highScore.push(diz.score);

	        function onlyUnique(value, index, self) {
  				return self.indexOf(value) === index;
			}

	        highScore.sort(function(a, b) {
				return b - a;
			});

			var filterHS = highScore.filter(onlyUnique);

			let newHighScore = filterHS.slice(0, 5);

			localStorage.gameHighScore = JSON.stringify(newHighScore);

	        //if (diz.score > highScore) {
			//	localStorage.gameHighscore = Math.floor(diz.score);
	        //}
	        
	        pauseButton.disableInteractive();
	        diz.scene.launch('scnGameOver');

	    };

	    this.physics.add.overlap(this.projectiles, this.halangan, this.hitHalangan, null, this);

	    if(this.physics.add.overlap(this.player, this.halangan, this.hitPlayerByHalangan, null, this)) {
	    	this.isGameRunning = false;
	    }

		/////////////////
		///// INPUT /////
		/////////////////

		this.cursors = this.input.keyboard.createCursorKeys();
		this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

		this.input.on('gameobjectover', function (pointer, gameObject){
	    
		    if (!btnClicked) return;
		    
			if (gameObject == pauseButton) {
			    pauseButton.setTint(0x616161);
			}
		   
		}, this);
		
		this.input.on('gameobjectout', function (pointer, gameObject){
		    
		    if (!btnClicked) return;
		    
		    if (gameObject == pauseButton) {
		        pauseButton.setTint(0xffffff);
		    }
		    
		}, this);
		
		this.input.on('gameobjectdown', function (pointer, gameObject){
		    
		    if (gameObject == pauseButton) {
		        pauseButton.setTint(0x616161);
		        btnClicked = true;
		    }
		    
		}, this);

		this.input.on('gameobjectup', function (pointer, gameObject){

		    if (gameObject == pauseButton) {
		        pauseButton.setTint(0xffffff);
		        this.scene.launch('scnPause');
		        this.scene.pause('scnPlay');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
		    }

		}, this);
	
		this.input.on('pointerup', function (pointer, currentlyOver){
		    
		    btnClicked = false;
		    
		}, this);
	}

	shootBeam() {
	    var beam = new playerBeam(this);
	    beam.angle = 90;
	    beam.setScale(2.5);
	    beam.setDepth(19);
	    // 1.3 play sounds
	    this.beamSound.play();
	}

	hitHalangan(projectile, halangan) {

	    var explosionHalangan = new Explosion(this, halangan.x, halangan.y);
	    explosionHalangan.setScale(10);
	    explosionHalangan.setDepth(21);

	    projectile.destroy();
	    halangan.destroy();
	    this.score += 15;
	    this.label_score.text = this.score;

	    // 1.4 play sounds
	    this.explosionSound.play();
	}

	hitPlayerByHalangan(player, halangan) {

	    var explosionPlayer = new Explosion(this, player.x, player.y);
	    explosionPlayer.setScale(10);
	    explosionPlayer.setDepth(21);

	    var explosionHalangan = new Explosion(this, halangan.x, halangan.y);
	    explosionHalangan.setScale(10);
	    explosionHalangan.setDepth(21);

	    player.destroy();
	    halangan.destroy();

	    this.isGameRunning = false;
	    this.gameOver();

	    // 1.4 play sounds
	    this.explosionSound.play();
	}

	update() {
		if (this.isGameRunning) {
			
			this.player.setVelocity(0);

			this.multiplier = this.multiplier + 0.001;
	    	if (this.multiplier > 4){
	    	    this.multiplier = 4;
	    	}

	    	if (this.esc.isDown){
				this.scene.launch('scnPause');
			    this.scene.pause('scnPlay');
		        if (localStorage.SFX == 1){
		            this.clickSound.play();
		        }
			}

			if(this.cursors.left.isDown || this.keyA.isDown)
	        {
	            this.player.setVelocityX(-300);
	        }
	        else if(this.cursors.right.isDown || this.keyD.isDown)
	        {
	            this.player.setVelocityX(300);
	        }

	        if(this.cursors.up.isDown || this.keyW.isDown)
	        {
	            this.player.setVelocityY(-300);
	        }
	        else if(this.cursors.down.isDown || this.keyS.isDown)
	        {
	            this.player.setVelocityY(300);
	        }

	        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
		    	if(this.player.active){
		        	this.shootBeam();
		    	}
		    }
		    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
		    	var beam = this.projectiles.getChildren()[i];
		    	beam.update();
		    }

		    // Mengakses Array Background
	        for (let i = 0; i < this.backgrounds.length; i++)
	        {
	        	// Mengakses Array di dalam array
	        	for (var j = 0; j < this.backgrounds[i].length; j++)
	        	{
	        		// Mengambil data kecepatan, lalu mengurangi nilai x sebanyak kecepatan tersebut
	        		this.backgrounds[i][j].x -= (this.backgrounds[i][j].getData('kecepatan') * this.multiplier);
	        
	        		// Atur ulang posisi jika posisi sudah berada di kiri kanvas
	        		// Karena titik posisi adalah tengah dan ukuran background adalah 1366
	        		// Maka background akan tidak terlihat ketika mencapai posisi MINUS 1366/2
	        		if (this.backgrounds[i][j].x <= -(1366/2))
	        		{
	        			// Digunakan untuk pengaturan ulang posisi agar tidak ada jarak antar background
	        			// Misal, posisi x background adalah -685, selisih 2 pixel dengan -(1366/2) = -683
	        			// Selisih tersebut akan ditambahkan untuk pengaturan ulang posisi
	        			var diff = 1365 * this.backgrounds.length - 1;
	        
	        			// Mengatur ulang posisi menjadi di sebelah kanan kanvas + selisih akhir sebelum atur ulang posisi
	        			this.backgrounds[i][j].x = this.backgrounds[i][j].x + diff;
	        		}
	        	}
	        }

	        for (let i = 0; i < 4; i++)
	        {
	        	
	        }

	        // Perulangan untuk membuat Halangan Baru
	        if (this.timerHalangan == 0)
	        {
	            
	            var acak_y_halangan = Math.floor((Math.random() * 680) + 60);
	            
	            var halanganBaru = this.physics.add.sprite(1600, acak_y_halangan, 'obs_Asteroid');
	            halanganBaru.body.setImmovable(true);
				halanganBaru.body.setAllowGravity(false);
	            halanganBaru.setOrigin(0.0);
	            halanganBaru.setScale(0.6);
	            halanganBaru.setData("status_aktif", true);
	            halanganBaru.setData("kecepatan", Math.floor((Math.random() * 15) + 10))
	            halanganBaru.setDepth(25);
	        
	            // Memasukkan peluru ke dalam array agar dapat di akses kembali
	            this.halangan.push(halanganBaru);
	        
	            // Mengatur ulang waktu untuk memunculkan halangan selanjutnya. Acak antara 10 sampai 50 frame)
	            this.timerHalangan = Math.floor((Math.random() * 40) + (30 / this.multiplier));
	        }
	            
	        // Mengakses array halangan
	        for (let i = this.halangan.length - 1; i >= 0; i--) 
	        {
	        	// Menggerakkan halangan sebanyak kecepatan per frame
	        	this.halangan[i].x -= (this.halangan[i].getData("kecepatan") * this.multiplier);
	        
	        	// Jika halangan sudah di posisi kurang dari -200 (sudah tidak terlihat)
	        	if (this.halangan[i].x < -200)
	        	{
	        		// Hancurkan halangan untuk mengurangi beba n memori
	        		this.halangan[i].destroy();
	        		
	        		// Hapus dari array halangan yang sudah dihancurkan
	        		this.halangan.splice(i, 1);
	        		
	        		break;
	        	}
	        }
	        
	        this.timerHalangan--;
	        
	        
	        for (let i = this.halangan.length - 1; i >= 0; i--)
	    	{
	    		// Jika posisi halangan + 50 lebih kecil dari karakter dan status halangan masih aktif
	    		if (this.player.x > this.halangan[i].x + 100 && this.halangan[i].getData("status_aktif") == true)
	    		{
	    			// Ubah status halangan menjadi tidak aktif
	    			this.halangan[i].setData("status_aktif", false);
	    		}
	    	}
	    	
	    		    	
	        
		}
	}
}