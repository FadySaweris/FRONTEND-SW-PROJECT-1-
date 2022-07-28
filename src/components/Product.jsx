import React from 'react'
import { gql, useQuery } from '@apollo/client'

import classes from './product.module.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const selectedProduct = (productId) => gql`
query {
  product (id:"${productId}") {
    name
    brand
    attributes {
        name
        type
        items {
          value
          displayValue
        }
      }
    gallery
    
  }
}
`

export const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedAttributes, setSelectedAttributes] = useState({})

  const params = useParams()
  const productId = params.productId

  const { data, loading } = useQuery(selectedProduct(productId))

  console.log(selectedAttributes)

  if (loading) return <h1>Loading ...</h1>

  return (
    <div className={classes.ProductContainer}>
      <div className={classes.ProductImages}>
        <div className={classes.allImages}>
        <img src={data.product.gallery[0]} alt='product preview' onClick={() => setSelectedImage(0)} />
        <img src={data.product.gallery[1]} alt='product preview' onClick={() => setSelectedImage(1)} />
        <img src={data.product.gallery[2]} alt='product preview' onClick={() => setSelectedImage(2)} />
        <img src={data.product.gallery[3]} alt='product preview' onClick={() => setSelectedImage(3)} />
        <img src={data.product.gallery[4]} alt='product preview' onClick={() => setSelectedImage(4)} />
        </div>

        <div className={classes.selectedImage}>
          <img src={data.product.gallery[selectedImage]} alt='product preview large' />
        </div>
      </div>

      <div className={classes.ProductData}>
        <div className={classes.ProductHeader}>
          <h1>{data.product.name}</h1>
          <p>{data.product.brand}</p>
        </div>
        
        <div className={classes.ProductAttributes}>
          {data.product.attributes.map(attribute => <ProductAttribute key={attribute.name} attribute={attribute} setSelectedAttributes={setSelectedAttributes} />)}
        </div>
      </div>
    </div>
  )
}

const ProductAttribute = (props) => {
  const { attribute, setSelectedAttributes } = props
  const updateAttribute = (item) => setSelectedAttributes((prevState) => ({...prevState, [attribute.name]: item.value}))

  return <div className={classes.ProductAttribute}>
    <p><strong>{attribute.name}</strong></p>
    <div className={classes.ProductAttributeItems}>
      {attribute.items.map(item => 
        <p style={attribute.type === 'swatch' ? {backgroundColor: item.value, width: '25px', height: '25px'} : {}} onClick={() => updateAttribute(item)}>{attribute.type !== 'swatch' && item.displayValue}</p>
      )}
    </div>
  </div>
}


