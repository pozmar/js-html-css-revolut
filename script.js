//quando passo sopra con il mouse do la classe active ai figli dell'elemento, e tolgo la classe a tutti gli altri elementi
$(document).ready(function(){
  $(".has-dropdown").hover(function(){
    $(".has-dropdown").children().removeClass("active");
    $(this).children().addClass("active");

  })
  //al click sulla pagina rimuovo la classe active in modo da chiudere la tenda del menu dropdown
  $(document).click(function(){
    $(".has-dropdown").find(".active").removeClass("active");
  })
})
