class Sprite {
    constructor(config){

        this.room1 = new Image();
        this.room1.src = config.src;
        this.room1.onload = () => {
            this.isLoaded = true;
        }

        this.animations = config.animations || {
            "idle-down": [ [0,0] ],
            "idle-right": [ [0,1] ],
            "idle-up": [ [0,2] ],
            "idle-left": [ [0,3] ],
            "walk-down": [ [1,0], [0,0], [3,0], [0,0] ],
            "walk-right": [ [1,1], [0,1], [3,1], [0,1] ],
            "walk-up": [ [1,2], [0,2], [3,2], [0,2] ],
            "walk-left": [ [1,3], [0,3], [3,3], [0,3] ],
        }
        this.currentAnimation = "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 12;
        this.animationFrameProgress = this.animationFrameLimit;


        this.gameObject = config.gameObject;
    }
    get frame(){
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if(this.currentAnimation != key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;

        }
    }

    updateAnimationProgress() {
        //процесс тика фрейма
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //сброс счётчика кадров
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0
        }
    }

    draw(ctx, cameraPerson){
        const x = this.gameObject.x + utils.withGrid(9) - cameraPerson.x;
        const y = this.gameObject.y - 22 + utils.withGrid(6) - cameraPerson.y;

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.room1,
            frameX * 20,frameY * 40,
            20,40,
            x,y,
            20,40
            )
            this.updateAnimationProgress();
    }

    
}