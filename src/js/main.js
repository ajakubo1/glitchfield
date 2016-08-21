var config = {
    canvas: 'glitch',
    width: 650,
    height: 600
};

var GAME = function () {
    this.glitchField = new Holder();
    this.map = new Map();
    this.glitchScreen = new GlitchScreen(this.map);

    this.netting = new Netting();
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
    console.info(event.keyCode);
    key = event.keyCode;
    if (key === 65 || key === 37) {
        //UP
        EventForwarder.fire('keyup_left', event);
    } else if (key === 87 || key === 38) {
        //LEFT
        EventForwarder.fire('keyup_up', event);
    } else if (key === 83 || key === 40) {
        //DOWN
        EventForwarder.fire('keyup_down', event);
    } else if (key === 68 || key === 39) {
        //RIGHT
        EventForwarder.fire('keyup_right', event);
    }
};

GAME.prototype.click = function (event) {
    console.info('click');
    EventForwarder.fire('mouse_click', event);
};


document.addEventListener('DOMContentLoaded', function () {
    var game = new GAME();
    config.canvas = CanvasHolder.getCanvas(config.canvas);
    window.addEventListener('keyup', game.keyPressed);
    window.addEventListener('click', game.click);
    var gamegine = new GAMEGINE(config, game);
    gamegine.start();
});

