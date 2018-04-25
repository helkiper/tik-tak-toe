class State {
    constructor(game) {
        this.game = game;
        this.init();
    };

    init()
    {
        this.cells = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        this.nextState = 'X';
        this.steps = 0;
    };


    addItem(x, y)
    {
        if (this.cells[x][y] === '') {
            //todo
            this.cells[x][y] = this.nextState;
            if (this.check()) {
                this.game.over(this.nextState);
            }

            this.nextState = this.nextState === 'X' ? 'O' : 'X';

            this.steps++;
            if (this.steps === 9) {
                this.game.over('draw');
            }
        }
    };

    check()
    {
        for (let i=0; i<3; i++) {
            let sum = 0;
            for (let j=0; j<3; j++) {
                if (this.cells[i][j] === this.nextState) {
                    sum++;
                }
            }
            if (sum === 3) {
                return sum === 3;
            }
        }

        for (let i=0; i<3; i++) {
            let sum = 0;
            for (let j=0; j<3; j++) {
                if (this.cells[j][i] === this.nextState) {
                    sum++;
                }
            }
            if (sum === 3) {
                return true;
            }
        }

        let diagSum = 0;
        let reversDiagSum = 0;
        for (let i=0; i<3; i++) {
            if (this.cells[i][i] === this.nextState) {
                diagSum++;
            }
            if (this.cells[i][2-i] === this.nextState) {
                reversDiagSum++;
            }
        }
        return diagSum === 3 || reversDiagSum === 3;


    };

    getCell(x, y) {
        return this.cells[x][y];
    }
}

export default State;