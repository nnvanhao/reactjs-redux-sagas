import styled from 'styled-components';

export const Container = styled.div`
    width: 100px;
    text-align: right;
    position: relative;
`;

export const SelectLang = styled.div`
    display: flex;   
    align-items: center;
    height: 35px;
    width: 150px;
    line-height: 2;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 10px;
    
    &:before {
        content: '';
        display: inline-block;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 25px;
    }
`;


export const LangMenu = styled.ul`
    margin: 0;
    padding: 0;
    display: block;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 40px;
    left: 0px;
    width: 150px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    cursor: pointer;
`;

export const LangWrapper = styled.li`
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const LangItem = styled.a`
    text-decoration: none;
    width: 150px;
    padding: 5px 5px;
    display: block;
    background-repeat: no-repeat;
    background-position: 10px;

    &:before {
        content: '';
        display: inline-block;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 10px;
        margin-left: 10px;
    }
`;
