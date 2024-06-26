import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';


const Books = () => {

    const border = {
        border: 'none'
    }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Discover Your Next Book</h2>
      <a href="#" className="d-block mb-4">
        View All
      </a>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        <Col>
          <Card style={border}>
            <Card.Img variant="top" src='assets/images/Books/01.jpg' alt="Book Cover" />
            <Card.Body>
              <a href="#">
              <Card.Title>
                A Short History of Europe{' '}
                <Badge bg="danger">Sale!</Badge>
              </Card.Title>
              </a>
              <Card.Subtitle className="mb-2 mt-2 text-muted">
                Simon Jenkins
              </Card.Subtitle>
              <Card.Text>From Pericles to Putin</Card.Text>
              <Card.Text className="fw-bold">
                $40.00 <del>$46.00</del>
              </Card.Text>
              <Card.Text>
                <small className="text-muted">History of Europe</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={border}> 
            <Card.Img variant="top" src='assets/images/Books/01.jpg' alt="Book Cover" />
            <Card.Body>
              <a href=""><Card.Title>Shakespeare's Sonnets, Retold</Card.Title></a>
              <Card.Subtitle className="mb-2 mt-2 text-muted">
                William Shakespeare & James Anthony
              </Card.Subtitle>
              <Card.Text>Foreword by Stephen Fry</Card.Text>
              <Card.Text className="fw-bold">$27.00</Card.Text>
              <Card.Text>
                <small className="text-muted">Sonnets</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={border}>
            <Card.Img variant="top" src='assets/images/Books/01.jpg' alt="Book Cover" />
            <Card.Body>
              <a href=""><Card.Title>Becoming</Card.Title></a>
              <Card.Subtitle className="mb-2 mt-2 text-muted">
                Michelle Obama  
              </Card.Subtitle>
              <Card.Text className="fw-bold">$28.00</Card.Text>
              <Card.Text>
                <small className="text-muted">Becoming</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={border}>
            <Card.Img variant="top" src="assets/images/Books/01.jpg" alt="Book Cover" />
            <Card.Body>
              <a href=""><Card.Title>The Penguin Classics Book</Card.Title></a>
              <Card.Subtitle className="mb-2 mt-2 text-muted">
                Henry Eliot
              </Card.Subtitle>
              <Card.Text className="fw-bold">$26.00 – $28.00</Card.Text>
              <Card.Text>
                <small className="text-muted">Penguin Classics</small>
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Daniel Trejo, Jon Snow</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Books