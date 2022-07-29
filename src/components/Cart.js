import React from 'react'
import { gql, useQuery } from '@apollo/client'

import cartStyle from './Cart.module.css'
import { useState } from 'react'

const allCategories = gql`
    query {
        categories {
        products {
            name
            description
            attributes {
            name
            items {
                value
                displayValue
            }
            }
            gallery
        }
        }
    }
`

export const Cart = () => {
    const [selectedAttributes, setSelectedAttributes] = useState({})

    const { data, loading } = useQuery(allCategories)

    if (loading) return <h1>Loading ...</h1>

    const allProducts = data.categories[0].products
    
    return (
        <div className={cartStyle.cartContainer}>
            <div className={cartStyle.cartHeader}>
                <div><strong>CART</strong></div>
            </div>

            <div className={cartStyle.Product}>
                <div className={cartStyle.ProductData}>
                    <div className={cartStyle.ProductHeader}>
                        <h1>{allProducts[0].name}</h1>
                        <p>{allProducts[0].brand}</p>
                    </div>

                    <div className={cartStyle.ProductAttributes}>
                        {allProducts[0].attributes.map(attribute => <ProductAttribute key={attribute.name} attribute={attribute} setSelectedAttributes={setSelectedAttributes} />)}
                    </div>
                </div>

                <div className={cartStyle.ProductImage}>
                    <img src={allProducts[0].gallery[0]} alt='product preview large' />
                </div>
            </div>

            <div className={cartStyle.Product}>

                <div className={cartStyle.ProductData}>
                    <div className={cartStyle.ProductHeader}>
                        <h1>{allProducts[1].name}</h1>
                        <p>{allProducts[1].brand}</p>
                    </div>



                    <div className={cartStyle.ProductAttributes}>
                        {allProducts[1].attributes.map(attribute => <ProductAttribute key={attribute.name} attribute={attribute} setSelectedAttributes={setSelectedAttributes} />)}
                    </div>

                </div>
                <div className={cartStyle.ProductImage}>
                    <img src={allProducts[1].gallery[0]} alt='product preview large' />
                </div>
            </div>

            <button className={cartStyle.checkoutButton}>Checkout</button>

        </div>
    )
}



export const ProductAttribute = (props) => {
    const { attribute, setSelectedAttributes } = props
    const updateAttribute = (item) => setSelectedAttributes((prevState) => ({ ...prevState, [attribute.name]: item.value }))

    return (
        <div>

            <div className={cartStyle.ProductAttribute}>
                <p><strong>{attribute.name}</strong></p>

                <div className={cartStyle.ProductAttributeItems}>
                    {attribute.items.map(item =>
                        <p style={attribute.type === 'swatch' ? { backgroundColor: item.value, width: '25px', height: '25px' } : {}} onClick={() => updateAttribute(item)}>{attribute.type !== 'swatch' && item.displayValue}</p>
                    )}
                </div>
            </div>

        </div>


    )
}

export default Cart;


