import React from "react";
import { Button, Modal } from "react-bootstrap";

const confirmationModal = ({ isShown, handleClick, handleClose }) => {
    return (
        <Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={isShown}
            onHide={handleClose}
        >
            <Modal.Header closeButton>Please, confirm the action</Modal.Header>

            <Modal.Body className="text-center">
                <Button variant="danger" onClick={handleClick}>
                    Clear Cart
        </Button>
            </Modal.Body>
        </Modal>
    );
};
export default confirmationModal;
