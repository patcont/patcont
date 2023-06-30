import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function NewCycleDialog({
  show,
  handleConfirm,
  handleShow,
  handleClose,
  expired,
}) {
  // Call handleConfirm and close the modal when the user confirms
  const handleConfirmation = () => {
    handleConfirm();
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} disabled={!expired}>
        Comenzar nuevo ciclo
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que quieres comenzar un nuevo ciclo?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirmation}>
            Sí
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
