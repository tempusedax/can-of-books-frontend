import React from 'react';
import axios from 'axios';
import BookFormModal from './BookFormModal';
import { Form, Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
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
    // console.log(this.state.books)
  }
 
  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };


  handleOnShowModal = (book) => {
    this.setState({
      showModal: true,
      selectedBook: book
    });
  };

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);;
      this.setState({
        books: [...this.state.books, createdBook.data],
        showModal: false
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
    console.log(this.state.books);
  }
  //when site loads- i say specific ocomponent loads and will be displayed
  componentDidMount() {
    this.getBooks();
  }



    async deleteBook(id) {

      try{
        let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
        await axios.delete(url);
        let updatedBooks = this.state.books.filter(book => book._id !== id);
        this.setState({
          books: updatedBooks,
        })
      } catch (err) {
        console.log(err, 'Error');
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
            <Button 
            onClick={() => this.deleteBook(book._id)} variant="danger">
            Delete
        </Button>
          </Carousel.Caption>
          {/* <Button>Delete</Button> */}
        </Carousel.Item>
        
      )
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button onClick={this.handleOnShowModal} variant='primary' type='submit'>
          Add Book
        </Button>
        {this.state.books.length ? (
          <Carousel>
            {books}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
  <BookFormModal 
         showModal={this.state.showModal}
         onHide={this.handleOnHide}
         postBooks={this.postBooks}

  />
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
