import State from './State';
import Board from './Board';

class Game {
    constructor()
    {
        this.state = new State();
        this.nextChar = 'x';
        this.board = new Board(document.getElementById('mainCanvas').getContext('2d'));
    };

   start()
   {
        this.state.init();
        this.board.draw(this.state);
   };

    handleClick(event)
    {
        let pos = this.defineCell(event.offsetX, event.offsetY);
        this.state.addItem(pos.x, pos.y);
        this.board.draw(this.state);
    };

    defineCell(mouseX, mouseY)
    {
        var cellSize = 150; //todo get from board
        let x = parseInt(mouseX / cellSize);
        let y = parseInt(mouseY / cellSize);
        return {x, y};
    };

    setStateCell(point)
    {
        if (this.state[point.y][point.x] === 0) {
            this.state[point.y][point.x] = this.nextChar;
            this.nextChar = this.nextChar === 'x' ? '0' : 'x';
        }
    };

   checkState()
   {
        let sumCross = 0;
        let sumZero = 0;
        let addent = 1;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.state[i][j] === 'x') {
                    sumCross += addent;
                } else if (this.state[i][j] === '0') {
                    sumZero += addent;
                }
                addent *= 2;
            }
        }

        if (this.nextChar !== 'x' && this.testResult(sumCross)) {
            //todo gameover
        }
        if (this.nextChar !== '0' && this.testResult(sumZero)) {
            //todo gameover
        }
   };

    testResult(result)
    {
        const PREDEFFINED_RESULTS = [
            448,  //[1, 1, 1][0, 0, 0][0, 0, 0]
            56,  //[0, 0, 0][1, 1, 1][0, 0, 0]
            7,  //[0, 0, 0][0, 0, 0][1, 1, 1]
            292,  //[1, 0, 0][1, 0, 0][1, 0, 0]
            146,  //[0, 1, 0][0, 1, 0][0, 1, 0]
            73,  //[0, 0, 1][0, 0, 1][0, 0, 1]
            273,  //[1, 0, 0][0, 1, 0][0, 0, 1]
            84,  //[0, 0, 1][0, 1, 0][1, 0, 0]
        ];

        for (let res in PREDEFFINED_RESULTS) {
            if (res & result === res) {
                return true;
            }
        }

        return false;
    };
};

export default Game;
