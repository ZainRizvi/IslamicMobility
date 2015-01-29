var AzureSearch = require('azure-search');
var _ = require("underscore");

var client = AzureSearch({
  url: "https://islamicmobility.search.windows.net",
  key: process.env.SearchKey
});

/*
client.getIndex("books", function(err, index) {
  if (err) console.log(err);
  console.log(index);
});
*/

var data = require("./data/filesystem")
var books = data.data;
_.each(books, function(book) {
    book.id = (book.title + " by " + book.author).replace(".", "").replace("/","").replace("\\","").replace(".", "").replace("/","").replace("\\","").replace(".", "")
    .replace("/","").replace("\\","").replace(".", "").replace("/","").replace("\\","").replace(".", "").replace("/","").replace("\\","")
    ;
});


/*
client.addDocuments('books', books, function(err, confirmation){
  if (err) console.log(err);
  console.log ("All done");
});
*/

client.search('books', {search:'woman'}, function(err, results){
  if (err) {
    console.log ("YIKES!!!");
    console.log(err);
    return;
  }
  console.log("Got results. Awww yeah");

  var filtered = _.map(results, function(book) {
    var book2 = [];
    book2.score = book['@search.score'];
    book2.title = book.title;
    book2.author = book.author;
    book2.description = book.description;
    return book2;
  });


  console.log(filtered);
  // results is an array of matching documents
});


/*
var index = require("./bookIndexSchema.json");
console.log(index);

client.deleteIndex("books", function(err, data) {
  if (err) console.log(err);
  console.log("Index deleted")
  client.createIndex(index, function(err, data) {
    if(err) console.log(err);
    console.log("created index");
  })
})
*/

console.log("And now we wait...");
