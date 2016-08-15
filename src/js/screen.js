/**
 * Created by claim on 14.08.16.
 */


var GlitchScreen = function () {
    this.positionX = 0;
    this.positionY = 0;
    this.width = 650;
    this.height = 600;
    this.image = PROTOTYPER.generateRectCanvas(this.width, this.height, {
        x: 2,
        y: 2,
        width: this.width - 5,
        height: this.height - 5,
        lineWidth: 2,
        fillStyle: '#222222'
    });
};

GlitchScreen.prototype.render = function (context) {
    context.drawImage(this.image, 150, 0);
};

GlitchScreen.prototype.logic = function (time) {

};