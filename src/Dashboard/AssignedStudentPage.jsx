import React, { Fragment } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from "../component/sidebar/rating";

   



const AssignedStudentPage = () => {

  const orders = [
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#4585', courseName: 'Graphic', date: 'May 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#9656', courseName: 'Graphic', date: 'March 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#2045', courseName: 'Application', date: 'March 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com', },
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#4585', courseName: 'Graphic', date: 'May 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',   },
    { id: '#9656', courseName: 'Graphic', date: 'March 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#2045', courseName: 'Application', date: 'March 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', phone: '+ 44 131 123 4567', email: 'teacher@mail.com',  },
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





  return (
    <div className='table-responsive' style={{width: '68rem'}}>
       <Table  striped border hover style={{marginTop:'90PX'}}>
        <thead style={{background: 'none'}} >
            <tr style={{background: '#c1dfdf52', }}>
                <th>Order Id</th>
                <th>Course Name</th>
                <th>Date</th>
                <th>Phone No</th>
                <th>Email</th>
               
            </tr>
        </thead>
        <tbody style={{borderTop: 'none'}}>
            {orders.map((order) => (
                <tr key={order.id} >
                    <td style={{color: 'gray'}}>{order.id}</td>
                    <td style={{color: 'gray'}}>{order.courseName}</td>
                    <td style={{color: 'gray'}}>{order.date}</td>
                    <td style={{color: 'gray '}}>{order.phone}</td>
                    <td style={{color: 'gray '}}>{order.email}</td>
                    
                </tr>
            ))}
        </tbody>
    </Table>
    </div>
   
 )
}

export default AssignedStudentPage


