import React from 'react';
import Books from './Books';

const App = React.createClass({
  getInitialState() {
    return {
      books: [{
          author: 'George R. R. Martin',
          cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
          isbn: '978-0553103547',
          stock: 7,
          title: 'A Game of Thrones',
          year: 1996
        }, {
          author: 'Neal Stephenson',
          cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
          isbn: '978-1491515051',
          stock: 3,
          title: 'Snow Crash',
          year: 1992
        }, {
          author: 'Andy Weir',
          cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
          isbn: '978-0804139021',
          stock: 11,
          title: 'The Martian',
          year: 2014
        }
      ]
    };
  },

  incrementStock(book) {
    const nextBooks = this.state.books.map((element) => {
      if (book !== element || book.stock === 99) {
        return element;
      }

      const addStock = book.stock + 1;

      const nextBook = Object.assign({}, book, { stock: addStock });

      return nextBook;
    });

    this.setState({ books: nextBooks });
  },

  decrementStock(book) {
    const nextBooks = this.state.books.map((element) => {
      if (book !== element || book.stock === 0) {
        return element;
      }

      const removeStock = book.stock - 1;

      const nextBook = Object.assign({}, book, { stock: removeStock });

      return nextBook;
    });

    this.setState({ books: nextBooks });
  },

  render() {
    const books = this.state.books.map((book, index) => {
      return <Books
        decrementStock={this.decrementStock}
        incrementStock={this.incrementStock}
        book={book}
        key={index}
      />
    });

    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>

          {books}

        </table>

      </div>
    )
  }
});

export default App;
