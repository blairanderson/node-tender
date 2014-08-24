# Node Goal Tender

## What Is This?
This is a [sails app](http://sailsjs.org). Its like rails but runs on node with express and is frontend agnostic. 

Currently the client lives inside `./client` and is the beginning of a javascript application. 

The Javascript client is built with watchify(aka browserify --watch) that builds a single `assets/js/app.js` file where our entire app is run. 

## Commands

run the app with `sails lift`

build the client with `watchify client/app.js -o assets/js/app.js`

To create a new model/controller pair, run `sails generate api $thing$`


## How To

Create Routes in `config/routes` - Default crud routes are created by the **sails** module with blueprints. 
*you can override blueprints in the controller or in `blueprints.js`*

Update Asset Pipeline in `config/pipeline` 
*You change how assets/styles/javascripts files are injected into the build*  
 

