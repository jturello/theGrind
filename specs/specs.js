describe('Post', function() {
  it("has a title", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    expect(post.title).to.equal("test title");
  })

  it("has a subtext", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    expect(post.subtext).to.equal("test subtext");
  })

  it("has an img_url", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    expect(post.img_url).to.equal('./images/image1.jpg');
  })

  it("has a type", function() {

    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    expect(post.type).to.equal("test type");
  })

  it("has a post body", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    expect(post.post_body).to.equal("test post body");
  });
});


describe('editPost', function() {
  it("allows an admin to update a post's title", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    post.editPost('new title', 'new subtext', './images/new_image1.jpg', 'new type', ' new post body');
    expect(post.title).to.equal('new title');
  });

  it("allows an admin to update a post's subtext", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    post.editPost('new title', 'new subtext', './images/new_image1.jpg', 'new type', ' new post body');
    expect(post.subtext).to.equal('new subtext');
  });

  it("allows an admin to update a post's img_url", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    post.editPost('new title', 'new subtext', './images/new_image1.jpg', 'new type', ' new post body');
    expect(post.img_url).to.equal('./images/new_image1.jpg');
  });

  it("allows an admin to update a post's type", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    post.editPost('new title', 'new subtext', './images/new_image1.jpg', 'new type', ' new post body');
    expect(post.type).to.equal('new type');
  });

  it("allows an admin to update a post's body", function() {
    var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
    post.editPost('new title', 'new subtext', './images/new_image1.jpg', 'new type', 'new post body');
    expect(post.post_body).to.equal('new post body');
  });

});


describe('Admin', function() {
  it("has a user name", function() {
    var admin = new Admin('test userName', 'test password');
    expect(admin.userName).to.equal('test userName');
  });

  it("has a password", function() {
    var admin = new Admin('test userName', 'test password');
    expect(admin.password).to.equal('test password');
  });


});
