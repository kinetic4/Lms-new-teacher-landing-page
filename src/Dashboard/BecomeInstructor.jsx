import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

const BecomeInstructorPage = () => {
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
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Row>
      <Col md={8} style={{ width: '70rem' }}>
        <h3 className="mb-5">Become Instructor</h3>

        <Form>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="d-flex">Email</Form.Label>
            <Form.Control type="text" placeholder="Email" defaultValue="Student@example.com" style={formStyle} />
          </Form.Group>
          <Form.Group controlId="formCurrentPassword" className="mb-3">
            <Form.Label className="d-flex">Current Password</Form.Label>
            <Form.Control type="password" placeholder="Current Password" style={formStyle} />
          </Form.Group>
          <Form.Group controlId="formNewPassword" className="mb-3">
            <Form.Label className="d-flex">New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" style={formStyle} />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-4">
            <Form.Label className="d-flex">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" style={formStyle} />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mb-4">
            <Form.Label className="d-flex">Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone No" style={formStyle} />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mb-4">
            <Form.Label className="d-flex">Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone No" style={formStyle} />
          </Form.Group>

          <Form.Label className="d-flex">Select</Form.Label>
          <InputGroup className="mb-3"                  >
<Form.Control aria-label="Text input with dropdown button" style={{    boxShadow: '0 13px 14px 0 rgba(129,104,145,.05)', backgroundColor: 'transparent',  border: '2px solid #e6e3f1', }} />

<DropdownButton
  variant="outline-secondary"
  title="Dropdown"
  id="input-group-dropdown-2"
  align="end"
>
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">Separated link</Dropdown.Item>
</DropdownButton>
</InputGroup>
        
          <Button variant="primary" type="submit" className="mt-2">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default BecomeInstructorPage;
