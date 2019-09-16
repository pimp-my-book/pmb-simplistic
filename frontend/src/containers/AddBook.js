import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { ADD_BOOK } from "../graphql/Mutations";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

export default class AddBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            pk: "",
            sk: "",
            author: "",
            publisher: "",
            dateAdded: "",
            quantityOnHand: 0,
            quantityOnOrder: 0,
            quantityRequested: 0,
            quantitySold: 0,
            sellingPrice: 0,
            costPrice: 0
        }
    }
    render() {
        const {
            pk,
            sk,
            author,
            publisher,
            dateAdded,
            quantityOnHand,
            quantityOnOrder,
            quantityRequested,
            quantitySold,
            sellingPrice,
            costPrice
        } = this.state
        return (
        <div className="Home">
            <div className="landingPage">
                <h1>Add Book</h1>
                <h3>GraphQL - Add Book Mutation</h3>
                    <Row>
                        <Col xs={6} md={4}>
                        </Col>
                        <Col xs={6} md={4}>
                            <h5><u>Output</u></h5>
                        </Col>
                        <Col xs={6} md={4}>
                        </Col>
                    </Row>
            </div>
            <div>
                <Mutation variables={{
                            pk,
                            sk,
                            author,
                            publisher,
                            dateAdded,
                            quantityOnHand,
                            quantityOnOrder,
                            quantityRequested,
                            quantitySold,
                            sellingPrice,
                            costPrice
                            }}
                    mutation={ ADD_BOOK }
                >
                    {(add, {error, loading, data, called}) => {
                        if(called && data){
                            return (
                                <div>
                                    Book Added, woohoo -_-
                                </div>
                            )
                        } else {
                            return(
                                <div>
                                    <Container className="placeOrder-form-container">
                                        <Form
                                            onSubmit={ async e => {
                                                e.preventDefault();
                                                await add();
                                                }
                                            }
                                        >
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>ISBN</Form.Label>
                                                        <Form.Control required type="text" placeholder="ISBN" 
                                                            value={ pk }
                                                            onChange={ e => this.setState({ pk: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Title</Form.Label>
                                                        <Form.Control required type="text" placeholder="Title" 
                                                            value={ sk }
                                                            onChange={ e => this.setState({ sk: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Author</Form.Label>
                                                        <Form.Control required type="text" placeholder="Author" 
                                                            value={ author }
                                                            onChange={ e => this.setState({ author: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Publisher</Form.Label>
                                                        <Form.Control required type="text" placeholder="Publisher" 
                                                            value={ publisher }
                                                            onChange={ e => this.setState({ publisher: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Date Added</Form.Label>
                                                        <Form.Control required type="text" placeholder="Date Added" 
                                                            value={ dateAdded }
                                                            onChange={ e => this.setState({ dateAdded: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>On Hand</Form.Label>
                                                        <Form.Control required type="number"
                                                            value={ quantityOnHand}
                                                            onChange={ e => this.setState({ quantityOnHand: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>On Order</Form.Label>
                                                        <Form.Control required type="number"
                                                            value={ quantityOnOrder }
                                                            onChange={ e => this.setState({ quantityOnOrder: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Requested</Form.Label>
                                                        <Form.Control required type="number"
                                                            value={ quantityRequested }
                                                            onChange={ e => this.setState({ quantityRequested: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Selling Price</Form.Label>
                                                        <Form.Control required type="number"
                                                            value={ sellingPrice }
                                                            onChange={ e => this.setState({ sellingPrice: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <Form.Label>Cost Price</Form.Label>
                                                        <Form.Control required type="number"
                                                            value={ costPrice }
                                                            onChange={ e => this.setState({ costPrice: e.target.value }) }
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="primary" type="submit">
                                                Add Book
                                            </Button>
                                        </Form>
                                    </Container>
                                </div>
                            )
                        }
                    }}
                </Mutation>
            </div>
        </div>
        );
    }
}
