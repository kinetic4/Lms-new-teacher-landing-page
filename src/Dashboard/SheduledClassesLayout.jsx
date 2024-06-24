import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Responsive.module.css'
import SheduledClassesPage from './SheduledClassesPage';

const SheduledClasses = () => {

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
    color: '#black'
  }

    return (
        <Fragment>
            <PageHeader title={'Welcome Rakesh M'} curPage={'Create Class'} />
            <Sidebar />
            <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body>
                <h5 style={heading}>Sheduled Classes</h5>
                <SheduledClassesPage />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </Fragment>
    )
}

export default SheduledClasses