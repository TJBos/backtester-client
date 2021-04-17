import React from "react";
import "../styles/form.scss";
import BuySignal from "./buysignal";
import { Modal, Button } from "react-bootstrap";

const Form = () => {
  const [showBuy, setShowBuy] = React.useState(false);
  const handleShow = () => {
    setShowBuy(true);
  };
  const handleClose = () => {
    setShowBuy(false);
  };

  return (
    <div className="formdiv">
      <Button variant="primary" onClick={handleShow}>
        Add Buy Signal
      </Button>
      <Modal show={showBuy} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Form;
