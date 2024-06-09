import React from 'react';
import { Container, Row, Col, Button, ListGroup, Tab, Nav, Card, Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';






const StudentDetailPage = () => {
    const chart1 = {
        series: [{
            data: [91, 82, 90, 88, 105, 99]
        }],
        options: {
            chart: {
                toolbar: { show: false },
                events: { click: function (chart, w, e) { /* console.log(chart, w, e) */ } }
            },
            plotOptions: {
                bar: { columnWidth: '35%', distributed: true }
            },
            dataLabels: { enabled: false },
            grid: {
                xaxis: { lines: { show: false } },
                yaxis: { lines: { show: true } }
            },
            legend: { show: false },
            yaxis: { labels: { offsetY: 0, minWidth: 20, maxWidth: 20 } },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                labels: { minHeight: 22, maxHeight: 22, style: { fontSize: '12px' } }
            }
        }
    };

    return (
        <>
            <Container fluid style={{ marginTop: '3rem' }}>
                <Row>
                    <Col lg={4}>
                        <Card className="shadow-sm" style={{marginTop: '2rem'}}>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4" style={{border: '1px  ridge', height: '4rem'}}>
                                    <div className="avatar">
                                    <Image src='assets/images/clients/avatar.png' roundedCircle className='mb-3' style={{ width: '65px', height: '55px', marginTop: '1rem' }} />
                                    </div>
                                    <div className="ml-3" style={{margin: '1rem'}}>
                                        <h5 className="font-weight-bold mb-1">Kate Smith</h5>
                                        <p className="text-muted mb-0">Botsford and Sons</p>
                                    </div>
                                </div>
                                <Row className="mb-4">
                                    <Col xs={6} className="text-center">
                                        <Button variant="primary" className="btn-block btn-sm" style={{width:'8rem'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                            Message
                                        </Button>
                                    </Col>
                                    <Col xs={6} className="text-center">
                                        <Button variant="secondary" className="btn-block btn-sm" style={{width:'8rem'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                            Edit Profile
                                        </Button>
                                    </Col>
                                </Row>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">Email ID</span>
                                        <span>kate@yahoo.com</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">Birthday</span>
                                        <span>01 Feb 1990</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">Phone</span>
                                        <span>+99 8756214524</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">Country</span>
                                        <span>USA</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">State/Region</span>
                                        <span>West Virginia</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between" style={{border: 'none'}}>
                                        <span className="text-muted">Address</span>
                                        <span>Baker Street, no. 7</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className="shadow-sm" style={{marginTop: '2rem'}}>
                        <Card.Body>
                                <h6 className="font-weight-bold mt-4">Total Spending</h6>
                                <Chart options={chart1.options} series={chart1.series} type="bar" height="250px" />
                                </Card.Body>
                        </Card>
                                
                    </Col>
                    <Col lg={8}>
                        <Card className="shadow-sm" style={{marginTop: '2rem'}}>
                            <Card.Body>
                                <Tab.Container defaultActiveKey="invoices">
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="invoices" className="font-weight-bold text-uppercase">Invoices</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="activity" className="font-weight-bold text-uppercase">Activity</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="mt-3">
                                        <Tab.Pane eventKey="invoices">
                                        <div className="d-flex justify-content-between align-items-center mb-3" style={{marginTop: '2rem', marginLeft: '3rem'}}>
                                                <h5>Invoice List</h5>
                                            </div>
                                            <div className="table-responsive">
                                                <Table className="table" borderless>
                                                    <thead>
                                                        <tr>
                                                            <th>ID Zoom</th>
                                                            <th>Zoom Clases</th>
                                                            <th>Time</th>
                                                            <th>Status</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>IN-902559</td>
                                                            <td>12 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-success">Paid</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-552149</td>
                                                            <td>15 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-warning">Pending</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-941529</td>
                                                            <td>12 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-success">Paid</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-125623</td>
                                                            <td>16 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-success">Completed</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-911211</td>
                                                            <td>18 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-danger">Cancelled</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-902210</td>
                                                            <td>19 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-success">Paid</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-902445</td>
                                                            <td>20 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-warning">Pending</span></td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td>IN-901020</td>
                                                            <td>22 Jan 2020</td>
                                                            <td>12:30</td>
                                                            <td><span className="text-success">Completed</span></td>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="activity">
                                            <div className="d-flex justify-content-between align-items-center mb-3" style={{marginTop: '2rem', marginLeft: '3rem'}}>
                                                <h5>Recent Activity</h5>
                                            </div>
                                            <Table className="table" borderless>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Activity</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10 Jan 2020</td>
                                                        <td>Logged in</td>
                                                        <td><span className="text-success">Success</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>11 Jan 2020</td>
                                                        <td>Changed password</td>
                                                        <td><span className="text-success">Success</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 Jan 2020</td>
                                                        <td>Logged out</td>
                                                        <td><span className="text-warning">Warning</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>13 Jan 2020</td>
                                                        <td>Updated profile</td>
                                                        <td><span className="text-success">Success</span></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StudentDetailPage;
