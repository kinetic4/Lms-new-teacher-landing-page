import React, { Fragment } from 'react'
import Sidebar from '../component/layout/sidebar'
import PageHeader from "../component/layout/pageheader";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Responsive.module.css'
import SubscriptionCourseList from './BecomeInstructor';
import BecomeInstructorPage from './BecomeInstructor';



const BecomeInstructor = () => {

  const heading = {
    display: 'flex',
    height: 'auto',
    margin: '14px 0 0 20px',
    width: 'auto',
    fontFamily: 'cursive',
    position: 'absolute',
    left: '20px',
    right: '0',
  }


  return (
    <Fragment>
     <PageHeader title={'Welcome Rakesh M'} curPage={'Become Instructor'}/>
     <Sidebar />
     <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body >
                {/* <h5 style={heading}>Become Instructor  </h5> */}
                <BecomeInstructorPage />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default BecomeInstructor