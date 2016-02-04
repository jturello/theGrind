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
    // console.log(thisArticle);
    // console.log($(this));
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

     $('#articleSpace').append("<div id='" + newArticle.subject + "' class='init_hidden hideable'>" +
                                 "<div class='mdl-grid'>" +
                                   "<div class='mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col'>" +
                                     "<div class='mdl-card__media' style='background: url('img/Portland_Weird.jpg') center / cover; height: 400px;'>" +
                                     "</div>" +
                                     "<div class='mdl-card__title'>" +
                                       "<h3 class='mdl-card__title-text'>" + newArticle.title + "</h3>" +
                                     "</div>" +
                                     "<div class='mdl-card__supporting-text'>" +
                                       "<p class='mdl-card__subtitle-text'>" + newArticle.subtitle + "<p>" +
                                     "</div>" +
                                     "<div class='mdl-color-text--grey-700 mdl-card__supporting-text'>" +
                                       "<p>" + newArticle.body + "</p>" +
                                     "</div>" +
                                     "<div class='mdl-card__actions'>" +
                                       "<button type='button' class='mdl-button mdl-button--raised mdl-button--accent toMainFeed'>Main Feed</button>" +
                                     "</div>" +
                                   "</div>" +
                                 "</div>" +
                               "</div>"
);


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

      $('#newsLetter').click(function(){
    showDialog({
        title: 'Newsletter Signup',
        text: "<p>Sign up for our newsletter to get some updates, sometimes.</p> <div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' style='width: 100%;'><input class='mdl-textfield__input' type='text' id='articleSubject' pattern='[a-z,A-Z]*'></input><label class='mdl-textfield__label' for='articleSubject'>First Name</label></div><div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' style='width: 100%;'><input class='mdl-textfield__input' type='text' id='articleSubject' pattern='[a-z,A-Z]*'></input><label class='mdl-textfield__label' for='articleSubject'>Last Name</label></div><div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' style='width: 100%;'><input class='mdl-textfield__input' type='email' id='articleSubject'></input><label class='mdl-textfield__label' for='articleSubject'>E-mail</label></div>",
        negative: {
            title: 'Maybe Later'
        },
        positive: {
            title: '<span class="mdl-color-text--accent">Sign Up</span>',
            onClick: function (e) {
                showDialog({
                  title: 'Sign Up Successful!',
                  text: 'Thank you'
                })
            }
        }
    });
});

});
