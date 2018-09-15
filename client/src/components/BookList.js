import React, { Component } from 'react';
import { gql } from 'apollo-boost';
// import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class BookList extends Component {
    render() {
        return (
            <div id="main">
                <ul id="book-list">
                    <li>Book</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
