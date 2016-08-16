var config = {
    canvas: 'game',
    width: 800,
    height: 600
};

var GAME = function () {
    this.glitchField = new GlitchField();
    this.map = new Map();
    this.glitchScreen = new GlitchScreen(this.map);
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

GAME.prototype.keyPressed = function (event) {
    console.info(event.keyCode)
    key = event.keyCode;
    if (key === 65 || key === 37) {
        //UP
    } else if (key === 87 || key === 38) {
        //LEFT
    } else if (key === 83 || key === 40) {
        //DOWN
    } else if (key === 68 || key === 39) {
        //RIGHT
    }
};

GAME.prototype.click = function (event) {
    console.info('click')
};


document.addEventListener('DOMContentLoaded', function () {
    var game = new GAME();
    window.addEventListener('keyup', game.keyPressed);
    window.addEventListener('click', game.click);
    var gamegine = new GAMEGINE(config, game);
    gamegine.start();
});

