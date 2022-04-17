function Wall(image) {
    this._image = image;
    this._rect = new Rect({ x: 0, y: 0, w: TILE_SIZE, h: TILE_SIZE });
}

Wall.prototype.getRect = function() {
    return this._rect;
};

Wall.prototype.getImage = function() {
    return this._image;
};

Wall.prototype.draw = function(ctx) {

        ctx.drawImage(ImageManager.getImage(this._image), this.getX(), this.getY());

        /*--------------------------- Rect delegation --------------------------------*/

        Wall.prototype.setPosition = function(position) {

            this._rect.setPosition(position);
        };

        Wall.prototype.getPosition = function() {
            return { x: this._x, y: this._y };
        };

        Wall.prototype.getX = function() {
            return this._rect.getX();
        };

        Wall.prototype.getY = function() {
            return this._rect.getY();
        };

        Wall.prototype.getLeft = function() {
            return this._rect.getLeft();
        };

        Wall.prototype.getRight = function() {
            return this._rect.getRight();
        };

        Wall.prototype.getTop = function() {
            return this._rect.getTop();
        };

        Wall.prototype.getBottom = function() {
            return this._rect.getBottom();
        };

        Wall.prototype.getWidth = function() {
            return this._rect.getWidth();
        };

        Wall.prototype.getHeight = function() {
            return this._rect.getHeight();
        };