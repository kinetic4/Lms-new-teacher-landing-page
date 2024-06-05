import React, { Fragment } from 'react'
import Sidebar from '../component/layout/sidebar'
import PageHeader from "../component/layout/pageheader";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Responsive.module.css'
import WishlistCourseList from './WishlistCourseList';
import CourseBundlePage1 from './CourseBundlePage1';
import CourseBundlePage2 from './CourseBundlePage2';
import CourseBundlePage3 from './CourseBundlePage3'



const CourseBundle = () => {

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
            <PageHeader title={'Welcome Rakesh M'} curPage={'Booked Tution'} />
            <Sidebar />
            <Container className="my-4">
                <Row className="justify-content-center">
                    <Col xs={12} lg={8} xl={6} className="p-3">
                        <Card className={`text-center shadow-lg ${styles.cardContainer}`}>

                            <h5 style={heading}>Course Bundle</h5>
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ marginTop: '5rem', marginLeft: '2rem' }}>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Beginner To Expert</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Web Design And Development</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Wordpress Theme Development</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><CourseBundlePage1/></div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><CourseBundlePage2/></div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><CourseBundlePage3/></div>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default CourseBundle