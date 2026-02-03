var Book = {
  create: function(title, numofChapters, author, numofPages, publisher, numofCopies) {
    return {
      title: title,
      numofChapters: numofChapters,
      author: author,
      numofPages: numofPages,
    publisher: publisher,
    numofCopies: numofCopies,
  };
}
};

var Box = {
  height: 0,
  width: 0,
  length: 0,
  material: "",
  content: [],

  init: function (height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];
    return this;
  },

  addBook: function (book) {
    for (var i = 0; i < this.content.length; i++) {
      if (this.content[i].title === book.title) {
        this.content[i].numofCopies += 1;
        return;
      }
    }
    this.content.push(book);
  },

  deleteBookByTitle: function (title) {
    for (var i = 0; i < this.content.length; i++) {
      if (this.content[i].title === title) {
        this.content.splice(i, 1);
        return true;
      }
    }
    return false;
  },

  numOfBooks: function () {
    return this.content.length;
  },

  volume: function () {
    return this.height * this.width * this.length;
  },

};


let book = Book.create("Js Advanced", 10, "John Doe", 300, "TechBooks Publishing", 5);

let box1 = Box.init(10, 15, 20, "Cardboard");
box1.addBook(book);
console.log("Number of books in box1:", box1.numOfBooks());

let box2 = Box.init(5, 10, 15, "Plastic");
box2.addBook(Book.create("Learning Python", 12, "Jane Smith", 400, "CodeBooks Publishing", 3));
box2.addBook(Book.create("Data Structures", 8, "Alice Johnson", 250, "AlgoBooks Publishing", 4));

console.log("number of books in box2 :", box2.numOfBooks());
