class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {}


      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;
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
        Object.values(this.gameObjects).forEach(o => {
    
          //TODO: determine if this object should actually mount
          o.mount(this);
    
        })
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
                x: utils.withGrid(1),
                y: utils.withGrid(5),
                src: "media/characters/samon/samon-Sheet.png",
            }),
            hero2: new Person({
                isPlayerControlled: false,
                x: utils.withGrid(4),
                y: utils.withGrid(3),
                src: "media/characters/vanessa/van-Sheet.png",    
            })
        },
            walls: {
      [utils.asGridCoord(0,1)] : true,
      [utils.asGridCoord(0,2)] : true,
      [utils.asGridCoord(0,3)] : true,
      [utils.asGridCoord(0,4)] : true,
      [utils.asGridCoord(0,5)] : true,
      [utils.asGridCoord(0,6)] : true,
      [utils.asGridCoord(0,7)] : true,
      [utils.asGridCoord(0,8)] : true,
      [utils.asGridCoord(1,9)] : true,
      [utils.asGridCoord(2,9)] : true,
      [utils.asGridCoord(1,2)] : true,
      [utils.asGridCoord(2,2)] : true,
      [utils.asGridCoord(3,2)] : true,
      [utils.asGridCoord(4,2)] : true,
      [utils.asGridCoord(3,9)] : true,
      [utils.asGridCoord(4,3)] : true,
      [utils.asGridCoord(4,7)] : true,
      [utils.asGridCoord(4,8)] : true,
      [utils.asGridCoord(5,4)] : true,
      [utils.asGridCoord(5,3)] : true,
      [utils.asGridCoord(5,5)] : true,
      [utils.asGridCoord(5,7)] : true,
      [utils.asGridCoord(6,7)] : true,
      [utils.asGridCoord(6,5)] : true,
      [utils.asGridCoord(7,6)] : true,
            },
    }

    /* BusStop: {
        lowerSrc: "media/maps/room1.png",
        upperSrc: "",
        gameObjects: {
            hero: new Person({
                x: 3,
                y: 6,
                src: "media/characters/samon/samon-Sheet.png",
            }), 
            hero2: new GameObject({
                x: 4,
                y: 6,
                src: "media/characters/vanessa/van-Sheet.png",    
            })
        }
    },
    Bus: {
    } */
}