import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
function Popup(props) {
  if (props.action === "edit") {
    return (
      <>
        <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>Edit Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Edit Department</Form.Label>
                <Form.Control type="text" placeholder="Edit Department" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" className="btn-success" onClick={props.onHide}>
              Close
            </button>
            <button
              variant="primary"
              className="btn-success"
              onClick={props.onHide}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  if (props.action === "delete") {
    return (
      <>
        <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>Delete Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete?</Modal.Body>
          <Modal.Footer>
            <button
              variant="secondary"
              className="btn-success"
              onClick={props.onHide}
            >
              Cancel
            </button>
            <button
              variant="primary"
              className="btn-success"
              onClick={props.onHide}
            >
              Delete
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  if (props.action === "addDepartment") {
    return (
      <>
        <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>Add Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Add Department</Form.Label>
                <Form.Control type="text" placeholder="Add Department" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" className="btn-success" onClick={props.onHide}>
              Close
            </button>
            <button
              variant="primary"
              className="btn-success"
              onClick={props.onHide}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Popup;
