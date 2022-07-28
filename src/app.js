import { gql, useQuery } from "@apollo/client";
// import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/navbar";
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

  if (loading) return <h1>Loading....</h1>

  return (
    <div>
      <Navbar
        items={data?.categories}
        active={activeIndex}
        setActive={setActiveIndex} />

      <Switch>
        <Route exact path='/' component={() => <AllProducts
          category={data?.categories[activeIndex]?.name}
          products={
            // data?.categories.filter((c) => c.name === activeIndex)[0]?.products
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

/**
 *  constructor() {
 *    this.state ={
 *      active: null
 *    }
 * }
 */

//function App() {
//  const [activeIndex, setActiveIndex] = useState(0);
 // const { data } = useQuery(getCategories);

 // console.log({data})
 // console.log({ activeIndex });
  // console.log({ data });
  // console.log(data?.categories);
  // console.log(data?.categories.filter((c) => c.name === active));

  // useEffect(() => {
  //   setActiveIndex(0);
  // }, [data]);

 // return (
   // <div>
    //  <Navbar
    //    items={data?.categories}
    //    active={activeIndex}
     //   setActive={setActiveIndex}
     // />
  // <Prodcut
     //   category={data?.categories[activeIndex]?.name}
     //   products={
          // data?.categories.filter((c) => c.name === activeIndex)[0]?.products
    //      data?.categories[activeIndex]?.products
    //    }
    //  />
    //</div>
//  );
//}

//export default App;
