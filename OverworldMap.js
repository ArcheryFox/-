class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {}


      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;

      this.isCutscenePlaying = true;
    }
   
    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
          this.lowerImage, 
          utils.withGrid(9) - cameraPerson.x, 
          utils.withGrid(6) - cameraPerson.y
          )
      }
    
      drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
          this.upperImage, 
          utils.withGrid(9) - cameraPerson.x, 
          utils.withGrid(6) - cameraPerson.y
        )
      } 
    
      isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
      }
    
      mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {
    
          let object = this.gameObjects[key];
          object.id = key;
    
          //TODO: determine if this object should actually mount
          object.mount(this);
    
        })
      }

      async startCutscene(events) {
        this.isCutscenePlaying = true;
    
        for (let i=0; i<events.length; i++) {
          const eventHandler = new OverworldEvent({
            event: events[i],
            map: this,
          })
          await eventHandler.init();
        }
    
        this.isCutscenePlaying = false;

        Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))
      };


      addWall(x,y) {
        this.walls[`${x},${y}`] = true;
      }
      removeWall(x,y) {
        delete this.walls[`${x},${y}`]
      }
      moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const {x,y} = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x,y);
      }
    
    }

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "media/maps/room1.png",
        upperSrc: "media/maps/room2.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(2),
                y: utils.withGrid(8),
                src: "media/characters/samon/samon-Sheet.png",
            }),
            npc: new Person({
                isPlayerControlled: false,
                x: utils.withGrid(2),
                y: utils.withGrid(3),
                src: "media/peaceful/0001.png",
                behaviorLoop: [
                  { type: "walk",  direction: "left" },
                  { type: "walk",  direction: "up" },
                  { type: "walk",  direction: "right" },
                  { type: "walk",  direction: "down"},
        ]    
            }),  
            girl: new Person({
              isPlayerControlled: false,
                x: utils.withGrid(2),
                y: utils.withGrid(6),
                src: "media/characters/vanessa/van-Sheet.png",
                behaviorLoop: [
          { type: "walk",  direction: "left"},
          { type: "stand",  direction: "up", time: 800 },
          { type: "stand",  direction: "right", time: 1200 },
          { type: "walk",  direction: "right" },
          { type: "stand",  direction: "up", time: 1200 },
                ]
            })
        },
            walls: {
              
              [utils.asGridCoord(1,1)] : true,
              [utils.asGridCoord(2,1)] : true,
              [utils.asGridCoord(3,1)] : true,
              [utils.asGridCoord(4,1)] : true,
              [utils.asGridCoord(5,9)] : true,
              [utils.asGridCoord(5,1)] : true,
              [utils.asGridCoord(5,8)] : true,
              [utils.asGridCoord(6,1)] : true,
              [utils.asGridCoord(6,2)] : true,
              [utils.asGridCoord(6,9)] : true,
              [utils.asGridCoord(6,3)] : true,
              [utils.asGridCoord(6,4)] : true,
              [utils.asGridCoord(7,8)] : true,
              [utils.asGridCoord(7,5)] : true,
              [utils.asGridCoord(7,1)] : true,
              [utils.asGridCoord(7,3)] : true,
              [utils.asGridCoord(7,4)] : true,
              [utils.asGridCoord(7,2)] : true,
              [utils.asGridCoord(7,7)] : true,
              [utils.asGridCoord(4,9)] : true,
      [utils.asGridCoord(0,1)] : true,
      [utils.asGridCoord(0,2)] : true,
      [utils.asGridCoord(0,3)] : true,
      [utils.asGridCoord(0,4)] : true,
      [utils.asGridCoord(0,5)] : true,
      [utils.asGridCoord(0,6)] : true,
      [utils.asGridCoord(0,7)] : true,
      [utils.asGridCoord(0,8)] : true,
      [utils.asGridCoord(1,2)] : true,

      // [utils.asGridCoord(1,9)] : true,
      [utils.asGridCoord(2,2)] : true,
      // [utils.asGridCoord(2,9)] : true,
      [utils.asGridCoord(3,2)] : true,
      [utils.asGridCoord(3,9)] : true,
      [utils.asGridCoord(4,2)] : true,
      
      [utils.asGridCoord(4,8)] : true,
      [utils.asGridCoord(5,4)] : true,
      [utils.asGridCoord(5,3)] : true,
      [utils.asGridCoord(5,5)] : true,
      [utils.asGridCoord(5,7)] : true,
      [utils.asGridCoord(6,5)] : true,
      [utils.asGridCoord(6,8)] : true,
      [utils.asGridCoord(7,6)] : true,

            },
    }

   
}