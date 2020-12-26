import React,{Component} from 'react';
import '../css/styles.css';
import cart from '../image/cart.png';
class Header extends Component{
    render(){
        return(
            <header>
                <a className="link" href="#product">Product</a>
                <a className="link" href="#Cart" ><img src={cart} id="cart"/></a>
                <a className="link" href="#Aboutus">About us</a>
                
            </header>
        )
    }

}

export default Header;