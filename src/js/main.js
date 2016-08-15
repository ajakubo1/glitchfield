var config = {
    canvas: 'game',
    width: 800,
    height: 600
};

var GAME = function () {
    this.glitchField = new GlitchField();
    this.glitchScreen = new GlitchScreen();
};

GAME.prototype.render = function (context) {
    context.clearRect(0, 0, config.width, config.height);
    this.glitchField.render(context);
    this.glitchScreen.render(context);
};

GAME.prototype.logic = function (time) {
    this.glitchField.logic(time);
};

GAME.prototype.init = function () {

};


document.addEventListener('DOMContentLoaded', function () {
    var game = new GAME();
    var gamegine = new GAMEGINE(config, game);
    gamegine.start();
});

