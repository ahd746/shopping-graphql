import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navbar from './components/Navbar';
import Home from './components/Home'
import Health from './components/Health'
import Kitchen from './components/Kitchen'
import Toys from './components/Toys'
import Elctronics from './components/Elctronics'
import Clothing from './components/Clothing'
import Error from './components/Error'
import AddItem from './components/AddProduct';

import GlobalContextProvide from './context/GlobalContext';

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalContextProvide>
          <div className="container">
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/health" component={Health} />
              <Route path="/kitchen" component={Kitchen} />
              <Route path="/toys" component={Toys} />
              <Route path="/Elctronics" component={Elctronics} />
              <Route path="/clothing" component={Clothing} />
              <Route path="/clothing" component={Clothing} />
              <Route path="/addItem" component={AddItem} />
              <Route component={Error} />
            </Switch>
          </div>
        </GlobalContextProvide>
      </BrowserRouter >
    </ApolloProvider >
  );
}

export default App;
