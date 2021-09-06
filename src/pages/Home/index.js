import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { handleGetDevToNews } from '~/modules/devto/actions';

export default function Home() {
    const dispatch = useDispatch();
    const { users = []} = useSelector(state => state.devTo);

    console.log('users', users);

    useEffect(() => {
        dispatch(handleGetDevToNews());
    }, [])

    return (
        <div>
           {users.map(item => {
               const { name = '' } = item;
               return(
                   <div>{name}</div>
               )
           })}
        </div>
    );
}
