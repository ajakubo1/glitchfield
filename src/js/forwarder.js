/**
 * Created by claim on 17.08.16.
 */

var EventForwarder = function () {
    this.eventQueue = {};
};

EventForwarder.prototype.fire = function (eventName, event) {
    if (this.eventQueue[eventName]) {
        for (var i = 0; i < this.eventQueue[eventName].length; i += 1) {
            this.eventQueue[eventName][i](event);
        }
    }
};

EventForwarder.prototype.subscribe = function (eventName, callback) {
    if (this.eventQueue[eventName] === undefined) {
        this.eventQueue[eventName] = [];
    }
    this.eventQueue[eventName].push(callback);
};

EventForwarder = new EventForwarder();