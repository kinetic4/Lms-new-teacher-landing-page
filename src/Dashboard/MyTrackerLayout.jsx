import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Responsive.module.css'
import MyTrackerPage from './MyTrackerPage';


const MyTracker = () => {
  const heading = {
    display: 'flex',
    height: 'auto',
    margin: '16px 0 0 20px',
    width: 'auto',
    fontFamily: 'cursive',
    position: 'absolute',
    left: '20px',
    right: '0',
    fontFamily: 'Josefin Sans, sans-serif',
        fontOpticalSizing: 'auto',
    fontWeight: '700', // Replace <weight> with the desired font weight value
    fontStyle: 'normal',
    color: '#Black'
  }
  return (
    <Fragment>
      <PageHeader title={'Welcome Rakesh M'} curPage={'My Tracker'} />
      <Sidebar />
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body className="d-flex justify-content-center align-items-flex-start" style={{ minHeight: '19rem' }}>
                <h5 style={heading}>My Tracker</h5>
                <MyTrackerPage />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default MyTracker