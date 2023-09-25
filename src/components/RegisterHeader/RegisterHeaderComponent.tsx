import React, { Fragment } from "react";
import style from "./RegisterHeaderComponent.module.css";
import { Row, Col } from "react-bootstrap";

const RegisterHeaderComponent = () => {
  return (
    <Fragment>
      <div className={style.register}>
        <Row>
          <Col>left</Col>
          <Col>right</Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default RegisterHeaderComponent;
