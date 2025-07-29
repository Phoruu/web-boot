

var color = ["green", "red", "yellow", "blue"]
var pattern = []
var index = 0;

start = false;
ongoing = false;

$(".btn").click(function (event){
    
    var clicked = color.indexOf(event.target.id);
    // console.log("Clicked : " + color.indexOf(event.target.id) + " (" + typeof(clicked) + ")" );
    // console.log("Index : " + index + " Pattern Length : " + pattern.length)


    if (clicked == pattern[index])
    {
        // console.log("Match!")
        if ((index + 1) == pattern.length)
        {

            makeSound(pattern[index]);
            animationPressed(pattern[index]);
            // console.log("LEVEL UP!");
            index = 0;
            generate_number();

            // console.log("New Pattern is : " + pattern)
        }

        else
        {
            makeSound(pattern[index]);
            animationPressed(pattern[index]);
            index++;
        }
    }

    else
    {
        index = 0;
        pattern.length = 0;
        start = false;
        ongoing = false;

        console.log("ERROR!!!!");
        generate_number();
        
        $("h1").html("Game Over<br>Press Any Key to Start");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100)


        makeSound();
        
        // $("body").removeClass("game-over");
    }

    
})



$(document).keydown(function (event)
{
    start = true;
    console.log(start)

    if (!ongoing)
    {
        ongoing = true;
        generate_number();
    }
    else
    {
        pass;
    }
    

})



// generate_number();


function nextSequence(){

    rand_num = Math.floor(Math.random() * 4);
    pattern.push(rand_num);

    animationNewSequence(rand_num)
    makeSound(rand_num)
    
}


function generate_number(){



    if (start)
    {
        setTimeout(function(){
            nextSequence();
        }, 1000)
        

        $("h1").text("Level " + pattern.length)
        console.log("Pattern : " + pattern);

        
    }
    
}




function makeSound(num){

    const red = new Audio("sounds/red.mp3");
    const yellow = new Audio("sounds/yellow.mp3");
    const green = new Audio("sounds/green.mp3");
    const blue = new Audio("sounds/blue.mp3"); 
    const wrong = new Audio("sounds/wrong.mp3");
    
    if (num == 0) {green.play();}
    else if (num == 1) {red.play();}
    else if (num == 2) {yellow.play();}
    else if (num == 3) {blue.play();}
    else {wrong.play();}

}

function animationPressed(num){

    pressedColor = color[num];
    console.log("PRESSED : " + pressedColor);

    $("#"+pressedColor).addClass("pressed");

    setTimeout(function(){
        $("#"+pressedColor).removeClass("pressed");
    }, 100)

}

function animationNewSequence(num){

    pressedColor = color[num];
    $("#"+pressedColor).fadeOut(100).fadeIn(100);

}