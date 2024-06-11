import styled from 'styled-components';


export const Div = styled.div`
    width: 600px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;   
    bottom: 0;
    left: 50%;
    z-index: 1;

    @media screen and (max-width: 960px) {
        position: static;
        width: 600px;
        height: 700px;
    }

    @media screen and (max-width: 640px) {
        position: static;
        width: 400px;
        height: 500px;
    }
    `;