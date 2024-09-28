const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks(library) {

    const row1 = document.querySelector('.row1')
    while (row1.firstChild) {
        row1.removeChild(row1.firstChild)
    }

    library.forEach(function(books) {
        let bookTitle = books.title
        const row = document.querySelector('.row1')
        const book = document.createElement('div')

        book.setAttribute('class', `book`)
        book.style.backgroundColor = 'rgb(0, 0, 0)'
        book.textContent = bookTitle;

        row.appendChild(book)
    })
}

displayBooks(myLibrary);

const formButton = document.querySelector('.newBook')
formButton.addEventListener('click', () => {
    const x = document.querySelector('form');
    if (x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none'
    }
})

const submitButton = document.querySelector('.submitBook')
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    title = document.querySelector('#title')
    author = document.querySelector('#author')
    pages = document.querySelector('#pages')
    read = document.querySelector('#read')
    if (read === 'checked') {
        read = 'yes'
    } else {
        read = 'no'
    }
    const book = new Book(title.value, author.value, pages.value, read)
    addBookToLibrary(book)
    displayBooks(myLibrary)
    console.log(myLibrary)
})
