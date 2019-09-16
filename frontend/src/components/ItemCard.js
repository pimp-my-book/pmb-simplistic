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

const ItemCard = ({
    title,
    author,
    publisher,
    dateAdded,
    quantityOnHand,
    quantityOnOrder,
    quantityRequested,
    quantitySold,
    sellingPrice,
    costPrice,

  ...props
}) => {
  return(
    <CardStyles { ...props }>
      <Card.Body>
        <Container>
          <Row>
            <Col>
                <Heading>{ title }</Heading>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    Author/s - { author }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    Publisher - { publisher }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    Date Added - { dateAdded }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    On-Hand - { quantityOnHand }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    On-Order - { quantityOnOrder }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    Requested - { quantityRequested }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
                <Card.Text>
                    Sold - { quantitySold }
                </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Selling Price - R { sellingPrice }
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Cost Price - R { costPrice }
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </CardStyles>
  )
}

export default ItemCard;
