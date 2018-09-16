import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthor = () => {
    const { data } = this.props;

    if (data.loading) return <option>Loading Author...</option>;
    return data.authors.map(author => (
      <option id={author.id}>{author.name}</option>
    ));
  };
  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name: </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Book name: </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author: </label>
          <select>
            <option>Select Author</option>
            {this.displayAuthor()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
