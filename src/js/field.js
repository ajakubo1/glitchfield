/**
 * Created by claim on 14.08.16.
 */


var GlitchField = function () {
    this.glitchPipes = [ new GlitchPipe(0), new GlitchPipe(1), new GlitchPipe(2), new GlitchPipe(3) ];
};

GlitchField.prototype.render = function (context) {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].render(context);
    }
};

GlitchField.prototype.logic = function (time) {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].logic(time);
    }
};