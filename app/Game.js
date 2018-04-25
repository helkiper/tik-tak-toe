import State from './State';
import Board from './Board';
import Coockie from './Coockie';

let statistics = {
    X: 0,
    O: 0,
    draw: 0
};

class Game {
    constructor()
    {
        this.state = new State(this);
        this.board = new Board(document.getElementById('mainCanvas').getContext('2d'));
        this.active = false;
    };

   start()
   {
        this.state.init();
        this.board.draw(this.state);

        this.active = true;
   };

   over(result)
   {
       this.active = false;
       statistics[result]++;
       Game.showStatistic();
       Game.save();
   }

    handleClick(event)
    {
        if (this.active) {
            let pos = Game.defineCell(event.offsetX, event.offsetY);
            this.state.addItem(pos.x, pos.y);
            this.board.draw(this.state);
        }
    };

    static defineCell(mouseX, mouseY)
    {
        let cellSize = 150;
        let x = parseInt(mouseX / cellSize);
        let y = parseInt(mouseY / cellSize);
        return {x, y};
    };

    static showStatistic()
    {
        $('#Xwin').text('X: ' + statistics.X);
        $('#0win').text('0: ' + statistics.O);
        $('#draw').text('draw: ' + statistics.draw);
    }

    static resetStatistic()
    {
        statistics.X = 0;
        statistics.O = 0;
        statistics.draw = 0;

        Game.save();
        Game.showStatistic();
    }

    static save()
    {
        let str = JSON.stringify(statistics);
        Coockie.setCookie('statistics', str);
    }

    static restore()
    {
        let str = Coockie.getCookie('statistics');
        statistics = JSON.parse(str);
    }
}

export default Game;
