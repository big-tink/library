const myLibrary = [
    {title: 'The Hobbit'},
    {title: 'The Hunger Games'},
    {title: 'I did it, im the best no ones better ever anywhere'}
]

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.addBookToLibrary = addBookToLibrary(this.title, this.author, this.pages, this.read);
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

const formButton = document.querySelector('.newBook')
formButton.addEventListener('click', () => {
    const x = document.querySelector('form');
    if (x.style.display === 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none'
    }
})


const newBook = new Book('Harry Potter', 'J K Rowling', '542', 'yes');
console.log(newBook)