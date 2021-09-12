import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.png';

// cart is coming from mapStateToProps
export default function Header() {

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My cart</strong>
                </div>
                <MdShoppingBasket size={36} color="#7159c1" />
            </Cart>
        </Container>
    );
}
