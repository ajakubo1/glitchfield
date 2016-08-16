/**
 * Created by claim on 15.08.16.
 */

var Map = function () {
    this.image = PROTOTYPER.generateRectCanvas(2000, 2000, {
        x: 0,
        y: 0,
        width: 2000,
        height: 2000,
        lineWidth: 2,
        fillStyle: '#FF3366'
    });
};

Map.prototype.getPixels = function (x, y, width, height) {
    
};