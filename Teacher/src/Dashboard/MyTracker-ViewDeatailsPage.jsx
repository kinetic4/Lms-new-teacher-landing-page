import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import Chart from "react-apexcharts";
import "./BadgeStyle.css";
import styles from "./Responsive.module.css";
import { NavLink } from "react-router-dom";

const ViewDeatailsPage = ({ data }) => {
  const Mytracker = [
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
      courseName: 'App Development'
    },
  ];

  const badge1 = {
    display: "inline-block",
    padding: ".35rem .65rem",
    fontSize: ".75rem",
    lineHeight: "1",
    color: "green",
    textAlign: "center",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    borderRadius: ".25rem",
  };

  const badge2 = {
    display: "inline-block",
    padding: ".35rem .65rem",
    fontSize: ".75rem",
    lineHeight: "1",
    color: "blue",
    textAlign: "center",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    borderRadius: ".25rem",
  };

  const badge3 = {
    display: "inline-block",
    padding: ".35rem .65rem",
    fontSize: ".75rem",
    lineHeight: "1",
    color: "orange",
    textAlign: "center",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    borderRadius: ".25rem",
  };

  const badge4 = {
    display: "inline-block",
    padding: ".35rem .65rem",
    fontSize: ".75rem",
    lineHeight: "1",
    color: "red",
    textAlign: "center",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    borderRadius: ".25rem",
  };

  const heading = {
    display: "flex",
    height: "auto",
    margin: "16px 0 0 20px",
    width: "auto",
    fontFamily: "cursive",
    position: "absolute",
    left: "20px",
    right: "0",
  };

  return (
    <div className="table-responsive" style={{ margin: "2rem" }}>
      <Table borderless hover style={{ marginTop: "50px", width: "73rem" }}>
        <thead style={{ background: "none" }}>
          <tr style={{ background: "#c1dfdf52" }}>
            
            <th style={{ background: "#2f57ef21" }}>Date</th>
            <th style={{ background: '#2f57ef21' }}>StartTime</th>
            <th style={{ background: '#2f57ef21' }}>StopTime</th>
            <th style={{ background: "#2f57ef21" }}>Course Name</th>
          </tr>
        </thead>
        <tbody style={{ borderTop: "none" }}>
          {Mytracker.map((Mytracker, index) => (
            <tr key={index}>
             
              <td style={{ color: "gray" }}>{Mytracker.Date}</td>
              <td style={{ color: 'gray' }}>{Mytracker.StartTime}</td>
              <td style={{ color: 'gray' }}>{Mytracker.stopTime}</td>
              <td style={{ color: "gray" }}>{Mytracker.courseName}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewDeatailsPage;
