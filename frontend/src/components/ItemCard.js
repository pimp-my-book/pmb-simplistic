import React from "react";
import styled from "styled-components";
import Heading from "./typography/Heading";
import { Card, Container, Row, Col } from "react-bootstrap";

const CardStyles = styled(Card) `
  &&& {
    width: 300px;
    height: 150px;
    padding: 5%;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    background-color: white;
    }
  }
`;

