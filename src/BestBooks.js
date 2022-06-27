import axios from 'axios';
import React from 'react';
import Carousel from "react-bootstrap/Carousel";


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      response: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let results = await axios.get(#server0/books);
      this.setState({
        books: results.data

      })
    } catch(error) {
      error.response.data
    }
  }

componentDidMount() {
  axios
  // .get(`${REACT_APP_SERVER_URL}/books/${#authenticator}`)
  .then((bookResponse) => {
    this.setState({ books: bookResponse.data });
    console.log(this.state.books);
  })
  .catch((error) => alert("the book collection is empty."));
};

}


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
