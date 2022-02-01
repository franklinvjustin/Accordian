$(document).ready(function () {
    
  var allPanels = $('.body-part').hide();
    
  $(".header").click(function() {
    allPanels.slideUp();
    $(this).siblings().slideDown();
    return false;
  });

});
