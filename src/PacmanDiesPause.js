function PacmanDiesPause(scene) {
    this._scene = scene;
    this._duration = 15;
    this._timer = 0;
    this._active = false;
    this._pacman = scene.getPacman();
}

PacmanDiesPause.prototype.setDuration = function(duration) {
    this._duration = duration;
};

PacmanDiesPause.prototype.tick = function() {
    if (!this._active) {
        return;
    }
    this._timer++;
    if (this._timer > this._duration) {
        this._active = false;
        this._pacman.setStrategy(new PacmanDiesStrategy(this._pacman));
    }
};

PacmanDiesPause.prototype.activate = function() {
    this._timer = 0;
    this._active = true;
};

PacmanDiesPause.prototype.isActive = function() {
    return this._active;
};