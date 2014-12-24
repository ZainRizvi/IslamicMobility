describe("Book test suite", function() {

  beforeEach(function () {
    bookEntity = require("../../../common/entities/book");
    book = new bookEntity(
      "my book",
      "some guy",
      {
        epub: "book.epub",
        pdf: "book.pdf",
        mobi: "book.mobi",
        image: "book.png",
        description: "This is a cool book"
      });
  })

  it("exists", function() {
    expect(book).toBeDefined();
  })

  it("has a title", function() {
    expect(book.title).toBeDefined();
  })

  it("has an author", function() {
    expect(book.author).toBeDefined();
  })

  it("has an epub field", function() {
    expect(book.epub).toBeDefined();
  })

  it("has a pdf field", function() {
    expect(book.pdf).toBeDefined();
  })

  it("has a mobi field", function() {
    expect(book.mobi).toBeDefined();
  })

  it("has an image field", function() {
    expect(book.image).toBeDefined();
  })

  it("has an description field", function() {
    expect(book.description).toBeDefined();
  })

  it("contains the correct title", function() {
    expect(book.title).toBe("my book");
  })
})
