import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`http://localhost:3001/books`);
      this.setState({
        books: results.data
      })
      console.log(results)
    } catch(error) {
      console.log('we have an error: ', error.response.data)
    }
    }

    async deleteBook(id) {

      try{
        let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
        await axios.delete(url);
        let updatedBooks = this.state.books.filter(book => book._id !== id);
        this.setState({
          books: updatedBooks,
        })
        console.log(this.state.books)
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
