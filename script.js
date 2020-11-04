//quando passo sopra con il mouse do la classe active ai figli dell'elemento, e tolgo la classe a tutti gli altri elementi
$(document).ready(function(){
  $(".has-dropdown").hover(function(){
    $(".has-dropdown").children().removeClass("active");
    $(this).children().addClass("active");

  })
  $(document).click(function(){
    $(".has-dropdown").find(".active").removeClass("active");
  })
})
