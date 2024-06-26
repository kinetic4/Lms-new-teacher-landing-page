import React from 'react'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';


const ProfilePage = () => {

  const formStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '2px solid #e6e3f1',
    borderRadius: '6px',
    lineHeight: '23px',
    padding: '10px 20px',
    fontSize: '14px',
    color: '#6b7385',
    marginBottom: '15px',
    boxShadow: '0 13px 14px 0 rgba(129,104,145,.05)'
  }

  return (
    <Form>
    <Row>
      <Col md={6}>
        <Form.Group controlId="formFirstName" className="mb-3">
          <Form.Label className='d-flex'>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" defaultValue="First Name" style={formStyle} />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="formLastName" className="mb-3">
          <Form.Label className='d-flex'>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" defaultValue="Last Name" style={formStyle} />
        </Form.Group>
      </Col>
    </Row>
    <Form.Group controlId="formBio" className="mb-3">
      <Form.Label className='d-flex'>Your bio</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Webflow development."
        style={formStyle}
      />
    </Form.Group>
    <Form.Group controlId="formTwitterLink" className="mb-3">
      <Form.Label className='d-flex'>Add Twitter Link</Form.Label>
      <Form.Control type="text" placeholder="Add Twitter Link" defaultValue="https://www.twitter.com" style={formStyle} />
    </Form.Group>
    <Form.Group controlId="formLinkedLink" className="mb-3">
      <Form.Label className='d-flex'>Add LinkedIn Link</Form.Label>
      <Form.Control type="text" placeholder="Add LinkedIn Link" defaultValue="https://www.linkedin.com" style={formStyle} />
    </Form.Group>
    <Form.Group controlId="formFacebookLink" className="mb-4">
      <Form.Label className='d-flex'>Add Facebook Link</Form.Label>
      <Form.Control type="text" placeholder="https://www.facebook.com" style={formStyle} />
    </Form.Group>
    <Button variant="primary" type="submit" className="mt-2">
      Save
    </Button>
    <Button variant='primary' type='submit' className='mt-2'>
      Upload
    </Button>
  </Form>
  )
}

export default ProfilePage