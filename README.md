react-redux-pixi-seed
==========

A boilerplate for building React-Pixi apps with Redux, ES6 and webpack.
Create/control a [Pixi.js](https://github.com/GoodBoyDigital/pixi.js) canvas using [React](https://github.com/facebook/react).

## What you get

* React 0.13
* React Pixi 0.7
* Redux 3.3
* ES6, ES7 & JSX to ES5 via babel
* webpack with react hot loader, and other useful loaders
* [Local CSS](https://github.com/webpack/css-loader#local-scope)
* Karma, mocha, chai & sinon for testing with mocking examples
* Basic flux architecture with app actions, stores and example web API usage
* React router ([feature/react-router](https://github.com/badsyntax/react-seed/tree/feature/react-router))
* Material UI ([feature/material-ui](https://github.com/badsyntax/react-seed/tree/feature/material-ui))

## Getting started

### Installing with git

```bash
git clone --depth=1 https://github.com/andrewmunro/react-redux-pixi-seed.git my-project
```

## npm scripts

* `npm start` - Build and start the app in dev mode at http://localhost:8000
* `npm test` - Run the tests
* `npm run dist` - Build a production build

## Examples

### Writing components:

```js
// Filename: Main.js

require('normalize.css');
require('styles/App.css');

import React from 'react';
import {Stage, Text, Sprite} from 'react-pixi';
import {Point} from 'pixi.js';

import config from 'config'

import bunny from 'images/bunny.png';

class AppComponent extends React.Component {
    render() {
        var bunnyX = config.stage.width / 2;
        var bunnyY = config.stage.height / 2 - 100;

        return (
            <div className="index">
                <Stage width={config.stage.width} height={config.stage.height}>
                    <Sprite image={bunny} x={bunnyX} y={bunnyY} key="1"/>
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

```

## Conventions

* Use fat arrows for anonymous functions
* Don't use `var`. Use `let` and `const`.

## Credits

This project was initially generated using https://github.com/banderson/generator-redux

## License

Copyright (c) 2016 Andrew Munro

MIT (http://opensource.org/licenses/MIT)
