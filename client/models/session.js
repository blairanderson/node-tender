
// database
var appDB = window.localforage;


module.exports = function Session(opts) {
  this.db = appDB;
}

