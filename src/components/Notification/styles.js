import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
    width: 340px;
`;

export const Toast = styled.div`
    width: 100%;
    height: 80px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 7px;
    display: grid;
    grid-template-columns: 1.3fr 6fr 0.5fr;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    animation: ${fadeIn} 0.5s linear;
`;

export const ToastSuccess = styled(Toast)`
    border-left: 4px solid #47D764;
`;

export const ToastError = styled(Toast)`
    border-left: 4px solid #e24c4b;
`;

export const ToastInfo = styled(Toast)`
    border-left: 4px solid #08a8ee;
`;

export const ToastWarning = styled(Toast)`
    border-left: 4px solid #ff4a05;
`;

export const InnerContainer = styled.div`
    /* align-self: center; */
    margin-left: 10px;

    p:first-child {
        color: #101020;
        font-weight: 600;
        font-size: 15px;
    }

    p:last-child {
        font-size: 12px;
        font-weight: 400;
        color: #656565;
    }
`;

export const OuterContainer = styled.div`
    
`;

export const Button = styled.button`
    align-self: flex-start;
    font-size: 20px;
    line-height: 0;
    cursor: pointer;
    margin-right: -30px;
    border: 0px;
`;

export const Image = styled.img`
    height: 40px;
    width: 40px;
`;
