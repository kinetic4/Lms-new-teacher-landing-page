import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import styles from './Responsive.module.css'
import ProfilePage from './ProfilePage';
import Header from '../component/layout/header';

const heading = {
  fontFamily: 'Josefin Sans, sans-serif',
  fontOpticalSizing: 'auto',
fontWeight: '700', // Replace <weight> with the desired font weight value
fontStyle: 'normal',
color: 'black'
}  

const Profile = () => {
    return (
      <Fragment>
        <Header />
      <PageHeader title={'Welcome Rakesh M'} curPage={'Profile'} />
      <Sidebar />
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body style={{margin: '1rem'}}>
                <h3 className="mb-5" style={heading}>Profile Info</h3>
                <ProfilePage />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
    )
}

export default Profile