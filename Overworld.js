class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(`.conteinerCanv`);
        this.ctx = this.canvas.getContext('2d');
    }

    init(){
        cl(`HELLO`, this)
    }

}