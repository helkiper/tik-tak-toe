import Game from './Game';
import $ from 'jquery';
let game = new Game();

$(function () {
    Game.restore();
    Game.showStatistic();
    game.start();

});

$('#mainCanvas').click(function (event) {
    game.handleClick.call(game, event);
});

$('#resetStatistics').click(function () {
    Game.resetStatistic();
});

$('#newGame').click(function () {
   game.start();
});

window.onunload = function () {
    Game.save();
};
