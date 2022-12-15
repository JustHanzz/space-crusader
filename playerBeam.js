class playerBeam extends Phaser.GameObjects.Sprite{
  constructor(scene){

    var x = scene.player.x;
    var y = scene.player.y;

    super(scene, x, y, "player_Beam");

    scene.add.existing(this);

    this.play("anim_Beam");
    scene.physics.world.enableBody(this);
    this.body.setImmovable(true);
    this.body.setAllowGravity(false);
    this.body.velocity.x = 1000;

    scene.projectiles.add(this);
  }


  update(){

    if(this.x > 1400 ){
      this.destroy();
    }
  }
}
