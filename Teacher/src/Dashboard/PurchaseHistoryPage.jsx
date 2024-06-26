import React from 'react'
import { Table } from 'react-bootstrap';
import './BadgeStyle.css'

const orders = [
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'Success' },
    { id: '#4585', courseName: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'Processing' },
    { id: '#9656', courseName: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'On Hold' },
    { id: '#2045', courseName: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'Canceled' },
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'Success' },
    { id: '#4585', courseName: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'Processing' },
    { id: '#9656', courseName: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'On Hold' },
    { id: '#2045', courseName: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'Canceled' },
    { id: '#5478', courseName: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'Success' },
  ];

const PurchaseHistoryPage = () => {

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

  return (
   
    <Table responsive borderless hover style={{marginTop:'70PX', width: '68rem',  }}>
        <thead style={{background: 'none'}} >
            <tr style={{background: '#c1dfdf52', }}>
                <th>Order Id</th>
                <th>Course Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody style={{borderTop: 'none'}}>
            {orders.map((order) => (
                <tr key={order.id} >
                    <td style={{color: 'gray'}}>{order.id}</td>
                    <td style={{color: 'gray'}}>{order.courseName}</td>
                    <td style={{color: 'gray'}}>{order.date}</td>
                    <td style={{color: 'gray '}}>{order.price}</td>
                    <td style={{color: 'gray'}}>{getStatusBadge(order.status)}</td>
                </tr>
            ))}
        </tbody>
    </Table>
    
  )
}

export default PurchaseHistoryPage