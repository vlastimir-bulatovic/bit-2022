function Piece(pieceCurrentPosition) {
    this.availableSquares = [];
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
			let piece;
            
            switch(i){
                case 2:
                    piece = document.createElement("img");
				    piece.src = images.white.pawn;
                    break;
                case 7:
                    piece = document.createElement("img");
				    piece.src = images.black.pawn;
                    break;
                case 8:
                    if (j === 1 || j === 8) {
                        piece = document.createElement("img");
                        piece.src = images.black.rook;
                    } else if (j === 2 || j === 7) {
                        piece = document.createElement("img");
                        piece.src = images.black.horse;
                    }else if (j === 6 || j === 3) {
                        piece = document.createElement("img");
                        piece.src = images.black.bishop;
                    }else if(j===4) {
                        piece = document.createElement("img");
                        piece.src = images.black.queen;
                    }else {
                        piece = document.createElement("img");
                        piece.src = images.black.king;
                    }

                    break;  
                case 1:
                    if (j === 1 || j === 8) {
                        piece = document.createElement("img");
                        piece.src = images.white.rook;
                    } else if (j === 2 || j === 7) {
                        piece = document.createElement("img");
                        piece.src = images.white.horse;
                    } else if (j === 3 || j === 6) {
                        piece = document.createElement("img");
                        piece.src = images.white.bishop;
                    } else if (j === 4) {
                        piece = document.createElement("img");
                        piece.src = images.white.queen;
                    }else {
                        piece = document.createElement("img");
                        piece.src = images.white.king;
                    }

                    break;

                default :
                    break;
            }
  

			piece && square.append(piece);

			row.append(square);
		}

        board.append(row);
        
    }
}

main();