

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead ? "already read." : "not read yet."}`
    }
}

theHobbit = new Book('The Hobbit', 'J.R.R.Tolkien', 295, false);

console.log(theHobbit.info());