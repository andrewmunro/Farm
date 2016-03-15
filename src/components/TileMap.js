import React from 'react';
import PixiTiled from 'pixi-tiled';
import {DisplayObjectContainer, CustomPIXIComponent} from 'react-pixi';
import PIXI from 'pixi.js';

class TileMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        PIXI.loader.add(this.props.map, res => {
            let tiledMap = CustomPIXIComponent(this.createReactTiledmap(res.tiledMap));

            this.setState({
                tiledMap: tiledMap
            });
        });

        PIXI.loader.load();
    }

    createReactTiledmap(map) {
        return {
            customDisplayObject: () => { return map; },
            applySpecificDisplayObjectProps: () => {}
        };
    }

    render() {
        if(!this.state.tiledMap) {
            return (
                <DisplayObjectContainer>
                </DisplayObjectContainer>
            );
        }

        let TiledMap = this.state.tiledMap;

        return (
            <DisplayObjectContainer>
                <TiledMap/>
            </DisplayObjectContainer>
        );
    }
}

export default TileMap;
