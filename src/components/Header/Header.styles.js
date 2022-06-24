import styled from "styled-components";
import backImageHeader from '../../assests/back-header.svg';

export const WrapperHeader = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: 45rem;
    background-image: url(${backImageHeader});
    box-sizing: border-box;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
        filter: brightness(50%);
    }
`
export const BackGround = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 8rem;
    align-items: center;
    height: 45rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 540px) {
        padding: 0 2.5rem;
    }
`


