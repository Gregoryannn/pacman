function ReadyMessage() {}
ReadyMessage.prototype.setVisibilityDuration = function(duration) {
    this._timeToHide = duration;
};
ReadyMessage.prototype.getTimeToHide = function() {
    return this._timeToHide;
};
ReadyMessage.prototype.isVisible = function() {
    return this._timeToHide > 0;
};

ReadyMessage.prototype.hide = function() {
    this._timeToHide = 0;
};

ReadyMessage.prototype.tick = function() {
    if (this.isVisible()) {
        this._timeToHide--;
    }
};

ReadyMessage.prototype.draw = function(ctx) {
    if (!this.isVisible()) {
        return;
    }

    ctx.fillStyle = "#ffff00";
    ctx.font = "bold 18px 'Lucida Console', Monaco, monospace"
};