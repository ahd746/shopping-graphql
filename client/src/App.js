import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Health from './pages/Health'
import Kitchen from './pages/Kitchen'
import Toys from './pages/Toys'
import Electronics from './pages/Electronics'
import Clothing from './pages/Clothing'
import Error from './pages/Error'
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

import GlobalContextProvide from './context/GlobalContext';
import productDetail from './components/ProductDetail';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
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
              <Route path="/Elctronics" component={Electronics} />
              <Route path="/clothing" component={Clothing} />
              <Route path="/clothing" component={Clothing} />
              <Route path="/add" component={AddProduct} />
              <Route path="/edit/:id" component={EditProduct} />
              <Route path="/:id" component={productDetail} />
              <Route component={Error} />
            </Switch>
          </div>
        </GlobalContextProvide>
      </BrowserRouter >
    </ApolloProvider >
  );
}

export default App;
