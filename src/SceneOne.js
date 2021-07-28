import Phaser from "phaser";
import { Weapon, WeaponPlugin } from 'phaser3-weapon-plugin'

export class SceneOne extends Phaser.Scene {
    constructor() {
        super({
            key: `SceneOne`
        });
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('space', 'assets/space.jpg');
        this.load.image('laser', 'assets/bullet.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 })
        this.load.spritesheet('ship', 'assets/ship.png', { frameWidth: 72, frameHeight: 72 })
    }

    create() {
        this.plugins.installScenePlugin(
            'WeaponPlugin',
            WeaponPlugin,
            'weapons',
            this
        );
        var bullet = this.add.image('bullet')

        const Mbullet = this.add.sprite(0, 0, 'bullet')
        const speed = 200;
        const speedDiag = speed * (1 / 1.44);
        console.log("SCENE ONE ACTIVATED");
        let background = this.add.image(960, 540, "space");
        background.scaleX = 3.9;
        background.scaleY = 3.5;

        //MAIN GAME CODE FOR JUMPING AND SHIT
        this.platforms = this.physics.add.staticGroup();

        this.groundPlat = this.platforms.create(400, 680, "ground");
        this.groundPlat.scaleX = 1;
        this.groundPlat.scaleY = 1;
        this.groundPlat.refreshBody();

        //copypasted player code
        this.player = this.physics.add.sprite(300, 450, 'ship', 0);

        //player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'idle',
            repeat: -1,
            frameRate: 10,
            frames: this.anims.generateFrameNames('ship', { start: 0, end: 3 })
        })
        this.player.play('idle');

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.startFollow(this.player);

        
    }

    update() {
        const speed = 200;
        const speedDiag = speed * (1 / 1.44);
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.tweens.add({
                targets: this.player,
                angle: -90, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            //player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.tweens.add({
                targets: this.player,
                angle: 90, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            this.player.setVelocityX(+speed);
            //player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            //player.anims.play('turn');
        }
        if (this.cursors.up.isDown) {
            this.tweens.add({
                targets: this.player,
                angle: 0, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            this.player.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(+speed);
            this.tweens.add({

                targets: this.player,
                angle: 180, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
        } else {
            this.player.setVelocityY(0);
        }
        if (this.cursors.left.isDown && this.cursors.up.isDown) {
            this.tweens.add({
                targets: this.player,
                angle: -45, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            this.player.body.setVelocityX(-speedDiag);
            this.player.body.setVelocityY(-speedDiag);
        }
        if (this.cursors.right.isDown && this.cursors.up.isDown) {
            this.tweens.add({
                targets: this.player,
                angle: 45, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            this.player.body.setVelocityX(speedDiag);
            this.player.body.setVelocityY(-speedDiag);
        }
        if (this.cursors.right.isDown && this.cursors.down.isDown) {
            this.player.body.setVelocityX(speedDiag);
            this.player.body.setVelocityY(speedDiag);
            this.tweens.add({
                targets: this.player,
                angle: 135, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
        }
        if (this.cursors.left.isDown && this.cursors.down.isDown) {
            this.tweens.add({
                targets: this.player,
                angle: -135, // '+=100'
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 100,
                repeat: 0,
                yoyo: false
            });
            this.player.body.setVelocityX(-speedDiag);
            this.player.body.setVelocityY(speedDiag);
        }
    }
}