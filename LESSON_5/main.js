
var arrayNumbers = [1,2,3,4,5,6,7,8];
var arrayLetters = ['a','b','c','d','e','f','g','h'];

var figure = {
    whiteKing: '&#9812',
    whiteQueen: '&#9813',
    whiteRook: '&#9814',
    whiteBishop: '&#9815',
    whiteKnight: '&#9816',
    whitePawn: '&#9817',
    
    blackKing: '&#9818',
    blackQueen: '&#9819',
    blackRook: '&#9820',
    blackBishop: '&#9821',
    blackKnight: '&#9822',
    blackPawn: '&#9823'
};




var wrapper = document.createElement('div');
wrapper.className = 'wrapper';


var top1 = document.createElement('div');
top1.className = 'top';

var bottom = document.createElement('div');
bottom.className = 'bottom';

var right = document.createElement('div');
right.className = 'right';

var left = document.createElement('div');
left.className = 'left';

var board = document.createElement('div');
board.className = 'board';

document.body.appendChild(wrapper);
wrapper.appendChild(top1);
wrapper.appendChild(bottom);
wrapper.appendChild(right);
wrapper.appendChild(left);
wrapper.appendChild(board);




for (var i = 0; i <= (arrayLetters.length-1); i++){
    var letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = '<h4>'+arrayLetters[i]+'</h4>';
    top1.appendChild(letter);    
}



for (var i = 0; i <= (arrayLetters.length-1); i++){
    var letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = '<h4>'+arrayLetters[i]+'</h4>';
    bottom.appendChild(letter);    
}



for (var i = (arrayNumbers.length-1); i >= 0; i--){
    var letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = '<h4>'+arrayNumbers[i]+'</h4>';
    left.appendChild(letter); 
}



for (var i = (arrayNumbers.length-1); i >= 0; i--){
    var letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerHTML = '<h4>'+arrayNumbers[i]+'</h4>';
    right.appendChild(letter); 
}



for (var line = (arrayNumbers.length-1); line>=0; line--){
    
    var row_num = document.createElement('div');
    row_num.className = 'row_num';
    board.appendChild(row_num);
    
    for (var column = 0; column<=(arrayLetters.length-1); column++){
        
        // линия №8 на доске (черные фигуры)
        if (line == (arrayNumbers.length-1)) {
            if (column == 0 || column == 7){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.blackRook;
                    row_num.appendChild(cell);
                }
            else if (column == 1 || column == 6){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.blackKnight;
                    row_num.appendChild(cell);
                }
            else if (column == 2 || column == 5){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.blackBishop;
                    row_num.appendChild(cell);
                }
            else if (column == 3){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.blackQueen;
                    row_num.appendChild(cell);
                }
            else if (column == 4){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.blackKing;
                    row_num.appendChild(cell);
                }
            
            
        }
        
        else if (line == (arrayNumbers.length-2)){
        
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = figure.blackPawn;
            row_num.appendChild(cell);
            
        }
        
        else if (line == (arrayNumbers.length-7)){
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = figure.whitePawn;
            row_num.appendChild(cell);
        }
      
        else if (line == (arrayNumbers.length-8)){
            if (column == 0 || column == 7){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.whiteRook;
                    row_num.appendChild(cell);
                }
            else if (column == 1 || column == 6){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.whiteKnight;
                    row_num.appendChild(cell);
                }
            else if (column == 2 || column == 5){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.whiteBishop;
                    row_num.appendChild(cell);
                }
            else if (column == 3){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.whiteQueen;
                    row_num.appendChild(cell);
                }
            else if (column == 4){
                    var cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.innerHTML = figure.whiteKing;
                    row_num.appendChild(cell);
                }            
        }
        
       
        else {
        var cell = document.createElement('div');
        cell.className = 'cell';
        row_num.appendChild(cell);
        }          
    }
}





