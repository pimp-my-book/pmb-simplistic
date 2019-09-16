import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
import { ALL_BOOKS_OUTPUT } from "../graphql/Queries";
import "../styles/styles.css";

export default class AllBooksOutput extends Component {
    render() {
      return (
        <div className="Home">
          <div className="landingPage">
            <h1>All Books Output</h1>
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
                  <Query query={ ALL_BOOKS_OUTPUT }>
                    {({ data, loading, error }) => {
                      if (loading) return <div>Fetching</div>;
                      if (error) return <div>{Error}</div>;
                      console.log(error)
                      const allItems = data.allBooksOutput;
                      console.log(allItems);
                      const ItemsGrid = styled.div `
                        display: grid;
                        grid-template-columns: repeat( 3, 3fr );
                        grid-gap: 10px;
                        margin: 0%;
                        padding-left: 10%;
                      `;
                      return(
                        <ItemsGrid>
                            <Fragment>
                                {allItems.map((books) => (
                                <Fragment  key={ books.pk }>
                                    <ItemCard
                                    title={ books.sk }
                                    author={ books.author }
                                    publisher={ books.publisher }
                                    dateAdded={ books.dateAdded }
                                    quantityOnHand={ books.quantityOnHand }
                                    quantityOnOrder={ books.quantityOnOrder }
                                    quantityRequested={ books.quantityRequested }
                                    quantitySold={ books.quantitySold }
                                    sellingPrice={ books.sellingPrice }
                                    costPrice={ books.costPrice }
                                    />
                                </Fragment>
                                ))}
                            </Fragment>
                        </ItemsGrid>
                      );
                    }
                  }
                  </Query>
          </div>
        </div>
      );
    }
  }
  