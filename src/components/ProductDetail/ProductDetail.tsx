import React from 'react'
import { FetchStatusEnum } from '../../App'
import { EnrichedProduct } from '../../fakeAPI/allProducts'

interface IProductDetailProps {
  selectedProduct: EnrichedProduct | undefined,
  fetching: FetchStatusEnum
}

const ProductDetail: React.FunctionComponent<IProductDetailProps> = ({ selectedProduct, fetching }) => {
  if (fetching === FetchStatusEnum.fetching) {
    return <div>Fetching data, hold tight!</div>
  } else if (selectedProduct && selectedProduct.name !== "") {  // name is empty string when I force it to be
    return (
      <div>
        <h1>{`details for product: ${selectedProduct.name}`}</h1>
        <p>{selectedProduct.description}</p>
      </div>
    )
  } else {
    return(
      <div>no product selected</div>
    )
  }
}

export default ProductDetail

// todos
// - you have to wait for product detail, which is weird after a click event
//   add a loading screen or something

// - make sure we don't re-fetch a product if i've already clicked on it