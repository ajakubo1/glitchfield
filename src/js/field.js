/**
 * Created by claim on 14.08.16.
 */


var GlitchField = function () {
    this.canvas = document.getElementById('pipes');
    this.canvas.width = 150;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.glitchPipes = [ new GlitchPipe(0), new GlitchPipe(1), new GlitchPipe(2), new GlitchPipe(3) ];
};

GlitchField.prototype.render = function () {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].render(this.context);
    }
};

GlitchField.prototype.logic = function (time) {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].logic(time);
    }
};