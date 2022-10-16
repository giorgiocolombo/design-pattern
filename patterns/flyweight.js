export default function flyweight() {
    class Book {
        constructor(author, title, isbn){
            this.author = author;
            this.title = title;
            this.isbn = isbn;
        }
    }

    const books = new Map();

    const createBook = (author, title, isbn) => {
        if(books.has(isbn)){
            return books.get(isbn);
        }
        
        const book = new Book(author, title, isbn);
        books.set(isbn, book);
        return book;
    }

    const bookList = [];

    const addBook = (author, title, isbn, idOfCopy) => {
        const book = {
            ...createBook(author, title, isbn),
            idOfCopy,
        };

        bookList.push(book);
        return book;
    }

    addBook('JK Rowling', 'Harry Potter: la pietra filosofale', 'AB123', 0);
    addBook('JK Rowling', 'Harry Potter: la pietra filosofale', 'AB123', 1);
    addBook('JK Rowling', 'Harry Potter: i doni della morte', 'AB456', 3);
    addBook('JK Rowling', 'Harry Potter: la pietra filosofale', 'AB123', 2);
    addBook('JK Rowling', 'Harry Potter: i doni della morte', 'AB456', 4);

    console.log({books, bookList});
}