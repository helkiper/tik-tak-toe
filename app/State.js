// import CellStates from './CellStates';

var cross = {
    isCross: true,
    isZero: false,
    isEmpty: false,
    draw: (board) => board.drawCross()
};
var zero = {
    isCross: false,
    isZero: true,
    isEmpty: false,
    draw: (board) => board.drawZero()
};
var empty = {
    isCross: false,
    isZero: false,
    isEmpty: true,
    draw: (board) => {}
};

class State {
    constructor() {
        // this.cells = [];
        // this.nextState = null;
        // // this.steps = 0;
        // // this.crossCount = 0;
        this.init();
        //todo
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
        this.crossStateSum = 0;
        this.zeroStateSum = 0;
    };


    addItem(x, y)
    {
        if (this.cells[x][y] === '') {
            //todo
            this.cells[x][y] = this.nextState;
            if (this.check()) {
                console.log('game over')
            }

            this.nextState = this.nextState === 'X' ? '0' : 'X';
            this.steps++;
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
                return true;
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
        if (diagSum === 3 || reversDiagSum === 3) {
            return true;
        }

        return false;
        // let sumCross = 0;
        // let sumZero = 0;
        // let addent = 1;
        //
        // for (let i = 0; i < 3; i++) {
        //     for (let j = 0; j < 3; j++) {
        //         if (this.cells[i][j].isCross) {
        //             sumCross += addent;
        //         } else if (this.cells[i][j].isZero) {
        //             sumZero += addent;
        //         }
        //         addent *= 2;
        //     }
        // }
        //
        // if (this.nextState.isCross && this.testResult(sumCross)) {
        //     //todo gameover
        //     console.log('cross. Game Over!');
        // }
        // if (this.nextState.isZero && this.testResult(sumZero)) {
        //     //todo gameover
        //     console.log('zero. Game Over!');
        // }
    };

    testResult(sumToTest)
    {
        console.log(sumToTest);
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

        for (let res of PREDEFFINED_RESULTS) {
            if (res & sumToTest === res) {
                console.log(res & sumToTest);
                return true;
            }
        }

        return false;
    };

    getCell(x, y) {
        return this.cells[x][y];
    }
};

export default State;