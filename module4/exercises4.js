'use strict'
//Point
class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  plus(point) {
    return new Point(this._x + point._x, this._y + point._y);
  }
}

//Speaker and Screamer
function SpeakerES5(name) {
  this._name = name;
}

SpeakerES5.prototype.speak = function (words){
  console.log(`${this._name} says ${words}`)
}

function ScreamerES5(_name) {
  SpeakerES5.call(this, _name);
}
ScreamerES5.prototype.speak = function (words) {
  console.log(`${this._name} shouts ${words.toUpperCase()}`);
}

class SpeakerES6 {
  constructor(name) {
    this._name = name;
  }
  speak(words) {
    console.log(`${this._name} says ${words}`);
  }
}

class ScreamerES6 extends SpeakerES6 {
  constructor(name) {
    super(name);
  }
  speak(words) {
    console.log(`${this._name} shouts ${words.toUpperCase()}`);
  }
}

//The Reading List
class BookList {
  constructor(){
    this.booksFinished = 0;
    this.booksNotFinished = 0;
    this.nextBook = null;
    this.currentBook = null;
    this.lastBook = null;
    this.books = [];
  }

  add(book) {
    this.books.push(book);
    this.booksNotFinished++;
    this.currentBook = this.books[this.booksFinished];
    this.nextBook = this.books[this.booksFinished + 1];
  }

  finishCurrentBook() {
    this.booksFinished++;
    this.booksNotFinished--;
    this.currentBook.markAsRead();
    this.lastBook = this.currentBook;
    this.currentBook = this.books[this.booksFinished];
    this.nextBook = this.books[this.booksFinished + 1];
  }

}

class Book {
  constructor(title, genre, author){
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._isRead = false;
    this._dateFinished = null;
  }

  markAsRead(){
    this._isRead = true;
    this._dateFinished = new Date(Date.now());
  }
}


