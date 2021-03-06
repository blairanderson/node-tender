# Node Goal Tender

## TODO LIST:

- [ ] should be able to submit the form
- [ ] form should save to localstorage and redirect
- [ ] should be able to fetch data that was saved to localstorage
- [ ] should be able to fetch products with collection using localstorage username:api_key
- [ ] should be able to logout, which clears the "me" key in localstorage,


## What Is This?
This is a [sails app](http://sailsjs.org). Its like rails but runs on node with express and is frontend agnostic.

Currently the client lives inside `./client` and is the beginning of a javascript application.

The Javascript client is built with watchify(aka browserify --watch) that builds a single `assets/js/app.js` file where our entire app is run.

## Commands

run the app with `sails lift`

build the client with `watchify -t hbsfy -t reactify client/app.js -o assets/js/app.js`

To create a new model/controller pair, run `sails generate api $thing$`


## How To

Create Routes in `config/routes` - Default crud routes are created by the **sails** module with blueprints.
*you can override blueprints in the controller or in `blueprints.js`*

Update Asset Pipeline in `config/pipeline`
*You change how assets/styles/javascripts files are injected into the build*  



## Dependencies

* authentication: https://github.com/kasperisager/sails-generate-auth
* Client Deps: https://github.com/substack/watchify



*another app idea*

**Monumentors** - finding mentors more easily

user can create profile
everyone is a student.
user can toggle mentor status [:pending, :active]
mentor can add topics that they teach.
mentor can create refined descriptions under each.
