
import React from 'react'
import ViewProduct from './ViewProduct'

class ProductsContainer extends React.Component{
  render(){
    console.log("hy")
    console.log(this.props)
    this.props.productData.map((d) =>{
      console.log(d)
      console.log(d.id)
    }
    )
    return(
      <div className='productList'>
        {this.props.productData.map((data) => {
          return(
            <ViewProduct data={data} key= {data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct} />
          )
        })}
      </div>
    )
  }
}

export default ProductsContainer
