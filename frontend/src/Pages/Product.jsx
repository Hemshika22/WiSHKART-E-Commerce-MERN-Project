import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {id} = useParams()
  const product = all_products.find((e) => e.id === Number(id));

  console.log("Product ID from URL:", id);
  console.log("Found Product:", product);

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
