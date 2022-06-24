import styled from "styled-components";

export const CardShoe = styled.div`
    display: flex;
    padding: 7.5rem 2.5rem;
    background-color: var(--bgCard);

    @media (max-width: 540px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

export const ImageShoe = styled.img`
    height: 15rem;
    width: auto;

    @media (max-width: 540px) {
        height: 19rem;
    }
`