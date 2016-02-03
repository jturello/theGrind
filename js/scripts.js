function Article(title, subtitle, subject, body) {
  this.title = title;
  this.subtitle = subtitle;
  this.subject = subject;
  this.body = body;
};


Article.prototype.createCard = function() {
  var card = new Card(this.title, this.subtitle, this.subject);
  return card;
};


function Card(title, subtitle, subject) {
  this.title = title;
  this.subtitle = subtitle;
  this.subject = subject;
};


$(function() {
  $('body').on('click', '.toMainFeed', function() {
    $('.hideable').hide();
    $('.mdl-grid').show();
  });

  $("body").on('click', '.cta', function() {
    var thisArticle = $(this).closest('.mdl-card').data("article");
    console.log(thisArticle);
    console.log($(this));
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

  });

  $("#cancelPost").click(function(){
    $('#adminCP').fadeOut();
    $('.mdl-layout').first().slideDown();
  });

  $('#postButton').click(function(){
    var title = $('input#articleTitle').val();
    var subtitle = $('input#articleSubtitle').val();
    var subject = $('input#articleSubject').val();
    var body = $('input#articleBody').val();

    var newArticle = new Article(title, subtitle, subject, body);

     $('#articleSpace').append("<div id="  + newArticle.subject + " class='init_hidden hideable'>" +
                              "<p>" + newArticle.body + "</p>" +
                              "<button type='button' class='mdl-button mdl-button--raised mdl-button--accent toMainFeed'>Main Feed</button>" +
                              "</div>");


      $('#mainFeed').prepend("<div class='mdl-cell mdl-cell--12-col'>" +
                              "<div class='mdl-card mdl-shadow--2dp' data-article='#" + newArticle.subject + "'>" +
                                "<div class='mdl-card__title'>" +
                                  "<h3>" + newArticle.title + "</h3>" +
                                  "<p>" + newArticle.subtitle + "</p>" +
                                "</div>" +
                                "<div class='mdl-card__actions'>" +
                                  "<a href='#' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect cta'>Read" +
                                  "</a>" +
                                "</div>" +
                              "</div>");
                              componentHandler.upgradeDom();

                              //return to main feed
                              $('#adminCP').fadeOut();
                              $('.mdl-layout').first().slideDown();

      });

});
