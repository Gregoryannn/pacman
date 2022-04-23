function PacmanPlaySceneStrategy(pacman, scene) {
    this._pacman = pacman;
    this._scene = scene;
}

PacmanPlaySceneStrategy.prototype.tick = function() {
    if (this._scene.getReadyMessage().isVisible() ||
        this._scene.getPointsMessage().isVisible() ||
        this._scene.getPacmanDiesPause().isActive()) {
        return;
    }

    this._pacman.advanceFrame();
    this._pacman.move();
    this._pacman.checkIfOutOfMapBounds();
    this._pacman.handleCollisionsWithWalls();
    this._pacman.handleCollisionsWithPellets();
    this._pacman.handleCollisionsWithGhosts();
};