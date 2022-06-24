import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    justify-content: center;
    width: 100%;
`

export const WrapperContentMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    justify-content: center;
    width: 100%;
    padding: 4.8rem 8rem;
    @media (max-width: 540px) {
        padding: 4.8rem 1.5rem;
    }
`

export const TitleBodyContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
    text-align: center;
    justify-content: center;
    width: 100%;
`

export const WrapperCardsShoes = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 4rem;
`

export const WrapperContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45rem;
    width: 36%;
    text-align: left;
    box-sizing: border-box;
    @media (max-width: 1268px) {
        width: 60%;
    }
    @media (max-width: 868px) {
        width: 70%;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
`