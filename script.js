const myLibrary = [];

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead ? "already read." : "not read yet."}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R.Tolkien', 295, false));
addBookToLibrary(new Book('The Way of Kings', 'Brandon Sanderson', 1034, true));
addBookToLibrary(new Book('Cradle: Path of Gold', 'Will Wight', 803, false));
addBookToLibrary(new Book('Harry Potter and the Philosophers Stone', 'J.K. Rowling', 500, true));

console.log(myLibrary[0].title);