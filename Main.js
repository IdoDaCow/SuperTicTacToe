// <button style="width: 100%; height: 100%;" class="gamebuttons" id=""><i class="fa fa-times fa-2x" id="game_x" aria-hidden="true"></i></button>
var gamechecker =  5; // checks if the user is allowed to put a piece in a specific board. starts at 5 because the first board used is the middle one (board #5)
var turn = 0; // 0 = x, 1 = o
var locked= 0;
var eventinterval;
var event = document.getElementById('eventbox');
var eventseconds = 5;
var count = 0;
var intervalcooldown = 0;
var xwins = 0;
var owins = 0;
for(var i = 1; i<10; i++)
document.getElementById('5_btn'+i).setAttribute("style","border: solid 2px red;");
function PutPiece(buttonId, board)
{
    var square = parseInt(buttonId[5]);
    var button = document.getElementById(buttonId);
    var inner = button.innerHTML;
    if(board==gamechecker && inner.length==0 && intervalcooldown == 0)
    {
        if(turn==0)
            button.innerHTML = '<i class="fa fa-times" style="color: red;" aria-hidden="true"></i>';
        else
            button.innerHTML = '<i class="fa fa-circle-thin" style="color: blue;" aria-hidden="true"></i>';
        count++;
        if(count==81)
            winalert();
        for(var j = 1; j<10; j++)
            document.getElementById(gamechecker+'_btn'+j).setAttribute("style","border: solid 2px black;");
        gamechecker=square;
        for(var i = 1; i<10; i++)
            document.getElementById(gamechecker+'_btn'+i).setAttribute("style","border: solid 2px red;");
        if(turn==0)
        {
            turn=1;
            document.getElementById('turntitle').setAttribute("style", "color: blue");
            document.getElementById('turntitle').innerHTML = "Turn: O";
            wincheck(square,board, 0);
        }
        else
        {
            document.getElementById('turntitle').setAttribute("style", "color: red");
            document.getElementById('turntitle').innerHTML = "Turn: X";
            wincheck(square,board, 1);
            turn=0;
        }
        if(count!=81)
        {
            var i1 = document.getElementById(square+'_btn1').innerHTML.length;
            var i2 = document.getElementById(square+'_btn2').innerHTML.length;
            var i3 = document.getElementById(square+'_btn3').innerHTML.length;
            var i4 = document.getElementById(square+'_btn4').innerHTML.length;
            var i5 = document.getElementById(square+'_btn5').innerHTML.length;
            var i6 = document.getElementById(square+'_btn6').innerHTML.length;
            var i7 = document.getElementById(square+'_btn7').innerHTML.length;
            var i8 = document.getElementById(square+'_btn8').innerHTML.length;
            var i9 = document.getElementById(square+'_btn9').innerHTML.length;
            if(i1 != 0 && i2 != 0 && i3 != 0 && i4 != 0 && i5 != 0 && i6 != 0 && i7 != 0 && i8 != 0 && i9 != 0)
            {
                for(var j = 1; j<10; j++)
                {
                    document.getElementById(square+'_btn'+j).style.border = "solid 2px black";
                    document.getElementById(square+'_btn'+j).style.backgroundColor = "#97CAF6";
                }
                locked = 1;
                while(locked==1)
                {
                    square = Math.floor((Math.random() * 9) + 1);
                    i1 = document.getElementById(square+'_btn1').innerHTML.length;
                    i2 = document.getElementById(square+'_btn2').innerHTML.length;
                    i3 = document.getElementById(square+'_btn3').innerHTML.length;
                    i4 = document.getElementById(square+'_btn4').innerHTML.length;
                    i5 = document.getElementById(square+'_btn5').innerHTML.length;
                    i6 = document.getElementById(square+'_btn6').innerHTML.length;
                    i7 = document.getElementById(square+'_btn7').innerHTML.length;
                    i8 = document.getElementById(square+'_btn8').innerHTML.length;
                    i9 = document.getElementById(square+'_btn9').innerHTML.length;
                    if(i1 != 0 && i2 != 0 && i3 != 0 && i4 != 0 && i5 != 0 && i6 != 0 && i7 != 0 && i8 != 0 && i9 != 0)
                        console.log('The random board is full. Trying again.');
                    else
                    {
                        intervalcooldown=1;
                        document.getElementById('eventbox').setAttribute("style", "display: block;");
                        eventinterval = setInterval("eventRotation()",1000);
                        locked = 0;
                        gamechecker=square;
                        for(var i = 1; i<10; i++)
                            document.getElementById(gamechecker+'_btn'+i).setAttribute("style","border: solid 2px red;");
                        turn=1;
                        document.getElementById('turntitle').setAttribute("style", "color: blue");
                        document.getElementById('turntitle').innerHTML = "Turn: O";
                    }
                }
            }
        }
    }
}
function wincheck(square, board, turn)
{   
    var square1 = document.getElementById(board+'_btn1');
    var square2 = document.getElementById(board+'_btn2');
    var square3 = document.getElementById(board+'_btn3');
    var square4 = document.getElementById(board+'_btn4');
    var square5 = document.getElementById(board+'_btn5');
    var square6 = document.getElementById(board+'_btn6');
    var square7 = document.getElementById(board+'_btn7');
    var square8 = document.getElementById(board+'_btn8');
    var square9 = document.getElementById(board+'_btn9');
    if(square1.innerHTML == square2.innerHTML && square1.innerHTML == square3.innerHTML && square1.innerHTML.length>0)
    {
            square1.setAttribute("style", "background-color: yellow;");
            square2.setAttribute("style", "background-color: yellow;");
            square3.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square1 || document.getElementById(board+"_btn"+square) == square2 || document.getElementById(board+"_btn"+square) == square3)
            whoWins();
    }
    if(square4.innerHTML == square5.innerHTML && square4.innerHTML == square6.innerHTML && square4.innerHTML.length>0)
    {
            square4.setAttribute("style", "background-color: yellow;");
            square5.setAttribute("style", "background-color: yellow;");
            square6.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square4 || document.getElementById(board+"_btn"+square) == square5 || document.getElementById(board+"_btn"+square) == square6)
            whoWins();
    }
    if (square7.innerHTML == square8.innerHTML && square7.innerHTML == square9.innerHTML && square7.innerHTML.length>0)
    {
            square7.setAttribute("style", "background-color: yellow;");
            square8.setAttribute("style", "background-color: yellow;");
            square9.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square7 || document.getElementById(board+"_btn"+square) == square8 || document.getElementById(board+"_btn"+square) == square9)
            whoWins();
    }
    if (square1.innerHTML == square4.innerHTML && square1.innerHTML == square7.innerHTML && square1.innerHTML.length>0)
    {
            square1.setAttribute("style", "background-color: yellow;");
            square4.setAttribute("style", "background-color: yellow;");
            square7.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square1 || document.getElementById(board+"_btn"+square) == square4 || document.getElementById(board+"_btn"+square) == square7)
            whoWins();
    }
    if (square2.innerHTML == square5.innerHTML && square2.innerHTML == square8.innerHTML && square2.innerHTML.length>0)
    {
            square2.setAttribute("style", "background-color: yellow;");
            square5.setAttribute("style", "background-color: yellow;");
            square8.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square2 || document.getElementById(board+"_btn"+square) == square5 || document.getElementById(board+"_btn"+square) == square8)
            whoWins();
    }
    if (square3.innerHTML == square6.innerHTML && square3.innerHTML == square9.innerHTML && square3.innerHTML.length>0)
    {
            square3.setAttribute("style", "background-color: yellow;");
            square6.setAttribute("style", "background-color: yellow;");
            square9.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square3 || document.getElementById(board+"_btn"+square) == square6 || document.getElementById(board+"_btn"+square) == square9)
            whoWins();
    }
    if (square1.innerHTML == square5.innerHTML && square1.innerHTML == square9.innerHTML && square1.innerHTML.length>0)
    {
            square1.setAttribute("style", "background-color: yellow;");
            square5.setAttribute("style", "background-color: yellow;");
            square9.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square1 || document.getElementById(board+"_btn"+square) == square5 || document.getElementById(board+"_btn"+square) == square9)
            whoWins();
    }
    if (square3.innerHTML == square5.innerHTML && square3.innerHTML == square7.innerHTML && square3.innerHTML.length>0)
    {
            square3.setAttribute("style", "background-color: yellow;");
            square5.setAttribute("style", "background-color: yellow;");
            square7.setAttribute("style", "background-color: yellow;");
        if(document.getElementById(board+"_btn"+square) == square3 || document.getElementById(board+"_btn"+square) == square5 || document.getElementById(board+"_btn"+square) == square7)
            whoWins();
    }
}
function whoWins()
{
    if(turn==0)
    {
        xwins++;
        document.getElementById('xwinscount').innerHTML = xwins;
    }
    else
    {
        owins++;
        document.getElementById('owinscount').innerHTML = owins;
    }
}
function newGame()
{
    for(var i=1; i<10; i++)
    {
        for(var j=1; j<10; j++)
        {
            document.getElementById(i+'_btn'+j).innerHTML = '';
            document.getElementById(i+'_btn'+j).setAttribute('style', 'background-color: none;');
        }
    }
    xwins = 0;
    owins = 0;
    turn = 0;
    count = 0;
    document.getElementById('xwinscount').innerHTML = '0';
    document.getElementById('owinscount').innerHTML = '0';
    document.getElementById('turntitle').setAttribute("style", "color: red");
    document.getElementById('turntitle').innerHTML = "Turn: X";
    gamechecker = 5;
    for(var i = 1; i<10; i++)
    document.getElementById(gamechecker+'_btn'+i).setAttribute("style","border: solid 2px red;");
    document.getElementById('gameresult_box').setAttribute("style","display: none;");
}
function switchPlayer()
{
    if(turn==1)
    {
        turn=0;
        document.getElementById('turntitle').setAttribute("style", "color: red");
        document.getElementById('turntitle').innerHTML = "Turn: X";
    }
    else
    {
        turn=1;
        document.getElementById('turntitle').setAttribute("style", "color: blue");
        document.getElementById('turntitle').innerHTML = "Turn: O";
    }
}
function winalert()
{
    if(xwins<owins)
    {
        document.getElementById('winner').setAttribute("style","color: blue;")
        document.getElementById('winner').innerHTML="Blue (O)";
        document.getElementById('gameresult_box').setAttribute("style", "display: block;");
    }
    else if(xwins>owins)
    {
        document.getElementById('winner').setAttribute("style","color: red;")
        document.getElementById('winner').innerHTML="Red (X)";
        document.getElementById('gameresult_box').setAttribute("style", "display: block;");
    }
    else
    {
        document.getElementById('winner').setAttribute("style","color: orange;")
        document.getElementById('winner').innerHTML="THERE WAS A TIE!";
        document.getElementById('gameresult_box').setAttribute("style", "display: block;");
    }
}
function eventRotation()
{
    eventseconds--;
    if(eventseconds>0)
        document.getElementById('event_secondcounter').innerHTML = eventseconds;
    if(eventseconds==0)
        {
            document.getElementById('eventbox').setAttribute("style", "display: none;");
            document.getElementById('event_secondcounter').innerHTML = 5;
            clearInterval(eventinterval);
            eventseconds = 5;
            intervalcooldown=0;
        }
}