$(".show-sidebar-btn").click(function () {
  $(".sidebar").animate({marginLeft:0});
})


$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:`-100%`});
})

function go(url) {
    setTimeout(function () {
        location.href= `${url}`;
    },500)

}
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(".full-screen-btn").click(function () {
    let current=$(this).closest(".card");
    current.toggleClass("full-screen-card");
   if(current.hasClass("full-screen-card")){
     $(this).html(`<i class="feather-minimize-2 btn-outline-secondary"></i>`);
   }
   else{
       $(this).html(`<i class="feather-maximize-2 btn-outline-secondary"></i>`);

   }
})

let screenHeight= $(window).height();
let currentMenuHeight= $(".nav-menu .active").offset().top;

if (currentMenuHeight > screenHeight*0.8){
    $(".sidebar ").animate({
        scrollTop:currentMenuHeight-200
    },1000)
}