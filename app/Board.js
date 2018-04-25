class Board {
    constructor(context)
    {
        this.context = context;
        this.size = 450;
        this.cellSize = this.size / 3;
    };

    draw(state = null)
    {
        this.context.clearRect(0, 0, this.size, this.size);

        this.context.strokeStyle = 'blue';
        this.context.lineWidth = 4;

        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.lineTo(0, this.size);
        this.context.lineTo(this.size, this.size);
        this.context.lineTo(this.size, 0);
        this.context.lineTo(0, 0);

        this.context.moveTo(0, this.cellSize);
        this.context.lineTo(this.size, this.cellSize);
        this.context.moveTo(0, this.cellSize * 2);
        this.context.lineTo(this.size, this.cellSize * 2);

        this.context.moveTo(this.cellSize, 0);
        this.context.lineTo(this.cellSize, this.size);
        this.context.moveTo(this.cellSize * 2, 0);
        this.context.lineTo(this.cellSize * 2, this.size);
        this.context.stroke();

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.context.save();
                    this.context.translate(j * this.cellSize, i * this.cellSize);

                    if (state.getCell(j, i) === 'X') {
                        this.drawCross();
                    }
                    if (state.getCell(j, i) === 'O') {
                        this.drawZero();
                    }
                this.context.restore();
            }
        }
    };

    drawCross()
    {
        this.context.strokeStyle = 'red';
        this.context.lineCap = 'round';

        let size = this.cellSize / 4;

        this.context.beginPath();
        this.context.moveTo(size, size);
        this.context.lineTo(size * 3, size * 3);
        this.context.moveTo(size * 3, size);
        this.context.lineTo(size, size * 3);
        this.context.stroke();
    };

    drawZero()
    {
        this.context.strokeStyle = 'green';

        let size = this.cellSize / 4;

        this.context.beginPath();
        this.context.arc(size * 2, size * 2, size, 0, Math.PI * 2, true);
        this.context.stroke();
    };
}

export default Board;