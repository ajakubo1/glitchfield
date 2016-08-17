/**
 * Created by claim on 14.08.16.
 */


var GlitchField = function () {
    this.context = CanvasHolder.getContext('pipes');
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