

// $("h1").click(function(){
//     $("h1").css("color","purple");
// })

// $("a").attr("href","https://www.hello.com");

// $('h1').text("Bye");

// $("button").html("<em>Helloe</em>")

//------------------------

// $("button").click(function(){
//     $("h1").css("color","purple");
// })

// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "red");

//     setTimeout(function (){
//         $("h1").css("color", "black");
//     }, 100);
// })

// $("h1").before("<button>New</button>");

// $("button").remove();

// $("button").on("click", function() {
//     $("h1").slideToggle();
// })

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})