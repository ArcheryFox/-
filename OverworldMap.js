class OverworldMap {
    constructor(config) {
      this.overworld = null;
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {};
      this.cutsceneSpaces = config.cutsceneSpaces || {};

      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;

      this.isCutscenePlaying = false;
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

      

      checkForActionCutscene(){
        const hero = this.gameObjects["hero"];
        const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
        const match = Object.values(this.gameObjects).find(object => {
          return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
        });
        
        if(!this.isCutscenePlaying && match && match.talking.length) {
      this.startCutscene(match.talking[0].events)
        }
      }

      checkForFootstepCutscene() {
        const hero = this.gameObjects["hero"];
        const match = this.cutsceneSpaces[ `${hero.x},${hero.y}` ];
        if (!this.isCutscenePlaying && match ) {
          this.startCutscene( match[0].events)
        }
      }

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
                y: utils.withGrid(4),
                src: "media/characters/samon/samon-Sheet.png",
            }),
              
            girl: new Person({
              isPlayerControlled: false,
                x: utils.withGrid(3),
                y: utils.withGrid(6),
                src: "media/characters/vanessa/van-Sheet.png",
                behaviorLoop: [
                  { type: "stand",  direction: "left" , time: 1000},
                  { type: "walk",  direction: "left"},
                  { type: "walk",  direction: "down"},
                  { type: "stand",  direction: "down", time: 1800 },
                  { type: "stand",  direction: "right", time: 1800 },
                  { type: "walk",  direction: "right"},
                  { type: "walk",  direction: "right"},
                  { type: "walk",  direction: "up"},
                  { type: "stand",  direction: "left", time: 1800 },
                  { type: "walk",  direction: "left"},
               ],
                // talking: [
                //   {
                //     events: [
                //       // {type: "textMessage", faceHero: "girl"},
                // //       {type: "textMessage", text: "stop"},
                //     ]
                //   },
                  
                // ]
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

      [utils.asGridCoord(1,9)] : true,
      [utils.asGridCoord(2,2)] : true,
      [utils.asGridCoord(2,9)] : true,
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

        }

        
    }
  }