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
//     parseFloat(value)*1.2;
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

$("h1+p").attr('name','cool');