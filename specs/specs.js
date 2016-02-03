describe('Article', function() {
  it("has a title", function() {
    var article = new Article('test title', 'test subtitle', 'text subject', 'test body');
    expect(article.title).to.equal("test title");
  })

  it("has a subtitle", function() {
    var article = new Article('test title', 'test subtitle', 'test subject', 'test body');
    expect(article.subtitle).to.equal("test subtitle");
  })

  it("has a subject", function() {

    var article = new Article('test title', 'test subtitle', 'test subject', 'test body');
    expect(article.subject).to.equal("test subject");
  })

  it("has a body", function() {
    var article = new Article('test title', 'test subtitle', 'test subject', 'test body');
    expect(article.body).to.equal("test body");
  });
});


describe('Card', function() {
  it("has a title", function() {
    var card = new Card('test title', 'test subtitle', 'test subject');
    expect(card.title).to.equal('test title');
  });

  it("has a subtitle", function() {
    var card = new Card('test title', 'test subtitle', 'test subject');
    expect(card.subtitle).to.equal('test subtitle');
  });

  it("has a subject", function() {
    var card = new Card('test title', 'test subtitle', 'test subject');
    expect(card.subject).to.equal('test subject');
  });

});
