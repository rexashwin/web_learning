// // implementing css
// $("h1").css("color", "red");


// // getting css value
// console.log($("h1").css("color"));


// // add remove class
// $("h1").addClass("big-text");
// $("h1").removeClass("big-text text-style");


// // text and inner html
// $("h1").text("hello Sir");
// $("h1").html("<em>test</em>");


// // attributes
// $("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png");
// $("img").attr("width", "100px");


// // functions       // for all the particular elements at a time      
// // and using click event
// $("button").click(function () {
//     alert("you clicked button");
// });


// // keypress event
// $(".input1").keypress(function(event){
//     console.log(event.key);
//     $("h1").css("font-size", "7rem");
//     $("h1").text(event.key);
// })


// // event 
// $(".input1").on("mouseover", function(){
//     alert("why you went there");
// });


// animation
// $("button").on("click", function(){
//     $("h1").fadeOut();
//     $("h1").fadeIn();
//     $("h1").fadeToggle();
// });
// $("button").on("click", function(){
//     $("h1").slideUp();
//     $("h1").slideDown();
//     $("h1").slideToggle();
// });
// $("button").on("click", function(){
//     $("h1").slideUp().slideDown().animate({opacity: .5});
// });


// // adding element
// $("h1").before("<button>before</button>");
// $("h1").after("<button>after</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");


// // removing element
// $("button").remove();
