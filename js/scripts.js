function Article(title, subtitle, subject, body) {
  this.title = title;
  this.subtitle = subtitle;
  this.subject = subject;
  this.body = body;
}

// Article.prototype.post
//
// Article.prototype.createCard


$(function() {
  $(".toMainFeed").click(function() {
    $('.hideable').hide();
    $('.mdl-grid').show();
  });

  $(".cta").click(function() {
    var thisArticle = $(this).closest('.mdl-card').data("article");
    $('.hideable').hide();
    $(thisArticle).show();
  });

  $(".mdl-navigation__link").click(function(){
    var thisPage = $(this).data("page");
    $('.hideable').hide();
    $(thisPage).show();
  });

  $("#adminLoginLink").click(function(){
    $('.mdl-layout').first().fadeOut();
    $('#adminCPLogin').delay(400).fadeIn();
  });

  $("#cancelButton").click(function(){
    $('#adminCPLogin').fadeOut();
    $('.mdl-layout').first().slideDown();
  });

  $("#enterButton").click(function(){
    var username = ($('input#user').val());
    var password = ($('input#password').val());
    if (username === "admin" && password === "password"){
      $('#adminCPLogin').fadeOut();
      $('#adminCP').delay(400).fadeIn();
  }
    // else {
    //   alert("wrongusernameorpassword");
    // }
  });

  $("#cancelPost").click(function(){
    $('#adminCP').fadeOut();
    $('.mdl-layout').first().slideDown();
  });
});
