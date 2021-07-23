import React from "react";
import { useSelector } from "react-redux";
import SelectBox from "./SelectBox";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const { id, title, price, category } = product

        return(
          <tr key={id}>
            <td data-label="title">{title}</td>
            <td data-label="price">$ {price}</td>
            <td data-label="category">{category}</td>
            <td data-label="select"><SelectBox /></td>
            <td data-label="delete"><button>delete</button></td>
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
                <th data-label="select">select box</th>
                <th data-label="delete">delete</th>
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