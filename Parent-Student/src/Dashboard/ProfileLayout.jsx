import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import styles from './Responsive.module.css'
import ProfilePage from './ProfilePage';

  

const Profile = () => {
    return (
      <Fragment>
      <PageHeader title={'Welcome Rakesh M'} curPage={'Profile'} />
      <Sidebar />
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
              <Card.Body style={{margin: '1rem'}}>
                <h3 className="mb-5">Profile Info</h3>
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