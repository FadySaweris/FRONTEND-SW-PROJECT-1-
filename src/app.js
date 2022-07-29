import { gql, useQuery } from "@apollo/client";
//import {Query} from 'react-apollo'

// import gql from "graphql-tag";
import React, { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import AllProducts from "./components/AllProducts";
import { Product } from "./components/Product";
import { Route, Switch } from "react-router-dom";

const getCategories = gql`
  query {
    categories {
      name

      products {
        id
        name
        gallery
        prices {
          currency {
            label
          }
          amount
        }
      }
    }
  }
`;



function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, loading } = useQuery(getCategories);

  console.log(loading)
  if (loading) return <h1>Loading....</h1>

  return (
    <div>
      <NavBar
        items={data?.categories}
        active={activeIndex}
        setActive={setActiveIndex} />

      <Switch>
        <Route exact path='/' component={() => <AllProducts
          category={data?.categories[activeIndex]?.name}
          products={
            data?.categories[activeIndex]?.products
          }
        />} />
        <Route path='/cart' component={Cart} />
        <Route path='/product/:productId' component={Product} />
      </Switch>
    </div>

  );
}

export default App;


