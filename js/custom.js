// // // // learning jQuery
// // // /*
// // // var $container = $('.container');
// // // console.log($container);
// // // */

// // // $(document).ready(function(){
// // //     //console.log("functio so called us very cery god you van d lot of yhojn f as");
    


// // //     //$(selector).action()
// // //     var $clickMeNowBtn = $("#clickMeNow");
// // //     console.log($clickMeNowBtn);

// // //     $("#clickMeNow").click(function(){
// // //         console.log("you clicked me:", $(this));
// // //         //$("#table").toggle();

// // //         $("#about-title-text").css({
// // //             "color": "red",
// // //             "font-weight": "bold",
// // //             "text-decorator": "none",

// // //         });
// // //     });
// // // });




// // $("#clickMeNow").on({
// //     click: function(){
// // console.log("clicked");
// //     },

// //     dblclick: function(){
// //         $(this).css("color", "red");
// //         console.log("Dbl clicked");
// //     },
// //     mouseleave: function(){
// //         console.log("mouse leave");
// //     },
    

// // });



 //$("#shaktiman").addClass("normal").on({
//     mouseenter: function(){
//         $(this).removeClass("normal").addClass("active");
//          console.log("mouse entered");
//     },
//     mouseleave: function(){
//         $(this).addClass("normal").removeClass("active");
//         console.log("mouse leave");
//     }
// });



var name =document.getElementById("sujan");
$("#shaktiman").on({
mouseenter: function(){
    name.innerHTML= "<div><p>This is new paragraph you enetered</P></div>";
    console.log("mouse entered");
},

mouseleave: function(){
    name.innerHTML= " ";

}
});


$("#shaktiman").hover(function(){


$("#sujan").html("<div><p>this is new one</P></div>");
});