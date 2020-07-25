import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, AboutPage } from "../pages/index";
import { Button, Modal } from "react-bootstrap";
import "./app.scss";

const App = function () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Provider List
      </Button>

      <Modal show={show} onHide={handleClose} className="modalContainer">
        <Modal.Header closeButton>
          <Modal.Title>Casino App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <main rol="main" className="container-fluid">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </main>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
