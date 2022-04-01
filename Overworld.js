class Overworld {
<<<<<<< Updated upstream
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(`.conteinerCanv`);
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
        // this.canvas.height = 300;
        // this.canvas.width = 400;
    } 
=======
  constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(`.conteinerCanv`);
      this.ctx = this.canvas.getContext('2d');
      this.map = null;
      // this.canvas.height = 300;
      // this.canvas.width = 400;
  }
>>>>>>> Stashed changes

  startGameLoop() {
      const step = () => {
        //Clear off the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
          const cameraPerson = this.map.gameObjects.hero;

<<<<<<< Updated upstream
                Object.values(this.map.gameObjects).forEach(object => {
                    object.update({
                      arrow: this.directionInput.direction,
                      map: this.map,
                    });
                })
          //Draw Lower layer
          this.map.drawLowerImage(this.ctx, cameraPerson);
    
          //Draw Game Objects
          Object.values(this.map.gameObjects).forEach(object => {
            
            object.sprite.draw(this.ctx, cameraPerson);
          })
    
          //Draw Upper layer
          this.map.drawUpperImage(this.ctx, cameraPerson);
=======
              Object.values(this.map.gameObjects).forEach(object => {
                  object.update({
                    arrow: this.directionInput.direction
                  });
              })
        //Draw Lower layer
        this.map.drawLowerImage(this.ctx, cameraPerson);
  
        //Draw Game Objects
        Object.values(this.map.gameObjects).forEach(object => {
>>>>>>> Stashed changes
          
          object.sprite.draw(this.ctx, cameraPerson);
        })
  
        //Draw Upper layer
        this.map.drawUpperImage(this.ctx, cameraPerson);
        
        requestAnimationFrame(() => {
          step();   
        })
      }
      step();
   }
  
   init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
  
    this.directionInput = new DirectionInput();
    this.directionInput.init();
  
    this.startGameLoop();
   }
  }