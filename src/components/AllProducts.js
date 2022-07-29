import React, { Component } from 'react';
//import { Image } from "semantic-ui-react";
//import { useHistory } from 'react-router-dom';
import ProductsStyle from './AllProducts&Items.module.css';
import ItemsStyle from './AllProducts&Items.module.css';

//import { useHistory } from 'react-router-dom';


  class AllProducts  extends Component {





  render() {
    const {category, products} = this.props

    return (


    <div className={ProductsStyle.ProductsContainer}>
      <h1 className={ProductsStyle.CategoryStyle}>{category?.toUpperCase()}</h1>

      <div className={ProductsStyle.ProductNameStyle}>
        {products?.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
    </div>
    </div>
  )

}

};


 class ProductItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {   
      

    }
   // const history = useHistory()

  }

  render(){


    const { product, currency = 'USD' } = this.props

    return (


      <div className={ItemsStyle.ProductStyle} /*onClick={() => history.push(`/product/${product.id}`)}*/>
      <img className={ItemsStyle.GalleryStyle} src={product.gallery[0]} alt='product preview' />
      <div className={ItemsStyle.ProductNameStyle1}>
        <p className={ItemsStyle.ProductNameStyle2}>{product.name}</p>
        <p className={ItemsStyle.ProductNameStyle3}>
          {
           product.prices.filter((pp) => pp.currency.label === currency)[0]
             ?.amount
         }{" "}
         {currency}
         <span className={ItemsStyle.IconStyle}>
           Icon
         </span>
       </p>
     </div>
   </div>    )
  }
}


     
export default AllProducts;

   
