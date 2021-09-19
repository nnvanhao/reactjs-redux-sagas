import {
    createGlobalStyle,
    keyframes
} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

// Theme.js
const darkTheme = {
    textColor: "#d9d9d9",
    background: "#26242E"
};

const lightTheme = {
    textColor: "#26242E",
    background: "#F0F6F7FF"
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        transition: all 200ms;
    }

    body, input, button, div, p, i {
        font: 13px 'Montserrat';
        font-weight: 500;
        animation: ${fadeIn} 1s linear;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        /* max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px; */
    }

    button {
        cursor: pointer;
    }
`;

export {
    GlobalStyle,
    lightTheme,
    darkTheme
}