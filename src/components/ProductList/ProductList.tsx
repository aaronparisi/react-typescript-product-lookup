import React from 'react'
import { JsxElement } from 'typescript'
import { Product } from '../../fakeAPI/allProducts'
import { FetchStatusEnum } from '../../App'

interface IProductListProps {
  products: Product[],
  selectedProductId: string,
  selectProduct: (id: string) => void,
  fetching: FetchStatusEnum
}

// const ProductList: React.FunctionComponent<IProductListProps> = ({ products }: IProductListProps) => {
const ProductList: React.FunctionComponent<IProductListProps> = ({ products, selectedProductId, selectProduct, fetching }) => {

  const headers = ["Name", "Price", "Is New?", "Status"]

  // console.log('rendering product list')

  // TODO put conditional logic out here, have separate return options

  // TODO make the color change on click

  return (
    <div className="product-list">
      <h1>Product List</h1>
      {
        products.length > 0 &&
        <table>
          <thead>
            <tr>
              {headers.map((header) => {
                return <th key={header}>{header}</th>
              })}
            </tr>
          </thead>

          <tbody>
              {products.map((product) => {
                return (
                  <tr
                    key={product.id}
                    onClick={() => {
                      if (selectedProductId !== product.id && fetching !== FetchStatusEnum.fetching) {
                        selectProduct(product.id)
                      }
                    }}
                    className={selectedProductId === product.id ? "selected product-row" : "product-row"}
                  >
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.isNew ? "Y" : "N"}</td>
                    <td>{product.status}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default ProductList

// export interface Product {
//   id: string,
//   name: string,
//   price: number,
//   isNew: boolean,
//   status: StatusEnum
// }