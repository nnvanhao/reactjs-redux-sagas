import React from 'react';
import { Wrapper } from '~/components/Container/styles';

// cart is coming from mapStateToProps
export default function Container(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
