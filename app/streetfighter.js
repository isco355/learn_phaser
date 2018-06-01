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

 var player;

 function preload ()
 {
  this.load.image('background', '../assets/27199.png');
  this.load.spritesheet('Iory','../assets/IoryYagamiv3.png' , {frameWidth:87,frameHeight:105});
  this.load.image('ground', '../assets/platform.png');
  this.load.spritesheet('Iorywalk','../assets/Iorywalk.png' , {frameWidth:70,frameHeight:112});
  this.load.spritesheet('IoryDown','../assets/IoryDown.png' , {frameWidth:87,frameHeight:105});
  this.load.spritesheet('Iorybeing','../assets/Iorybegin.png' , {frameWidth:87,frameHeight:105});


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
    key: 'left',
    frames: this.anims.generateFrameNumbers('Iory',{start : 0, end : 9}),
    frameRate : 12,
    repeat : -1

  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('Iorywalk',{start : 0, end: 10 }),
    frameRate: 8,
    repeat : 5

});


this.physics.add.collider(player,platforms);
cursors = this.input.keyboard.createCursorKeys();

}
function update()
{

  if (cursors.right.isDown)
{
    player.anims.play('right', false);
    player.setVelocityX(150);

}
else if(cursors.left.isDown){
  player.anims.play('left',false);
  player.setVelocityX(-150)
}
else
{
  player.anims.play('left',true)
  player.setVelocityX (0)

}
}
function render(){}
