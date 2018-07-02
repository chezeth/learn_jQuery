// ---lesson 1

// //1st mehtod
// $("h1").css("color","red");  

// //2nd method
//     // $(document).ready(function () {  
//     //     $("h1").css("color","red");
//     // })

// //3rd method
//     // $(function(){
//     //     $("h1").css("color","red");
//     // })

// // $('h1').html('new text');

// $('#btn_start').click(function(){
//     $('#message')
//         .html('Message')
//         .css('background-color','green')
//         .parent()
//         .css('background-color','gold')
//         .width(150)
//         .height(80)
// });

// //так не работает
// // $('#btn_start').click(
// //     $('#message').html('Message')
// // )

// $('#btn_reset').click(function() {
//     location.reload()
// });

//---lesson 2

// $("#content").css("color", "red");
// $(".wrapper").css("color", "red");
// $("h1,h2").css("color", "red");
// $("article h2").css("color", "red");
// $("article").find("h2").css("color","red");
// //выбирает п не внутри ш1 а первый после ш1
// $("h1+p").css("color", "red"); 
// $("#content").prev().css("color", "red");
// $("#content").next().css("color", "red");
// $("*").prev().css("color", "red");
// $("article>h2").css("color", "red");
// $("article>*").css("color", "red");

// //сложный селектор разбиваем на простые что бы все браузеры точно видели
// $(".content div input:disabled");
// $(".content div").find("input:disabled");

//---lesson 3

// $(".box").css({'color':'green',
//                 'font-size':'12px',
//                 'margin-left':'10px'})
// $(".box").css({color:'green',
//                 fontSize:'12px',
//                 marginLeft:'10px'})

// $("#content").css('height',function(i,value){
//     return parseFloat(value)*1.2;
// })

// $("#content").addClass('name')
// $("#content").removeClass('box')

//придается значение display:none
// $("#content").toggle()

// //дичь не рабочая
// var b='3';
//     a=function(){
//     b=$("h1+p").attr(name);
//     return b;  
//   }
// alert(a)

// $("p").attr('name','cool');
// $("p").removeAttr('name');

// var c=$("img").attr('alt');
// alert(c);

$("img").css('height','200px');
$("img").attr('src','../../../pictures/ocean/z_29afcadf.jpg');

//---Lesson 4

// $("a").click(function(eva){
//     alert('Hello!');
//     // eva.preventDefault();
//     // eva.stopPropagation();
//     return false;
// });

// $("header").click(function(eva){
//     alert('Hello 2!!!');
// });

$("#quantity").keyup(function() {
    var value=$(this).val();
    $("#msg").text(value);
});

//---Lesson 5
// $(".anim").hide("slow");
// $(".anim").click(function() {
//     $(this).hide("slow");
// })

// $(".anim").hide("slow",function() {
//     alert("4ekogo");
// })

// $(".anim").click(function() {
//     $(this).hide("slow",function() {
//         alert('gogogo')
//     });
// })

// $("#stick").click(function() {
//     $("#hide").slideDown("slow");
// })

//не понятно для чего эта ф-ция
// function changeClass() {
//     $(this).prev().toggleClass('active');
// }
$(function(){
    $("h2").click(function() {
        $(this).next().slideToggle();
        //не понятно для чего клас 'ектив'
        // $(this).toggleClass('active');
    })
});

//---Lesson 6
// $(".anim").click(function() {
//     $(this).fadeOut(2200);
//     $(this).fadeIn(2200);
// })

// $(".anim").click(function() {
//     $(this).fadeToggle(2200);
// })

// $(".anim").click(function() {
//     $(this).fadeTo(2200,0.4,function() {
//         alert('done');
//     });
// })

// $(".anim")

// $(".anim").animate({
//     'opacity':'hide'
// })
// $(".anim").animate({
//     'opacity':'show'
// })
// $(".anim").animate({
//     'opacity':'0.5',
//     'height':'50px',
//     'width':'250px'
// })
// $(".anim").animate({
//     'opacity':'-=0.2',
//     'height':'+=50px',
//     'width':'-=25px'
// })

// $(".anim").animate({'height':'+=50px'})
//             // .stop
//             .animate({'width':'-=25px'},{queue:false});

// $.fx.off=true;

//---Lesson 7
// var $myDiv=$('<div id="my" class="page">Hello</div>').appendTo('.anim');

// так быстрее
// var $myDiv=$('<div>Hello</div>',{'id':'my','class':'page'}).appendTo('.anim');

var $myDiv=$('<div>Hello</div>').attr({'id':'my','class':'page'}).appendTo('.anim');

//самый быстрый способ, но это просто js
// var myDiv=createElement("div");
//     myDiv.id="my";
//     myDiv.className="page";

// $("p").after("<hr/>")
// $("<hr/>").insertAfter("p")

// $("<hr/>").insertBefore("p");
// $("p").append("<hr/>")
// $("p").append("<span>gfhjdkhlgfkl</span>");
// $("<p>fghfhfFFFFFFnfhg</p>").prependTo("#content");
// $("<p>fghfhfFFFFFFnfhg</p>").appendTo("#content");
// $("p").prepend("<span>gfhjdkhlgfkl</span>");

//---Lesson 8
// $(".second").replaceWith("<h2>New Text</h2>");
// $("<h2>New Text</h2>").replaceAll(".inner");

// $(".inner").wrap("<div class='new'>TEXT</div>");
// $(".inner").wrapAll("<div class='new'>TEXT</div>");
// заворачивает внутрь объекта
// $(".inner").wrapInner("<div class='new'>TEXT</div>");

$(".third").clone().appendTo(".first");

// var p;
// $("button").click(function() {
//     if(p){
//         p.appendTo("header");
//         p=null;
//     } else{
//         p=$(".hello").detach();
//     }
// })

// $(".third").empty();
// $(".third").remove();