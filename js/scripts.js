function Post(title, subtext, img_url, type, post_body) {
  this.title = title;
  this.subtext = subtext;
  this.img_url = img_url;
  this.type = type;
  this.post_body = post_body;
}

Post.prototype.editPost = function(newTitle, newSubtext, new_img_url, newType, new_post_body) {
  this.title = newTitle;
  this.subtext = newSubtext;
  this.img_url = new_img_url;
  this.type = newType;
  this.post_body = new_post_body;
}


function Admin(userName, password){
  this.userName = userName;
  this.password = password;
}


$(function() {
  $(".mdl-button").click(function() {
    $('.mdl-grid').fadeToggle();
    var thisArticle = $(this).closest('.mdl-card').data("article");
    $(thisArticle).fadeToggle();
  });
  $(".backButton").click(function() {
    $(this).closest('div').hide();
    $('.mdl-grid').show();
  });

  $("#drawerTitle").click(function() {
    $(".backButton").closest('div').hide();
    $('.mdl-grid').show();
  });

  $(".mdl-logo").click(function() {
    $(".backButton").closest('div').hide();
    $('.mdl-grid').show();
  });
});
