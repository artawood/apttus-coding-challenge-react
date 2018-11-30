import React from "react";
import { Col, Container, Row } from "../Grid";

export const ListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <img
            alt={props.repoTitle}
            src={props.thumbnail || "https://placehold.it/300x300"}
          />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.repoTitle}</h3>
          <p>Repo Description: {props.repoDesc}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.repoLink}>
            Go to repo <i className="fas fa-chevron-right" />
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);
