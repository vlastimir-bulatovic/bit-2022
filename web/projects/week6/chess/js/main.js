function Piece(pieceCurrentPosition) {
    this.availableSquares = [];
    this.attackingFields = [];
    this.isCaptured = false;
    this.currentPosition = pieceCurrentPosition;
}





function Pawn(pawnCurrentPosition) {
	Piece.call(this, pawnCurrentPosition);
    this.isMoved = false;
}


Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;


const imageFolder = "./assets/";
const images = {
	white: {
		pawn: `${imageFolder}pawn_white.png`,
		rook: `${imageFolder}rook_white.png`,
		horse: `${imageFolder}horse_white.png`,
		bishop: `${imageFolder}bishop_white.png`,
		queen: `${imageFolder}queen_white.png`,
		king: `${imageFolder}king_white.png`,
	},
	black: {
		pawn: `${imageFolder}pawn_black.png`,
		rook: `${imageFolder}rook_black.png`,
		horse: `${imageFolder}horse_black.png`,
		bishop: `${imageFolder}bishop_black.png`,
		queen: `${imageFolder}queen_black.png`,
		king: `${imageFolder}king_black.png`,
	},
};

const blacklastMove = {
    piece: "pawn",
    from: "73",
    to: "53"
}

Object.freeze(images);
const pieces = [];


const board = document.querySelector("#board");

function main() {
    for(let i = 8; i >= 1; i--){

        let row = document.createElement("div");
        row.classList.add(`row`, (i%2 === 0) ? `row-even`:`row-odd`)
        for (let j = 1; j <= 8; j++) {
			let square = document.createElement("div");
			square.classList.add("square");
            square.dataset.position = `${i}${j}`;

            square.addEventListener("click", (even) => {
				const selectedPiece = square.firstChild;
                console.log(selectedPiece.dataset.figure)
			});
			let piece;
            
            switch(i){
                case 2:
                    piece = document.createElement("img");
				    piece.src = images.white.pawn;
                    piece.dataset.figure =`pawn`
                    break;
                case 7:
                    piece = document.createElement("img");
				    piece.src = images.black.pawn;
					piece.dataset.figure = `pawn`;
                    break;
                case 8:
                    if (j === 1 || j === 8) {
                        piece = document.createElement("img");
                        piece.src = images.black.rook;
						piece.dataset.figure = `rook`;
                    } else if (j === 2 || j === 7) {
                        piece = document.createElement("img");
                        piece.src = images.black.horse;
                        piece.dataset.position = `${i}${j}`;
						piece.dataset.figure = `horse`;
                    }else if (j === 6 || j === 3) {
                        piece = document.createElement("img");
                        piece.src = images.black.bishop;
						piece.dataset.figure = `bishop`;
                    }else if(j===4) {
                        piece = document.createElement("img");
                        piece.src = images.black.queen;
						piece.dataset.figure = `queen`;
                    }else {
                        piece = document.createElement("img");
                        piece.src = images.black.king;
						piece.dataset.figure = `king`;
                    }

                    break;  
                case 1:
                    if (j === 1 || j === 8) {
                        piece = document.createElement("img");
                        piece.src = images.white.rook;
						piece.dataset.figure = `rook`;
                    } else if (j === 2 || j === 7) {
                        piece = document.createElement("img");
                        piece.src = images.white.horse;
						piece.dataset.figure = `horse`;
                    } else if (j === 3 || j === 6) {
                        piece = document.createElement("img");
                        piece.src = images.white.bishop;
                        piece.dataset.figure = `bishop`;
                    } else if (j === 4) {
                        piece = document.createElement("img");
                        piece.src = images.white.queen;
                        piece.dataset.figure = `queen`;
                    }else {
                        piece = document.createElement("img");
                        piece.src = images.white.king;
                        piece.dataset.figure = `king`;
                    }

                    break;

                default:
                    break;
            }
            if(piece){
				piece.dataset.position = `${i}${j}`;
                square.append(piece);
			}

			row.append(square);
		}

        board.append(row);
        
    }
}

main();
