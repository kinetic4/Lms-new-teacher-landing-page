import React from 'react'
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';


const AccountPage = () => {
  
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
  
  const heading = {
    fontFamily: 'Josefin Sans, sans-serif',
    fontOpticalSizing: 'auto',
fontWeight: '700', // Replace <weight> with the desired font weight value
fontStyle: 'normal',
color: 'black'
  }

  return (
    <Row>
    <Col md={4} className="mb-4 mb-md-0">
      <div className='mb-3'>
        <h5 style={heading}>Profile Photo</h5>
        <Image src='assets/images/clients/02.jpg' roundedCircle className='mb-3' style={{ width: '150px', height: '150px' }} />
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary" className="m-1" >Update</Button>
          <Button variant="outline-danger" className='m-1'>Delete</Button>
        </div>
      </div>
    </Col>
    <Col md={8}>
      <h3 className='mb-5' style={heading}>Account Info</h3>
      
      <Form>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label className='d-flex'>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" defaultValue="Student@example.com" style={formStyle} />
        </Form.Group>
        <Form.Group controlId="formCurrent Password" className="mb-3">
          <Form.Label className='d-flex'>Current Password</Form.Label>
          <Form.Control type="password" placeholder="Current Password" style={formStyle} />
        </Form.Group>
        <Form.Group controlId="formNewPassword" className="mb-3">
          <Form.Label className='d-flex'>New Password</Form.Label>
          <Form.Control type="password" placeholder="New Password" style={formStyle} />
        </Form.Group>
        <Form.Group controlId="formconfirmPassword" className="mb-4">
          <Form.Label className='d-flex'>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" style={formStyle} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Save
        </Button>
      </Form>
    </Col>
  </Row>
  )
}

export default AccountPage