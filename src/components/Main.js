require('normalize.css');
require('styles/App.css');

import React from 'react';
import {Stage, Text, Sprite} from 'react-pixi';
import {Point} from 'pixi.js';

import config from 'config'

import TileMap from 'components/TileMap';
import bunny from 'images/bunny.png';

class AppComponent extends React.Component {
    render() {
        var bunnyX = config.stage.width / 2;
        var bunnyY = config.stage.height / 2 - 100;

        return (
            <div className="index">
                <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
                <Stage width={config.stage.width} height={config.stage.height}>
                    <Sprite image={bunny} x={bunnyX} y={bunnyY} key="1"/>
                    <TileMap map="assets/desert.json"/>
                    <Text text="This is a pixi stage :)"
                          x={config.stage.width / 2}
                          y={config.stage.height / 2}
                          anchor={new Point(0.5,0)}
                          key="2"/>
                </Stage>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
