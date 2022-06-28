import React from 'react';
import axios from 'axios';
import { Form, Button, ListGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: results.data
      })
      console.log(results)
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }

  //when site loads- i say specific ocomponent loads and will be displayed
  componentDidMount() {
    this.getBooks();
  }




  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */
    let books = this.state.books.map((book, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src="./images/shutterstock_40063717.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>{book.genre}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
                    <Carousel>
                    {books}
                  </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

// {* <ListGroup>
// {this.state.books.map(book => (
//   <BestBooks key={book._id} book={book}  />
// ))}
// </ListGroup> */

export default BestBooks;
