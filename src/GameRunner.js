var FPS = 50;
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 300;

function GameRunner() {
    this._ctx = this._createCanvasContext();
    this._fpsCounter = new FPSCounter();
    this._game = new Game();
    this._keyboard = new Keyboard(this._game);
}

GameRunner.prototype.run = function() {
    var that = this;
    setInterval(function() { that._gameLoop(); }, 1000 / FPS);
};

GameRunner.prototype._createCanvasContext = function() {
    var CANVAS_ID = 'canvas';
    $('<canvas id="' + CANVAS_ID + '" width="' + CANVAS_WIDTH + '" height="' + CANVAS_HEIGHT + '"></canvas>').appendTo('body');
    var canvas = document.getElementById(CANVAS_ID);
    return canvas.getContext('2d');
};

GameRunner.prototype._gameLoop = function() {
    this._fpsCounter.begin();

    this._keyboard.handleKeypresses();
    this._game.tick();

    this._clearCanvas();
    this._game.draw(this._ctx);

    this._fpsCounter.end();
};

GameRunner.prototype._clearCanvas = function() {
    this._ctx.fillStyle = "black";
    this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
};