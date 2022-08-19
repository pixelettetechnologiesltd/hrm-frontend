import React from "react";
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
  return (
    <>
      <Sidebar/>
    <Container className="attendence">
   
      <Row>
        <Col lg={2}></Col>
        <Col lg={10}>
          Attendence
          <Breadcrumb>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
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
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          
        </tbody>
      </Table>
      </Col>
      </Row>
    </Container>
    </>
  );
};

export default Attendence;
