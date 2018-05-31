var config = {
    type: Phaser.AUTO,
    width: 888,
    height: 472,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update,
        render: render

    }
};

var game = new Phaser.Game(config);
 var scene = '../assets/27199.png';

 var player;

 function preload ()
 {
   var Iory_spritesheet = '../assets/IoryYagamiv3.png';
  this.load.image('background',scene);
  this.load.spritesheet('Iory',Iory_spritesheet , {frameWidth:87,frameHeight:105});
  this.load.image('ground', '../assets/platform.png');
}


 var platforms;
//
 function create ()
 {
   this.add.image(444,236,'background');


  platforms = this.physics.add.staticGroup();

  player = this.physics.add.sprite(100,400,'Iory');

  platforms.create(400, 568, 'ground').setScale(4).refreshBody();
  platforms.create(190,465,'ground');
  platforms.create(590,465,'ground');
  platforms.create(800,465,'ground');



  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('Iory',{start : 0, end: 9 }),
    frameRate: 12,
    repeat : -1
});

this.physics.add.collider(player,platforms);
cursors = this.input.keyboard.createCursorKeys();

}
function update()
{

  if (cursors.left.isDown)
{
    player.anims.play('right', true);
    player.setVelocityX(150);

}
else if(cursors.left.isUp)
{
  player.setVelocityX (0)

}
}
function render(){}
