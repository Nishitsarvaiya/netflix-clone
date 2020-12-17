import styled from "styled-components/macro";

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222222;
    padding: 50px 5%;
    color: #ffffff;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media only screen and (max-width: 949px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    @media only screen and (max-width: 949px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media only screen and (max-width: 949px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin: 0 0 0.5rem;
    color: #ffffff;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        font-size: 1.625rem;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        font-size: 2.5rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        font-size: 1.125rem;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        font-size: 1.25rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
