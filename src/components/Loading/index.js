import React from 'react';
import { useSelector } from 'react-redux';
import IconLoading from '~/assets/images/loading-svg.svg';
import { Container, Wrapper, Image } from '~/components/Loading/styles';

// cart is coming from mapStateToProps
export default function Loading(props) {
    const { isLoading } = useSelector(state => state.loading);
    return (
        <Container>
            {isLoading && (
                <Wrapper>
                    <Image src={IconLoading} />
                </Wrapper>
            )}
            {props.children}
        </Container>
    )
}
