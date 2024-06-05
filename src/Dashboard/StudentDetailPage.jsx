import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Breadcrumb,
  ProgressBar,
  ListGroup,
  Button,
  Form
} from 'react-bootstrap';

import { FaGlobe, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const StudentDetailPage = () => {
  return (
    <section style={{ width: '68rem', marginTop: '2rem' }}>
      <Container className="py-5">


        <Row>
          <Col lg={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Card.Img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button>Follow</Button>
                  <Button variant="outline-primary" className="ms-1">Message</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-4 mb-lg-0">
              <Card.Body className="p-0">
                <ListGroup flush className="rounded-3">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <FaGlobe className="text-warning fa-lg" />
                    <Card.Text>International</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <FaGithub className="text-dark fa-lg" />
                    <Card.Text>Github</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <FaTwitter className="text-info fa-lg" />
                    <Card.Text>Twitter</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <FaInstagram className="text-danger fa-lg" />
                    <Card.Text>Instagram</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <FaFacebook className="text-primary fa-lg" />
                    <Card.Text>Facebook</Card.Text>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col sm={3}>
                    <Card.Text>Full Name</Card.Text>
                  </Col>
                  <Col sm={9}>
                    <Form.Group controlId="formFullName">

                      <Form.Control type="text" placeholder="Johnathan" style={{ border: 'none', textAlign: 'center', boxShadow: 'none' }} />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <Card.Text>Email</Card.Text>
                  </Col>
                  <Col sm={9}>
                    <Form.Group controlId="formEmail  ">

                      <Form.Control type="text" placeholder="example@example.com" style={{ border: 'none', textAlign: 'center', boxShadow: 'none' }} />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <Card.Text>Phone</Card.Text>
                  </Col>
                  <Col sm={9}>
                    <Form.Group controlId="formPhone  ">

                      <Form.Control type="text" placeholder="(097) 234-5678" style={{ border: 'none', textAlign: 'center', boxShadow: 'none' }} />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <Card.Text>Mobile</Card.Text>
                  </Col>
                  <Col sm={9}>
                    <Form.Group controlId="formMobile">

                      <Form.Control type="text" placeholder="(097) 234-5678" style={{ border: 'none', textAlign: 'center', boxShadow: 'none' }} />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <Card.Text>Address</Card.Text>
                  </Col>
                  <Col sm={9}>
                    <Form.Group controlId="formAddress">

                      <Form.Control type="text" placeholder="Bay Area, San Francisco, CA" style={{ border: 'none', textAlign: 'center', boxShadow: 'none' }} />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row>
              <Col md={6}>
                <Card className="mb-4 mb-md-0">
                  <Card.Body>
                    <Card.Text className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</Card.Text>
                    <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</Card.Text>
                    <ProgressBar now={80} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</Card.Text>
                    <ProgressBar now={72} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</Card.Text>
                    <ProgressBar now={89} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</Card.Text>
                    <ProgressBar now={55} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</Card.Text>
                    <ProgressBar now={66} className="rounded" />
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="mb-4 mb-md-0">
                  <Card.Body>
                    <Card.Text className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</Card.Text>
                    <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</Card.Text>
                    <ProgressBar now={80} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</Card.Text>
                    <ProgressBar now={72} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</Card.Text>
                    <ProgressBar now={89} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</Card.Text>
                    <ProgressBar now={55} className="rounded" />

                    <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</Card.Text>
                    <ProgressBar now={66} className="rounded" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default StudentDetailPage