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
            const row = document.querySelector('.row1')
            createBook(books, index, row)
        } else if (index > 14 && index < 30) {
            const row = document.querySelector('.row2')
            createBook(books, index, row)
        } else if (index > 29 && index < 45) {
            const row = document.querySelector('.row3')
            createBook(books, index, row)
        } else if (index > 44 && index < 60) {
            const row = document.querySelector('.row4')
            createBook(books, index, row)
        }
    })

    if (library.length > 59) {
        alert(`Book stored in the array. \n` +
              `${library.length - 60}` + ` extra books are currently stored.`
        )
    }

    document.querySelectorAll('.removeButton').forEach(button => {
        button.addEventListener('click', removeBook)
    })

    document.querySelectorAll('.book').forEach(displayedBook => {
        displayedBook.addEventListener('click', displayInfo)
    })

    document.querySelectorAll('.changeReadButton').forEach(changeButton => {
        changeButton.addEventListener('click', changeRead)
    })

}

function displayInfo(event) {
    const index = event.target.getAttribute('data-index')
    const object = myLibrary[index]

    const title = document.querySelector('.title')
    const author = document.querySelector('.author')
    const pages = document.querySelector('.pages')
    const read = document.querySelector('.read')
    
    title.textContent = `Title: ` + `${object.title}`
    author.textContent = `Author: ` + `${object.author}`
    pages.textContent = `Pages: ` + `${object.pages}`
    read.textContent = `Read: ` + `${object.read}`
    
}

function removeBook(event) {
    const index = event.target.getAttribute('data-index')
    myLibrary.splice(index, 1)
    displayBooks(myLibrary)
}

function changeRead(event) {
    const index = event.target.getAttribute('data-index')
    const object = myLibrary[index]

    if (object.read === 'yes') {
        object.read = 'no'
        event.target.style.backgroundColor = 'rgb(117, 37, 15)'
        return object.read
    } else if (object.read === 'no') {
        object.read = 'yes'
        event.target.style.backgroundColor = 'rgb(15, 117, 37)'
        return object.read
    }

}

function createBook(books, index, row) {
    let bookTitle = books.title
    const redDark = Math.floor(Math.random() * (60) + 1)
    const greenDark = Math.floor(Math.random() * (60) + 1)
    const blueDark = Math.floor(Math.random() * (60) + 1)
    const redLight = Math.floor(Math.random() * (150 - 100) + 100)
    const greenLight = Math.floor(Math.random() * (150 - 100) + 100)
    const blueLight = Math.floor(Math.random() * (150 - 100) + 100)
    const height = Math.floor(Math.random() * (200 - 150) + 150)

    const book = document.createElement('div')
    book.setAttribute('class', `book`)
    book.setAttribute('data-index', `${index}`)
    book.style.backgroundImage = `linear-gradient(90deg, rgb(${redDark}, ${greenDark}, ${blueDark}),
    rgb(${redLight}, ${greenLight}, ${blueLight}) 15%,
    rgb(${redDark}, ${greenDark}, ${blueDark}) 80%)`
    book.style.height = `${height}px`
    book.textContent = bookTitle;

    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'removeButton')
    removeButton.setAttribute('data-index', `${index}`)
    removeButton.textContent = 'X'

    const changeReadButton = document.createElement('button')
    changeReadButton.setAttribute('class', 'changeReadButton')
    changeReadButton.setAttribute('data-index', `${index}`)
    if (myLibrary[index].read === 'yes') {
        changeReadButton.style.backgroundColor = 'rgb(15, 117, 37)'
    } else {
        changeReadButton.style.backgroundColor = 'rgb(117, 37, 15)'
    }

    row.appendChild(book)
    book.appendChild(removeButton)
    book.appendChild(changeReadButton)
}

function clearForm() {

    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const checkRead = document.querySelector('#read')
    const form = document.querySelector('form')

    title.value = ''
    author.value = ''
    pages.value = ''
    checkRead.checked = false
    form.style.display = 'none'

}

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

    if (title.value === '' || author.value === '' || pages.value === '') {
        alert('Please complete all fields!')
        return false
    }

    const book = new Book(title.value, author.value, pages.value, read)
    addBookToLibrary(book)
    displayBooks(myLibrary)
    clearForm()

})

Book.prototype.changeRead = function() {
    if (this.read === 'yes') {
        this.read = 'no'
    } else if (this.read === 'no') {
        this.read = 'yes'
    }
}
