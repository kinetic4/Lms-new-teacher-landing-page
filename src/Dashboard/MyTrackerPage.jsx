import React from 'react'
import { Container, Row, Col, Table, Navbar, Nav, Button } from 'react-bootstrap';
import Chart from 'react-apexcharts';


const MyTrackerPage = ({ data }) => {

    if (!data) {
        return null; // or return a fallback component
      }

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

    const dummyTableData = [
        {
          id: 1,
          student: 'Gologolo',
          date: 'Mon, Apr 24 2024',
          zoom: ['🟢', '🟢', '🟢'],
          startTime: '09:45 PM',
          stopTime: '01:20 AM',
          totalTime: '01:20 AM',
          revenue: 30,
        },
        {
          id: 2,
          student: 'Odeon',
          date: 'Mon, Apr 24 2024',
          zoom: ['🟢', '🟢', '🟢'],
          startTime: '09:45 PM',
          stopTime: '01:20 AM',
          totalTime: '01:20 AM',
          revenue: 20,
        },
        {
          id: 3,
          student: 'Ugith',
          date: 'Mon, Apr 24 2024',
          zoom: ['🟢', '🟢', '🟢'],
          startTime: '09:45 PM',
          stopTime: '01:20 AM',
          totalTime: '01:20 AM',
          revenue: 40,
        },
        {
          id: 4,
          student: 'Kiran',
          date: 'Mon, Apr 24 2024',
          zoom: ['🟢', '🟢', '🟢'],
          startTime: '09:45 PM',
          stopTime: '01:20 AM',
          totalTime: '01:20 AM',
          revenue: 140,
        },
        {
          id: 5,
          student: 'Linson',
          date: 'Mon, Apr 24 2024',
          zoom: ['🟢', '🟢', '🟢'],
          startTime: '09:45 PM',
          stopTime: '01:20 AM',
          totalTime: '01:20 AM',
          revenue: 150,
        },
      ];

    return (
        <Container>
        <Row>
        <Navbar>
      <Navbar.Brand>My Tracker</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Button variant="primary">Invite Student</Button>
        </Nav.Item>
      </Nav>
    </Navbar>
        </Row>
        <Row>
        <Table data={dummyTableData}>
      <thead>
      <tr>
          <th>Student</th>
          <th>Date</th>
          <th>Zoom</th>
          <th>Start time</th>
          <th>Stop time</th>
          <th>Total Time</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.student}</td>
            <td>{row.date}</td>
            <td>{row.zoom.map((status) => status)}</td>
            <td>{row.startTime}</td>
            <td>{row.stopTime}</td>
            <td>{row.totalTime}</td>
            <td>{row.revenue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
        </Row>
        <Row>
          <Col>
            {/* Chart Section */}
            <Chart options={chart1.options} series={chart1.series} type="bar" height="250px" />
          </Col>
        </Row>
      </Container>
    )
}

export default MyTrackerPage