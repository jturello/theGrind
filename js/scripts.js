function Post(title, subtext, img_url, type, post_body) {
  this.title = title;
  this.subtext = subtext;
  this.img_url = img_url;
  this.type = type;
  this.post_body = post_body;
}



function Admin(userName, password){
  this.userName = userName;
  this.password = password;
}


$(document).ready(function() {
  $(".mdl-button").click(function() {
    $('.mdl-cell').fadeOut();
    var thisArticle = $(this).closest('.mdl-card').data("article");
    $(thisArticle).fadeIn();
  });
});
