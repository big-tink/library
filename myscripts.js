const myLibrary = [
    {title: 'The Hobbit'},
    {title: 'The Hunger Games'},
    {title: 'I did it, im the best no ones better ever anywhere'}
]

function Book() {

}

function addBookToLibrary() {

}

function displayBooks(library) {

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