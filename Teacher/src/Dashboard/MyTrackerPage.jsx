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

const MyTrackerPage = ({ data }) => {
  const Mytracker = [
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
    },
    {
      Student: "Gologolo",
      Date: "Mon, Apr 24 2024",
      StartTime: "9:45PM",
      stopTime: "1:20AM",
      CourseAlocated: "1:20AM",
      RemainingClasses: "30",
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
            <th style={{ background: "#2f57ef21" }}>Student</th>
            <th style={{ background: "#2f57ef21" }}>Date</th>

            <th style={{ background: "#2f57ef21" }}>Class Alocated</th>
            <th style={{ background: "#2f57ef21" }}>Remaining Classes</th>
            <th style={{ background: "#2f57ef21" }}>Details</th>
          </tr>
        </thead>
        <tbody style={{ borderTop: "none" }}>
          {Mytracker.map((Mytracker, index) => (
            <tr key={index}>
              <td style={{ color: "gray" }}>{Mytracker.Student}</td>
              <td style={{ color: "gray" }}>{Mytracker.Date}</td>

              <td style={{ color: "gray" }}>{Mytracker.CourseAlocated}</td>
              <td style={{ color: "gray" }}>{Mytracker.RemainingClasses}</td>
              <td style={{ color: "gray" }}>
                <NavLink to="/ViewDetails" className="nav-link">
                <Button style={{ background: '#2f57ef21' }} type="submit" className="mt-2">
                  <svg style={{color: 'blue', width: '1rem'}}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    /> 
                  </svg>
                 
                </Button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTrackerPage;
