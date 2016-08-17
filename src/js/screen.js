/**
 * Created by claim on 14.08.16.
 */


var GlitchScreen = function (map) {
    this.positionX = 0;
    this.positionY = 0;
    this.width = 650;
    this.height = 600;
    this.map = map;
    this.image = PROTOTYPER.generateRectCanvas(this.width, this.height, {
        x: 2,
        y: 2,
        width: this.width - 5,
        height: this.height - 5,
        lineWidth: 2,
        fillStyle: '#222222'
    });

    this.moveUp = function (event) {
        console.info('Up on glitchscreen')
    };

    this.moveDown = function (event) {
        console.info('Down on glitchscreen')
    };

    this.moveLeft = function (event) {
        console.info('Left on glitchscreen')
    };

    this.moveRight = function (event) {
        console.info('Right on glitchscreen')
    };

    EventForwarder.subscribe('keyup_up', this.moveUp);
    EventForwarder.subscribe('keyup_down', this.moveDown);
    EventForwarder.subscribe('keyup_left', this.moveLeft);
    EventForwarder.subscribe('keyup_right', this.moveRight);
};

GlitchScreen.prototype.render = function (context) {
    context.drawImage(this.image, 0, 0);
};

GlitchScreen.prototype.logic = function (time) {

};