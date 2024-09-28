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
    const row2 = document.querySelector('.row2')
    while (row2.firstChild) {
        row2.removeChild(row2.firstChild)
    }
    const row3 = document.querySelector('.row3')
    while (row3.firstChild) {
        row3.removeChild(row3.firstChild)
    }   
    const row4 = document.querySelector('.row4')
    while (row4.firstChild) {
        row4.removeChild(row4.firstChild)
    }

    library.forEach(function(books, index) {

        if (index < 15) {
            let bookTitle = books.title
            const row = document.querySelector('.row1')
            const book = document.createElement('div')
            book.setAttribute('class', `book`)
            book.style.backgroundColor = 'rgb(0, 0, 0)'
            book.textContent = bookTitle;
            row.appendChild(book)
        } else if (index > 14 && index < 30) {
            let bookTitle = books.title
            const row = document.querySelector('.row2')
            const book = document.createElement('div')
            book.setAttribute('class', `book`)
            book.style.backgroundColor = 'rgb(0, 0, 0)'
            book.textContent = bookTitle;
            row.appendChild(book)
        } else if (index > 29 && index < 45) {
            let bookTitle = books.title
            const row = document.querySelector('.row3')
            const book = document.createElement('div')
            book.setAttribute('class', `book`)
            book.style.backgroundColor = 'rgb(0, 0, 0)'
            book.textContent = bookTitle;
            row.appendChild(book)
        } else if (index > 44 && index < 60) {
            let bookTitle = books.title
            const row = document.querySelector('.row4')
            const book = document.createElement('div')
            book.setAttribute('class', `book`)
            book.style.backgroundColor = 'rgb(0, 0, 0)'
            book.textContent = bookTitle;
            row.appendChild(book)
        } 
    })
    
    if (library.length > 59) {
        alert(`Book stored in the array. \n` +
              `${library.length - 60}` + ` extra books are currently stored.`
        )
    }

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
    checkRead = document.querySelector('#read')
    if (checkRead.checked === true) {
        read = 'yes'
    } else {
        read = 'no'
    }
    
    const book = new Book(title.value, author.value, pages.value, read)
    addBookToLibrary(book)
    displayBooks(myLibrary)


    const form = document.querySelector('form')
    form.style.display = 'none'
    checkRead.checked = false
})
