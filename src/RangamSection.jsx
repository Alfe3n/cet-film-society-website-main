import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./styles/RangamSection.css";
import rangamImg from "../static/images/rangam.png";

function RangamSection() {
  return (
    <div className="rangam-section p-5">
      <Row>
        <Col md={6} className="rangam-section-left p-1">
          <div className="section-title">
            Rangam Film Festival, an indulgence into the art of watching movies
          </div>
          <div className="section-subtitle my-3">
            Rangam Film Festival is a 7 day fiesta open to all wherein the
            finest curated selection of movies are screened and a latitude for
            thought and reflection is given.
          </div>
          <div className="cta">
            EXPLORE MORE <Icon icon="ic:baseline-arrow-forward" />
          </div>
        </Col>
        <Col md={6} className="rangam-section-right">
          <Image src={rangamImg} />
        </Col>
      </Row>
    </div>
  );
}

export default RangamSection;
