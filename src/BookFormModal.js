import React from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { Form, Button, Container } from 'react-bootstrap';
// import BestBooks from './BestBooks';


class BookFormModal extends React.Component {

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status
    } 
    this.props.postBooks(newBook)
  }

  render() {
    return (
      <>
      <h1>Book for modal{this.props.testValue}</h1>
        <Modal
          show={this.props.showModal}
          onSubmit={this.props.handleOnShowModal}
          onHide={this.props.handleOnHide}>
          <Modal.Header closeButton>
           
          </Modal.Header>
          {/* <Image src={this.props.selectedBook.image_url} alt={this.props.selectedBook.title} /> */}
          <Modal.Body>
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group className='mb-3' controlId='title'>
                <Form.Label>Book Title</Form.Label>
                <Form.Control name="title" type='bookTitle' placeholder='Book Title' />
                <Form.Label>Book Description</Form.Label>
                <Form.Control name="description" type='description' placeholder='Book Description' />
                <Form.Label>Book Value</Form.Label>
                <Form.Control name="value" type='description' placeholder='Book Value' />
                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal >
      </>
    );
  }
}

// <Modal.Header closeButton>
//   <Modal.Title>{this.state.selectedPerson}</Modal.Title>
// </Modal.Header>
export default BookFormModal;

