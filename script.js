const libraryContainer = document.querySelector('.library-container');
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
const subBtn = document.querySelector(".submit");
const titleIn = document.querySelector("#title");
const authorIn = document.querySelector("#author");
const pagesIn = document.querySelector("#pages");
const readIn = document.querySelector("#read");



const myLibrary = [

];

class Book {
    constructor(title, author, numPages, isRead){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
    }
    toggleRead() {
        console.log(`set changed oh nooo!`)
        return this.isRead = !this.isRead;
    }
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead ? "already read." : "not read yet."}`
    // }
}

function addBookToLibrary() {
    const book = new Book(
        titleIn.value,
        authorIn.value,
        pagesIn.value,
        readIn.value === 'yes' ? true : false
    );
    myLibrary.push(book);
}


function refresh() {
    libraryContainer.innerHTML = '';
    myLibrary.forEach((book, bookNumber) => {
        let bookCard = document.createElement('div')
        bookCard.classList.add('book-card', 'ai-center', 'space-between');
        bookCard.innerText = `${book.title} by ${book.author}, ${book.numPages} pages, ${book.isRead ? "already read." : "not read yet."}`
        bookCard.dataset.bookNumber = bookNumber;
        let delButton = document.createElement('button');
        delButton.innerText = "Delete";
        delButton.classList.add('del-button');
        delButton.addEventListener('click', deleteBookFromLibrary)
        let toggleReadButton = document.createElement('button');
        toggleReadButton.innerText = myLibrary[bookNumber].isRead === true ? "Read" : "Unread";
        toggleReadButton.classList.add('toggle-read-button');
        toggleReadButton.addEventListener('click', function (e) {
            let dataBook = parseInt(e.target.parentElement.dataset.bookNumber);
            console.log(bookNumber);
            myLibrary[dataBook].toggleRead();
            refresh();
        })
        bookCard.appendChild(delButton);
        bookCard.appendChild(toggleReadButton);
        libraryContainer.appendChild(bookCard);
    });
}

function deleteBookFromLibrary(e) {
    let bookNumber = e.target.dataset.bookNumber;
    myLibrary.splice(bookNumber, 1);
    refresh();
}

function clearForm() {
    titleIn.value = '';
    authorIn.value = '';
    pagesIn.value = '';
}



// Eventr listeners


showBtn.addEventListener("click", () => {
    dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
    dialogElem.close();
});

subBtn.addEventListener('click', () => {
    addBookToLibrary();
    clearForm();
    refresh();
});


(function onLoad() {
    myLibrary.push(new Book(
        'The Hobbit',
        "J.R.R. Tolkien",
        295,
        false
    ));
    myLibrary.push(new Book(
        'The Way of Kings',
        "Brandon Sanderson",
        1034,
        false
    ));
    myLibrary.push(new Book(
        'Cradle: The Path of Gold',
        "Will Wight",
        803,
        false
    ));
    myLibrary.push(new Book(
        'Harry Potter and the Philosophers Stone',
        "JK Rowling",
        500,
        false
    ));
    refresh();
})();