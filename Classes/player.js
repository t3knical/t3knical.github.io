const Vector3 = require('./Vector3.js');
const Quaternion = require('./Vector3.js');
const uuid = require('uuid');
const shortid = require("shortid");

module.exports = class Player {
    constructor(){
        this.username = '';
        this.userrank = 0;
        this.id = shortid.generate();        
        this.position = new Vector3(0, 0, 0);
        this.rotation = new Quaternion(0, 0, 0, 0);
    }
}