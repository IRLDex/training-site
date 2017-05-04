$("#jump").on('click',function(){
  console.log("clicking on the jump link...");
  // window.scrollTo(0,0);
  $('body').animate({scrollTop: 0});
  console.log ($(window).scrollTop() > 100);
});

$(window).on('scroll', function(){
  // console.log("I'm scorlling...");

  if($(window).scrollTop() > 100){
    // show top link
    $("#jump").css({display: 'inline'});
  } else{
    // hide top link
    $("#jump").css({display: 'none'});
  }
});