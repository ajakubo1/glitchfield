/**
 * Created by claim on 17.08.16.
 */

var CanvasHolder = function () {
    this.maps = {};

    this.load = function (id) {
        var canvas = document.getElementById(id);
        canvas.width = 650;
        canvas.height = 600;
        var context = canvas.getContext('2d');
        this.maps[id] = {
            canvas: canvas,
            context: context
        };
    };

    this.get = function(id) {
        if (this.maps[id] === undefined) {
            this.load(id);
        }
        return this.maps[id];
    }
};

CanvasHolder.prototype.getContext = function(id) {
    return this.get(id).context;
};

CanvasHolder.prototype.getCanvas = function(id) {
    return this.get(id).canvas;
};

CanvasHolder = new CanvasHolder();