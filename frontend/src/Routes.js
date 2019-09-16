import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/containers/Home";
import AllBooksOutput from "../src/containers/AllBooksOutput";
import AddBook from "../src/containers/AddBook";

export default () =>
    <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/AllBooksOutput" exact component={ AllBooksOutput } />
        <Route path="/AddBook" exact component={ AddBook } />
    </Switch>