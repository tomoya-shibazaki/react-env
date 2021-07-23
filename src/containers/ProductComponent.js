import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, price, category } = product
        return(
          <tr>
            <td data-label="title">{title}</td>
            <td data-label="price">{price}</td>
            <td data-label="category">{category}</td>
          </tr>
        )
    })
    return(
        <div>
          <table className='ui celled table'>
            <thead>
              <tr>
                <th data-label="title">title</th>
                <th data-label="price">price</th>
                <th data-label="category">category</th> 
              </tr>
            </thead>
          <tbody>
            <>{renderList}</>
          </tbody>
        </table>
      </div>
    )
}

export default ProductComponent