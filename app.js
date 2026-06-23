/*-------------------------------- Constants --------------------------------*/
// const arrWin = [
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 4, 8],
// [2, 4, 6], 
// [0, 3, 6], 
// [1, 4, 7], 
// [2, 5, 8]]
/*-------------------------------- Variables --------------------------------*/
let currentPlayer = 'X'

/*------------------------ Cached Element References ------------------------*/

// const idFirst =document.querySelector('#0')
const squares =document.querySelectorAll('.sqr')
const message =document.querySelector('#message')
const reset =document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/
squares.forEach(function(square){

    square.addEventListener('click',function(){

        event.target.textContent = currentPlayer;

        if (currentPlayer === 'X'){

            currentPlayer = 'O'

        }

        else {
            currentPlayer = 'X'
        }
        // checkWinner()

        // if the textContent of square[0] is 'X' && square[1] is "X" && square[2] is "X"
        // then update message - x won
        if (squares[0].textContent === 'X' && squares[1].textContent === 'X'  && squares[2].textContent === 'X' ){

            message.textContent = 'X is Winner';
        }

        else if (squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X') {

            message.textContent = 'X is Winner';

        }

        else if (squares[6].textContent === 'X' && squares[7].textContent === 'X'  && squares[8].textContent === 'X') {

            message.textContent = 'X is Winner';

        }
        //next combo 2,4,6
         else if (squares[0].textContent === 'X' && squares[4].textContent === 'X'  && squares[8].textContent === 'X' ){

            message.textContent = 'X is Winner';
        }

        else if (squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X') {

            message.textContent = 'X is Winner';

        }
       
        else if (squares[0].textContent === 'X' && squares[3].textContent === 'X'  && squares[6].textContent === 'X') {

            message.textContent = 'X is Winner';

        }

         else if (squares[1].textContent === 'X' && squares[4].textContent === 'X'  && squares[7].textContent === 'X' ){

            message.textContent = 'X is Winner';
        }

        else if (squares[2].textContent === 'X' && squares[5].textContent === 'X' && squares[8].textContent === 'X') {

            message.textContent = 'X is Winner';

        }
        //for O is the winner 

        else if (squares[0].textContent === 'O' && squares[1].textContent === 'O'  && squares[2].textContent === 'O' ){

            message.textContent = 'O is Winner';
        }

        else if (squares[3].textContent === 'O' && squares[4].textContent === 'O' && squares[5].textContent === 'O') {

            message.textContent = 'O is Winner';

        }

        else if (squares[6].textContent === 'O' && squares[7].textContent === 'O'  && squares[8].textContent === 'O') {

            message.textContent = 'O is Winner';

        }
        //next combo 2,4,6
         else if (squares[0].textContent === 'O' && squares[4].textContent === 'O'  && squares[8].textContent === 'O' ){

            message.textContent = 'O is Winner';
        }

        else if (squares[2].textContent === 'O' && squares[4].textContent === 'O' && squares[6].textContent === 'O') {

            message.textContent = 'O is Winner';

        }
       
        else if (squares[0].textContent === 'O' && squares[3].textContent === 'O'  && squares[6].textContent === 'O') {

            message.textContent = 'O is Winner';

        }

         else if (squares[1].textContent === 'O' && squares[4].textContent === 'O'  && squares[7].textContent === 'O' ){

            message.textContent = 'O is Winner';
        }

        else if (squares[2].textContent === 'O' && squares[5].textContent === 'O' && squares[8].textContent === 'O') {

            message.textContent = 'O is Winner';

        }

        else {

            message.textContent = 'no one wins😅';
        }



    })
})

reset.addEventListener('click', function () {

    squares.forEach(square => square.textContent = '');

    message.textContent = 'Start Playing';

    turn = 'X';      // reset turn
    winner = false;  // reset game state (if you use it)
});
/*-------------------------------- Functions --------------------------------*/

// function checkWinner(){


// }
