import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ show, title, onClose, children }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return show ? (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close-btn" onClick={handleClose}>
            X
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
