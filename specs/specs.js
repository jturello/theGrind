describe('Post', function() {
    it("has a title", function() {
      var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'post body');
      expect(post.title).to.equal("test title");
    })

    it("has a subtext", function() {
      var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'post body');
      expect(post.subtext).to.equal("test subtext");
    })

    it("has an img_url", function() {
      var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'post body');
      expect(post.img_url).to.equal('./images/image1.jpg');
    })

    it("has a type", function() {
      var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'post body');
      expect(post.type).to.equal("test type");
    })

    it("has a post body", function() {
      var post = new Post('test title', 'test subtext', './images/image1.jpg', 'test type', 'test post body');
      expect(post.post_body).to.equal("test post body");
    });
});
