# react + reflux + webpack template

### getting started

In order to start the project we will be using npm scripts:

1. install all project dependencies 

```shell
npm install
```

other commands:



build

```shell
./node_modules/.bin/webpack
```



production mode

```shell
./node_modules/.bin/webpack -p
```



watch

```shell
./node_modules/.bin/webpack --watch
```



(I'd preffer to not have to install webpack globally and have all the necessary dependencies stated in the package.json file. In this way, whenever the project is ported to another machine/VM/docker container, etc the project will be self sufficient to both: run in production mode and developer mode).



------

### working modes

#### developer mode

TBD: explain what are the expectations and working flow

#### production mode

TBD: explain what are the expectations and working flow



------

### project structure

- **src**: source code of the project itself
- **www**: destination folder
- ​




------

### dependencies

#### overall view

The best way to have an overall view is to check the [package.json](./package.json) file, here below commented:

``` javascript
{
  "dependencies": {
    "webpack",                     // bundling
    "path",                        //  - tool: path resolving (@webpack.config.js)
    "css-loader",                  //  - loader: returns css code, resolves imports and url(...)
    "sass-loader",                 //  - loader: converts sass to css
    "node-sass",                   //  - dependecy: required by 'sass-loader'
    "extract-text-webpack-plugin", //  - plugin: no need to include extensions on require/import
    "html-webpack-plugin"          //  - plugin: creates a new index.html
  }
}
```

*NOTE: do not use the file above as package.json since strict JSON does not addmit comments.*



#### webpack

used for:

1. Bundle all js files into one.
2. Bundle all css files into one and import it to the project.

##### How?

Specify an entry point, and then webpack will calculate all the dependencies that this file requires (including css files: see loaders). Then specify an output point, where all the files will be bundled together to. See [webpack.config.js](/Users/juangreco/Documents/Projects/sites/cmed/webpack.config.js) :

```javascript
var webpack = require('webpack');
var path = require('path');

var APP_DIR   = path.resolve( __dirname, 'src/');
var BUILD_DIR = path.resolve( __dirname, 'www/');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: '/bundle.js'
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ]
  }
};

module.exports = config;
```



#### babel

used for:



------

### tools



