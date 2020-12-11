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

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;

    @media (max-width: 1000px) {
        font-size: 2.125rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;
