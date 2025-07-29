
// $(document).ready(function () {

//     $("h1").css("color", "red");

// });

// CSS STLES
    // console.log($("h1"));
    // $("button").css("color", "red")
    // $("h1").addClass("big-title margin-50");
    // $("h1").removeClass("big-title margin-50");
    // $("h1").hasClass("margin-50");


// HTML TEXTS
    // $("h1").text("Bye")
    // $("button").text("Bye")
    // $("h1").html("<em>Heylow</em>")

// ATTRIBUTES
    // $("a").attr("href", "https://www.google.com");

// EVENT LISTENER

    // $("h1").click(function () {
    //     $("h1").css("color", "red");
    // })


    // MULTIPLE BUTTONS
    // $("button").click(function () {
    //     $("h1").css("color", "purple")
    // })

    // $("body").keydown(function(event){
    //     console.log(event.key)
    // })

    // $("body").keydown(function(event){
    //     $("h1").text(event.key)
    // })

    // $("h1").on("mouseover", function(){
    //     $("h1").css("color", "purple");
    // })


// ADD/REMOVE ELEMENTS

    // $("h1").before("<button>Hi</button>")
    // $("h1").after("<button>Hi</button>")
    // $("h1").prepend("<button>Hi</button>")
    // $("h1").append("<button>Hi</button>")
    // $("button").remove();

// WEBSITE ANIMATION USING JQUERY

    // $("button").on("click", function() {
    //     $("h1").toggle();
    // })

    // $("button").on("click", function() {
    //     $("h1").fadeOut();
    // })

    // $("button").on("click", function() {
    //     $("h1").fadeIn();
    // })

    // $("button").on("click", function() {
    //     $("h1").fadeToggle();
    // })

    // $("button").on("click", function() {
    //     $("h1").slideToggle();
    // })

    $("button").on("click", function() {
        $("h1").slideUp().slideDown().animate({
            margin:0.5
        });
    })