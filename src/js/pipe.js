/**
 * Created by claim on 14.08.16.
 */

var GlitchPipe = function (which) {
    this.width = 150;
    this.height = 150;
    this.y = which * this.height;
    this.image = PROTOTYPER.generateRectCanvas(this.width, this.height, {
        x: 2,
        y: 2,
        width: this.width - 5,
        height: this.height - 5,
        lineWidth: 2,
        fillStyle: '#222222'
    });
};

GlitchPipe.prototype.render = function (context) {
    context.drawImage(this.image, 0, this.y);
};

GlitchPipe.prototype.logic = function (time) {

};