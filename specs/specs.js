describe('Article', function() {
  it("has a title", function() {
    var article = new Article('test title', 'test subtext', 'text subject', 'test body');
    expect(article.title).to.equal("test title");
  })

  it("has a subtext", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    expect(article.subtext).to.equal("test subtext");
  })

  it("has a subject", function() {

    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    expect(article.subject).to.equal("test subject");
  })

  it("has a body", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    expect(article.body).to.equal("test body");
  });
});


describe('update', function() {
  it("allows an admin to update an article's title", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    article.update('new title', 'new subtext', 'new subject', ' new body');
    expect(article.title).to.equal('new title');
  });

  it("allows an admin to update an article's subtext", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    article.update('new title', 'new subtext', 'new subject', ' new body');
    expect(article.subtext).to.equal('new subtext');
  });

  it("allows an admin to update an article's subject", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    article.update('new title', 'new subtext', 'new subject', ' new body');
    expect(article.subject).to.equal('new subject');
  });

  it("allows an admin to update an article's body", function() {
    var article = new Article('test title', 'test subtext', 'test subject', 'test body');
    article.update('new title', 'new subtext', 'new subject', 'new body');
    expect(article.body).to.equal('new body');
  });

});
