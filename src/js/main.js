var config = {
    canvas: 'game',
    width: 800,
    height: 600
};

var GAME = function () {


};

GAME.prototype.render = function (context) {

};

GAME.prototype.logic = function (time) {
    console.info(time)
};

GAME.prototype.init = function () {

};

var game = new GAME();
var gamegine = new GAMEGINE(config, game);
gamegine.start();