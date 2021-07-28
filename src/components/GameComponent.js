import React from 'react'
import { Component } from 'react';
import { gameconfig } from '../GameConfig'
import { IonPhaser } from '@ion-phaser/react'

class GameComponent extends Component {
    render (){
        return(
            <div>
                <h1>This is my game</h1>
                <IonPhaser game={gameconfig} />
            </div>
        )
    }
}

export default GameComponent;