import React from 'react';

const Books = React.createClass({
  handleClick: function() {
    this.props.incrementStock(this.props.book);
  },

  handleClickRemove: function() {
    this.props.decrementStock(this.props.book);
  },

  handleChange(event) {
    const nextStock = event.target.stock;

    this.setState({ stock: nextStock });
  },

  render() {
    return (
          <tbody>
            <tr className="row1">
              <td>
                <img src={this.props.book.cover} alt="A Game of Thrones"/>
              </td>

              <td>
                <div className="title">{this.props.book.title}</div>
                <div>{this.props.book.author}</div>
                <div>Published in {this.props.book.year}</div>
                <div>ISBN {this.props.book.isbn}</div>
              </td>

              <td>
                <input
                  type="button"
                  onClick={this.handleClickRemove}
                  value="-"
                />
                <label className="show">{this.props.book.stock}</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  className="hide"
                  size="4"
                  value={this.props.book.stock}
                />
                <input
                  type="button"
                  onClick={this.handleClick}
                  value="+"
                />
              </td>
            </tr>
          </tbody>
    )
  }
});

export default Books;
