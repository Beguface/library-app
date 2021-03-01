import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _books: Book[] =

      [
          {
              id: 9781722834920,
              title: "Learn Programming",
              author: "Cameron Williamson",
              pages: 180,
              edition: "Your Guided Tour Through the Programming Jungle",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9781722834920.png",
              rented: false
                       },
          {
              title: "Graph Databases For Beginners",
              author: "Albert Flores",
              pages: 200,
              edition: "The #1 Platform for Connected Data",
              id: 1001606307637,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001606307637.png",
              rented: false

          },
          {
              title: "Elementary Algorithms",
              author: "Courtney Henry",
              pages: 211,
              edition: "",
              id: 1001606307729,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001606307729.png",
              rented: false

          },
          {
              title: "Windows PowerShell Networking Guide",
              author: "Kathryn Murphy",
              pages: 222,
              edition: "",
              id: 1001606307964,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001606307964.png",
              rented: false

          },
          {
            id: 1001606140658,
              title: "Operating Systems: From 0 to 1",
              author: "Guy Hawkins",
              pages: 120,
              edition: "",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001606140658.png",
              rented: false

          },
          {
              title: "Java Web Scraping Handbook",
              author: "Ronald Richards",
              pages: 223,
              edition: "Learn advanced Web Scraping techniques",
              id: 1001606140805,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001606140805.png",
              rented: false

          },
          {
              title: "Coffee Break Python Slicing",
              author: "Courtney Henry",
              pages: 233,
              edition: "24 Workouts to Master Slicing in Python, Once and for All",
              id: 1001605784161,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001605784161.png",
              rented: false

          },
          {
              title: "The Basics of User Experience Design",
              author: "Eleanor Pena",
              pages: 321,
              edition: "",
              id: 1001601301730,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001601301730.png",
              rented: false

          },
          {
              title: "3D Game Development with LWJGL 3",
              author: "Courtney Henry",
              pages: 322,
              edition: "Learn the main concepts involved in writing 3D games using the Lighweight Java Gaming Library",
              id: 1001601302020,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001601302020.png",
              rented: false

          },
          {
              title: "DevOps: WTF?",
              author: "Jacob Jones",
              pages: 124,
              edition: "",
              id: 1001592565453,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001592565453.png",
              rented: false

          },
          {
              title: "Full Speed Python",
              author: "Marvin McKinney",
              pages: 222,
              edition: "",
              id: 1001592395975,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001592395975.png",
              rented: false

          },
          {
              title: "How To Code in Python 3",
              author: "Jerome Bell",
              pages: 200,
              edition: "",
              id: 9780999773017,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9780999773017.png",
              rented: false

          },
          {
              title: "Operating System Concepts, 10th Edition",
              author: "Jane Cooper",
              pages: 221,
              edition: "",
              id: 9781119456339,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9781119456339.png",
              rented: false

          },
          {
              title: "Neural Networks and Deep Learning",
              author: "Robert Fox",
              pages: 212,
              edition: "A Textbook",
              id: 9783319944623,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9783319944623.png",
              rented: false

          },
          {
              title: "Fundamentals of C++ Programming",
              author: "Devon Lane",
              pages: 232,
              edition: "",
              id: 1001590483252,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001590483252.png",
              rented: false

          },
          {
              title: "Fundamentals of Python Programming",
              author: "Marianny Baoez",
              pages: 50,
              edition: "",
              id: 1001590485785,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001590485785.png",
              rented: false

          },
          {
              title: "Machine Learning Yearning",
              author: "Kristin Watson",
              pages: 222,
              edition: "Technical Strategy for AI Engineers, In the Era of Deep Learning",
              id: 1001590486081,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001590486081.png",
              rented: false

          },
          {
              title: "React in patterns",
              author: "Albert Flores",
              pages: 180,
              edition: "",
              id: 1001590486262,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/1001590486262.png",
              rented: false

          },
          {
              title: "AI Blueprints",
              author: "Arlene McCoy",
              pages: 110,
              edition: "How to build and deploy AI business projects",
              id: 9781788992879,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9781788992879.png",
              rented: false

          },
          {
              title: "Data Analysis with Python",
              author: "Brooklyn Simmons",
              pages: 45,
              edition: "A Modern Approach",
              id: 9781789950069,
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quo recusandae corporis aperiam voluptates rem, exercitationem dolorem laborum nemo perspiciatis, magnam ullam soluta dolore doloremque dignissimos, nihil earum. Voluptatum, sed? Quidem, quaerat corrupti? Delectus necessitatibus ea repellendus. Corrupti sequi aspernatur asperiores ipsum, non, minus aut culpa facilis tenetur vero nostrum sed eos consectetur ad voluptatibus ab dicta nulla voluptate reiciendis?",
              image: "https://itbook.store/img/books/9781789950069.png",
              rented: false

          }
      ]




  get allBooks(): Book[] {
    return [...this._books];
}

  constructor() { }
rentBook(id: number) {
  console.log(id)
}

returnBook(id: number) {
  console.log(id)
}


}
