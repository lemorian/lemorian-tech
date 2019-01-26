import { Physics } from "phaser";

/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @license      Digitsensitive
 */

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
    this.speed = 20;
   
  }

  rocket:Phaser.GameObjects.Image;
  speed:integer
  platforms:Physics.Arcade.StaticGroup
  preload(): void {
    

    
    this.load.image('rocket', './src/boilerplate/assets/sprites/rocket-small.svg');
    this.load.image('red', './src/boilerplate/assets/particles/red.png');
    this.load.image('town','./src/boilerplate/assets/skies/cityscape2.svg');
  }

  create(): void {
    this.cameras.main.transparent = true;
    
    
    

       
       
        
       
        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(0,window.innerHeight-100, 'town');
        this.platforms.create(400,window.innerHeight-100, 'town');
        this.platforms.create(800,window.innerHeight-100, 'town');
        this.platforms.create(1200,window.innerHeight-100, 'town');
        this.platforms.create(1600,window.innerHeight-100, 'town');
        this.platforms.create(2000,window.innerHeight-100, 'town');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: Phaser.BlendModes.ADD
        });

        this.rocket = this.add.image(window.innerWidth/2, window.innerHeight-80, 'rocket');

        /*  logo.setVelocity(0,900);
         logo.setBounce(0, 0);
         logo.setCollideWorldBounds(true); 
         // platforms = this.physics.add.staticGroup();
      //platforms.
         */

        emitter.startFollow(this.rocket,0,80);
      
  }

  moveRocket(goUp:boolean)
  {
    
    console.log("goup",goUp);
    if(this.rocket !== undefined && this.rocket !== null){
      if(goUp)
        this.rocket.setY(this.rocket.y-this.speed);
      else
        this.rocket.setY(this.rocket.y+this.speed);
    }

    if(this.rocket.y <= 0 ){
      this.rocket.y = window.innerHeight - (this.rocket.height/2);
    }
  }
}
