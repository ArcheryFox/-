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
      ctx.drawImage(this.lowerImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y)
    }
  
    drawUpperImage(ctx, cameraPerson) {
      ctx.drawImage(this.upperImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y)
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
            hero2: new GameObject({
                isPlayerControlled: false,
                x: utils.withGrid(4),
                y: utils.withGrid(6),
                src: "media/characters/vanessa/van-Sheet.png",    
            })
        },
            walls: {
                [utils.asGridCoord(4,6)] : true,
                [utils.asGridCoord(5,6)] : true,
                [utils.asGridCoord(3,6)] : true,
                [utils.asGridCoord(2,6)] : true,
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