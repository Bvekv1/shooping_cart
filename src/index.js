import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import ProductContainer from './components/product_container';
import JSON from './db.json';
import '../src/image/cart.png';
class App extends Component{
    state ={
      product:JSON
    }
  render(){
  return(
    <div>
     <Header />
     <ProductContainer product={this.state.product} />
    </div>
    
  )

  
}
}
 

ReactDOM.render(<App/>,document.querySelector('#root'));


