/* ---------------- start open & close function-------- */
let sideBar = $('.left-menue').innerWidth()
$('.left-menue').css('left' , -sideBar)
$('.open').click(function () {
    $('.open').animate({'left':'18%'} , 500)
    $('.left-menue').animate({'left': '0px'} , 500)
})

$('#closeBtn').click(function () {
    $('.open').animate({'left':'0px'} , 500)
    $('.left-menue').animate({left: -sideBar} , 500) 
})
/* ---------------- end open & close function-------- */
/* ---------------- start nice scroll function --------------- */
$("a[href^='#']").click(function (e) {
    let href = e.target.getAttribute('href');
    let secOfset = $(href).offset().top;
    $('html').animate({scrollTop:secOfset},500)
})
/* ---------------- end nice scroll function --------------- */
/*--------- start occourdion function*/ 
$('.singeer').click(function () {
    $(this).next().slideToggle(1000)
})
/* ------------ end occourdion function--------- */

/* ============ start duration function ============= */

var countDownDate = new Date("Oct 29, 2024 15:37:25").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("day").innerHTML = days + ' D'
    document.getElementById("hours").innerHTML = hours + ' h'
    document.getElementById("min").innerHTML = minutes + ' m'
    document.getElementById("sec").innerHTML = seconds +' s'
      
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "0";
      }
  }, 1000);

/* ============ end duration function ============= */
/* ============ start Characyer Reamining function ============= */

$('textarea').keyup(function () {
    let maxNum = 100;
    let length = $(this).val().length;
    let amount = maxNum - length;
    if(amount<=0){
        $("#num").text("your available character finished");
    }
    else{
        $("#num").text(amount);
    }   
})
/* ============ end Characyer Reamining function ============= */
