/**
 * Created by claim on 21.08.16.
 */

var Defender = function () {
    this.context = CanvasHolder.getContext('defender');

    this.moveUp = function (event) {
        console.info('Up on netting')
    };

    this.moveDown = function (event) {
        console.info('Down on netting')
    };

    this.moveLeft = function (event) {
        console.info('Left on netting')
    };

    this.moveRight = function (event) {
        console.info('Right on netting')
    };

    this.draw = function () {
        var width = 650;
        var height = 600;

    };

    EventForwarder.subscribe('keyup_up', this.moveUp);
    EventForwarder.subscribe('keyup_down', this.moveDown);
    EventForwarder.subscribe('keyup_left', this.moveLeft);
    EventForwarder.subscribe('keyup_right', this.moveRight);
    this.draw();
};

