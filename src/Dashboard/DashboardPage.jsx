import React, {useState} from 'react'
import { Col, Container, Row, Card, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBook, faDollar, faGift, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import './DashboardHover.css'; 
import styles from './Responsive.module.css'
import { icon } from '@fortawesome/fontawesome-svg-core';

const DashboardPage = () => {


  const data = [
    { value: 30, text: 'ENROLLED COURSES', color: '#2f57ef21', textColor: '#2f57ef', icon: faBook, marginBottom: '1rem'},
    { value: 10, text: 'ACTIVE COURSES', color: '#b966e721', textColor: '#b966e7', icon: faTv, marginBottom: '1rem'},
    { value: 7, text: 'COMPLETED COURSES', color: '#80008021', marginBottom: '1rem', icon: faAward, textColor: 'purple' },
    { value: 160, text: 'TOTAL STUDENTS', color: '#db709321', marginBottom: '1rem', icon: faUsers, textColor: '#db7093' },
    { value: 20, text: 'TOTAL COURSES', color: '#e9967a21', marginBottom: '1rem', icon: faGift, textColor: '#e9967a' },
    { value: 25000, text: 'TOTAL EARNINGS', color: '#ff8f3c10', marginBottom: '1rem', icon: faDollar, textColor: '#ff8f3c' },
  ];


  const orders = [
    {  courseName: 'App Development', enrolled: '50', price: '$100.99', status: 'Success' },
    {  courseName: 'Graphic', enrolled: '40', price: '$200.99', status: 'Processing' },
    {  courseName: 'Graphic', enrolled: '30', price: '$200.99', status: 'On Hold' },
    {  courseName: 'Application', enrolled: '40', price: '$200.99', status: 'Canceled' },
    {  courseName: 'App Development', enrolled: '60', price: '$100.99', status: 'Success' },
    {  courseName: 'Graphic', enrolled: '30', price: '$200.99', status: 'Processing' },
    {  courseName: 'Graphic', enrolled: '40', price: '$200.99', status: 'On Hold' },
    {  courseName: 'Application', enrolled: '20', price: '$200.99', status: 'Canceled' },
    {  courseName: 'App Development', enrolled: '10', price: '$100.99', status: 'Success' },
  ];

  const badge1 = {
    display: 'inline-block',
    padding: '.35rem .65rem', 
    fontSize: '.75rem',
    lineHeight: '1',
    color: 'green',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    borderRadius: '.25rem'
}

const badge2 = {
    display: 'inline-block',
    padding: '.35rem .65rem', 
    fontSize: '.75rem',
    lineHeight: '1',
    color: 'blue',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    borderRadius: '.25rem'
}

const badge3 = {
    display: 'inline-block',
    padding: '.35rem .65rem', 
    fontSize: '.75rem',
    lineHeight: '1',
    color: 'orange',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    borderRadius: '.25rem'
}

const badge4 = {
    display: 'inline-block',
    padding: '.35rem .65rem', 
    fontSize: '.75rem',
    lineHeight: '1',
    color: 'red',
    textAlign: 'center',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    borderRadius: '.25rem'
}


const getStatusBadge = (status) => {
  switch (status) {
    case 'Success':
      return <span className="bg-custom-color" style={badge1}>{status}</span>;
    case 'Processing':
      return <span className="bg-custom-color-2" style={badge2}>{status}</span>;
    case 'On Hold':
      return <span className="bg-custom-color-3"style={badge3}>{status}</span>;
    case 'Canceled':
      return <span className="bg-custom-color-4" style={badge4}>{status}</span>;
    default:
      return null;
  }
};

const heading = {
  display: 'flex',
  height: 'auto',
  margin: '16px 0 0 20px',
  width: 'auto',
  fontFamily: 'cursive',
  position: 'absolute',
  left: '20px',
  right: '0',
}


  return (
    <Container>
      <Card className={`text-center shadow-lg ${styles.cardContainer}`}>
        <h5 style={heading}>Dashboard</h5>
      <Row className='g-5' style={{margin: '2rem'}}> 
        {data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className='card-hover' style={{ 
              backgroundColor: item.color,
               borderRadius: '10px', 
               height: '244px',
                }}
                >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div  style={{ 
                    backgroundColor: item.color, 
                    borderRadius: '50%', 
                    width: '100px', 
                    height: '100px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    marginBottom: '31px'
                  }}
                  >
                  <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: item.textColor }} />
                </div>
                 <Card.Title style={{color: item.textColor, marginBottom: item.marginBottom}}>{item.value}</Card.Title>
                <Card.Text style={{color: item.textColor, marginBottom: item.marginBottom}}>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Card>
      
      <Card className={`text-center shadow-lg ${styles.tableCardContainer}`}>
    <h5 style={heading}>My Course</h5>
    <div className="table-responsive" style={{margin: '2rem'}}>
        <Table striped  hover style={{ marginTop: '50px', }}>
            <thead style={{ background: 'none' }}>
                <tr style={{ background: '#c1dfdf52' }}>
                    
                    <th style={{background: '#2f57ef21'}}>Course Name</th>
                    <th style={{background: '#2f57ef21'}}>Enrolled</th>
                    <th style={{background: '#2f57ef21'}}>Price</th>
                    <th style={{background: '#2f57ef21'}}>Status</th>
                </tr>
            </thead>
            <tbody style={{ borderTop: 'none' }}>
                {orders.map((order) => (
                    <tr key={order.id}>
                       
                        <td style={{ color: 'gray' }}>{order.courseName}</td>
                        <td style={{ color: 'gray' }}>{order.enrolled}</td>
                        <td style={{ color: 'gray' }}>{order.price}</td>
                        <td style={{ color: 'gray' }}>{getStatusBadge(order.status)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
</Card>
    </Container>
  );
};

export default DashboardPage