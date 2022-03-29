class GameObject {
    constructor(config) {
        this.x = config.x || 6;
        this.y = config.y || 10 ;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "media/ряв.PNG",
        });
    }
    update() {

    }
}