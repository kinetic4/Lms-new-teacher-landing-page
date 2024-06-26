import React, { Fragment } from 'react'
import PageHeader from '../component/layout/pageheader'
import Sidebar from '../component/layout/sidebar'
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import styles from './Responsive.module.css'
import AccountPage from './AccountPage';
import Header from '../component/layout/header';



const AccountLayout = () => {
    return (
        <Fragment>
          <Header />
            <PageHeader title={'Welcome Rakesh M'} curPage={'Security'} />
            <Sidebar />
            <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} lg={8} xl={6} className="p-3">
            <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
                <Card.Body >
                  <AccountPage />
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </Fragment>
    )
}

export default AccountLayout