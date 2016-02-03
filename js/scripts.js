function Article(title, subtext, img_url, type, post_body) {
  this.title = title;
  this.subtext = subtext;
  this.img_url = img_url;
  this.type = type;
  this.post_body = post_body;
}

Article.prototype.update = function(newTitle, newSubtext, new_img_url, newType, new_post_body) {
  this.title = newTitle;
  this.subtext = newSubtext;
  this.img_url = new_img_url;
  this.type = newType;
  this.post_body = new_post_body;
}

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
    $('#adminCPLogin').fadeOut();
    $('#adminCP').delay(400).fadeIn();
  })

  $("#cancelPost").click(function(){
    $('#adminCP').fadeOut();
    $('.mdl-layout').first().slideDown();
  });
});
