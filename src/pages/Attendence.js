import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Button,
} from "react-bootstrap";
import Sidebar from "../Layout/Sidebar"
import "../assets/css/attendence.css";
const Attendence = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        setUsers(json)
      }).catch(err => {
        console.log("error", err)
      })
  }, [])

  console.log(users)
  return (
    <>
      <Container className="attendence">
        <Row>
          <Col lg={2}></Col>
          <Col lg={10}>
            Attendence
            <Breadcrumb>
              <BreadcrumbItem></BreadcrumbItem>
              <Breadcrumb.Item active>Attendence</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={5} md={2}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Employee Name" />
            </Form.Group>
          </Col>
          <Col sm={5} md={2}>
            <Form.Select>
              <option>Select Month</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">march</option>
            </Form.Select>
          </Col>

          <Col sm={6} md={3}>
            <Form.Select>
              <option>Select Year</option>
              <option value="1">2019</option>
              <option value="2">2020</option>
              <option value="3">2021</option>
            </Form.Select>
          </Col>
          <Col sm={6} md={3}>
            <Button variant="success">Search</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={10}>
            <Table responsive striped bordered hover className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>userName</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>address</th>
                  <th>company</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, key) => (
                    <tr key={key}>
                      <td>{user.id ? user.id : ""}</td>
                      <td>{user.name ? user.name : ""}</td>
                      <td>{user.username ? user.username : ""}</td>
                      <td>{user.email ? user.email : ""}</td>
                      <td>{user.phone ? user.phone : ""}</td>
                      <td>{user.address.city ? user.address.city : ""}</td>
                      <td>{user.company.name ? user.company.name : ""}</td>
                    </tr>
                  )
                  )
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Attendence;
