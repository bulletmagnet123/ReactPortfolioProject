import Phaser from "phaser"
import { SceneOne } from "./SceneOne"
export let gameconfig = {
    width: 1080,
    height: 720,
    backgroundColor: '#FFFFF',
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    type: Phaser.AUTO,
    scene: [SceneOne],
    parent: 'index',
    physics: {
        default: `arcade`,
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    platforms: true,
    groundPlat: true,
    player: true,
    cursors: true
}





