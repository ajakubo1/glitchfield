/**
 * Created by claim on 14.08.16.
 */


var Holder = function () {
    this.context = CanvasHolder.getContext('pipes');
    this.glitchPipes = [ new Pipe(0), new Pipe(1), new Pipe(2), new Pipe(3) ];
};

Holder.prototype.render = function () {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].render(this.context);
    }
};

Holder.prototype.logic = function (time) {
    for (var i = 0; i < this.glitchPipes.length; i += 1) {
        this.glitchPipes[i].logic(time);
    }
};