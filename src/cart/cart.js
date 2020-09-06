import React from 'react';
import { Cart, CartWrapper } from './cartStyle'

const cart = (props) => {
    return (
        <CartWrapper>
            <Cart className={props.active}>
                <div className="cartLeft">
                    <h5>5 Items | Rp 125,000</h5>
                    <p>Termasuk ongkos kirim</p>
                </div>
                <button className="cartRight" onClick = {() => props.onClick()}>
                    <i className="material-icons"> shopping_cart</i>
                    <i className="material-icons"> keyboard_arrow_right</i>
                </button>
            </Cart>
            <div className="transparentBG" active={props.active}></div>
        </CartWrapper>
    );
}


export default cart