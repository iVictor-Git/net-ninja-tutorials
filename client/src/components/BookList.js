import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading books...</div>;
    }
    return data.books.map(book => {
      return <li id={book.id}>{book.name}</li>;
    });
  };
  render() {
    return (
      <div id="main">
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
