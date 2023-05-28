class Book {
  private name: string;
  private borrowed: boolean;

  constructor(name: string) {
    this.name = name;
    this.borrowed = false;
  }

  public borrowBook() {
    this.borrowed = true;
  }
  public returnBook() {
    this.borrowed = false;
  }
  public getName() {
    return this.name;
  }
  public getBorrowedStatus() {
    return this.borrowed;
  }
}

class Member {
  private name: string;
  private borrowedBooks: Book[];

  constructor(name: string) {
    this.name = name;
    this.borrowedBooks = [];
  }

  public borrowBook(book: Book): string {
    if (this.borrowedBooks.includes(book)) return "You already have this book";
    this.borrowedBooks.push(book);

    return "Borrowed book";
  }
  public returnBook(book: Book): string {
    if (!this.borrowedBooks.includes(book))
      return "You do not have this book to return";
    this.borrowedBooks = this.borrowedBooks.filter(
      (bookItem) => bookItem.getName() !== book.getName()
    );
  }
  public getBorrowedBooks(): Book[] {
    return this.borrowedBooks;
  }
  public getName() {
    return this.name;
  }
}

class Library {
  private bookCollection: Book[];
  private members: Member[];

  constructor() {
    this.bookCollection = [];
    this.members = [];
  }

  public getBookCollection(): Book[] {
    return this.bookCollection;
  }
  public getMembers(): Member[] {
    return this.members;
  }

  public addBooks(...args: Book[]): void {
    this.bookCollection = [...this.bookCollection, ...args];
  }
  public addMembers(...args: Member[]): void {
    this.members = [...this.members, ...args];
  }

  public loanBook(book: Book, person: Member): string {
    if (book.getBorrowedStatus() === true) return "Already loaned out";
    book.borrowBook();
    person.borrowBook(book);
    return `${book.getName()} has been loaned to ${person.getName()}`;
  }

  public recieveBookReturn(book: Book, person: Member): string {
    book.returnBook();
    person.returnBook(book);
    return `${person.getName()} has returned ${book.getName()}`;
  }
}

const lotr = new Book("Lord of the Rings");
const harryPotter = new Book("Harry Potter");
const wheelOfTime = new Book("Wheel of Time");

const tom = new Member("Tom");
const dick = new Member("Dick");
const harry = new Member("Harry");

const localLib = new Library();

localLib.addBooks(lotr, harryPotter, wheelOfTime);
localLib.addMembers(tom, dick, harry);

console.log(localLib.loanBook(lotr, tom));
console.log(localLib.loanBook(harryPotter, dick));
console.log(localLib.recieveBookReturn(lotr, tom));
