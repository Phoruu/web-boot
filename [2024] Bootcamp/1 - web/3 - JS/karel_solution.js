/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    moveStraightAhead();
    turn1();
    turn2();
    turn1();
    turn2();
    turn1();
    turn2();
    turn1();
    turn2();
    turn1();
    turn2();
    turn1();
    turn2();
    turn1();
    turn2();
    putBeeper
 }
 
 
 function turn1()
 {
    putBeeper();
    turnLeft();
    move();
    turnLeft();
    moveStraightAhead2();
 }
 
 function turn2()
 {
    turnRight();
    move();
    turnRight();
    moveStraightAhead();
 }
 
 
 function moveStraightAhead()
 {
    
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
 }
 
 function moveStraightAhead2()
 {
    move();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement();
    basicMovement2();
 }
 
 
 function basicMovement()
 {
    putBeeper();
    move();
    move();
 }
 
 function basicMovement2()
 {
    putBeeper();
    move();
 }