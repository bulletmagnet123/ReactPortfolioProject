import Phaser from 'phaser'

export class Scene0 extends Phaser.Scene {
    constructor() {
        super({
            key: `Scene0`
        });
    }
    preload() {
        this.load.image("space", "../assets/space.jpg")
    }

    create() {
        let background = this.add.image(960, 540, "space");
    }
}
