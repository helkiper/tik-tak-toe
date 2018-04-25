// var context = document.getElementById('mainCanvas').getContext('2d');
// var board = new Board(context);
// var game = new Game(board);

// window.onload = function() {

    // todo move into game
    // game.start();

// };
// document.getElementById('mainCanvas').onclick = function(event){
    // game.handleClick.call(game, event);
// };

import Game from './Game';
import $ from 'jquery';
var game = new Game();

$(function () {
    console.log('game start');
    game.start();

});

$('#mainCanvas').click(function (event) {
    console.log(event);
    game.handleClick.call(game, event);
});
