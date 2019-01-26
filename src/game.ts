/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @license      Digitsensitive
 */

/// <reference path="./phaser.d.ts"/>

import "phaser";
import { MainScene } from "./scenes/mainScene";


// main game configuration
const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  transparent:true
};

// game class
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
    this.oldScroll = 0;
  }
  oldScroll:integer
  
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
  var game = new Game(config);
  window.addEventListener("wheel",(ev:WheelEvent)=>{
    console.log("game.oldScroll",game.oldScroll);
    console.log("this.oldScroll",ev.offsetY);
    if(game.oldScroll <= ev.offsetY){
      game.oldScroll = ev.offsetY;
      game.scene.scenes[0].moveRocket(true);
    }
      
    
      
  });
});



