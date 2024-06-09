import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import styles from './Responsive.module.css'
import SecurityPage from './SecurityPage';

const heading = {
    display: 'flex',
    height: 'auto',
    margin: '4px 0 0 20px',
    width: 'auto',
    fontFamily: 'cursive',
    position: 'absolute',
    left: '20px',
    right: '0',
  }
  

const Security = () => {
    return (
      <Fragment>
      <PageHeader title={'Welcome Rakesh M'} curPage={'Security'} />
      <Sidebar />
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body style={{margin: '1rem'}}>
                <h3 style={heading} className='mb-5'>Security</h3>
                <SecurityPage />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
    )
}

export default Security