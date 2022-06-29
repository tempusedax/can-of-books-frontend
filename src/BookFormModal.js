import React from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { Form, Button, Container } from 'react-bootstrap';
import BestBooks from './BestBooks';


class BookFormModal extends React.Component {

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

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

  render() {
    return (
      <>
        <Button onClick={this.state.handleShowModal} variant='primary' type='submit'>
          Add Book
        </Button>
        
        <Modal
          show={this.props.showModal}
          onHide={this.props.onHide}>
          <Modal.Header closeButton>
            {this.props.selectedBook.title}
          </Modal.Header>
          <Image src={this.props.selectedBook.image_url} alt={this.props.selectedBook.title} />
          <Modal.Body>
            <Form onSubmit={this.handleOnShowModal}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Book Title</Form.Label>
                <Form.Control name="title" type='bookTitle' placeholder='Book Title' />
                <Form.Label>Book Description</Form.Label>
                <Form.Control name="description" type='bookDescription' placeholder='Book Description' />
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

