import styled from "styled-components/macro";

export const Container = styled.div`
    position: relative;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    margin-bottom: 0;
    background: 0 0;
    color: #fff;

    @media only screen and (max-width: 949px) and (min-width: 550px),
        only screen and (max-width: 1449px) and (min-width: 950px),
        only screen and (min-width: 1450px) {
        padding: 70px 45px;
    }
`;

export const Background = styled.div`
    z-index: 0;
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        top: -100px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    border: 0;

    @media only screen and (max-width: 949px) and (min-width: 550px) and (orientation: portrait),
        only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        height: 100%;
        width: auto;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;

export const Gradient = styled.div`
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;

    @media only screen and (max-width: 549px) and (min-width: 400px) {
        padding: 30px 0;
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    max-width: 640px;
    margin: 0 auto;
    line-height: 1.1;
    text-align: center;

    @media only screen and (max-width: 1449px) and (min-width: 550px) {
        font-size: 2.875rem;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        font-size: 3.75rem;
    }

    @media only screen and (min-width: 1450px) {
        max-width: 800px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 1.125rem;
    margin: 1rem auto;
    max-width: 640px;
    font-weight: 400;
    text-align: center;

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        font-size: 1.625rem;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        font-size: 1.625rem;
    }

    @media only screen and (min-width: 1450px) {
        max-width: 800px;
    }
`;
