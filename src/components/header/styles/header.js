import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    background-color: transparent;
    transition: background-color 0.5s;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5rem;
    z-index: 10;

    @media only screen and (max-width: 949px) and (min-width: 550px),
        only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        height: 45px;
    }
    @media only screen and (max-width: 1449px) and (min-width: 950px) {
        height: 4rem;
    }
`;

export const Frame = styled.div`
    position: relative;
    margin: 0 3.5rem;
    height: 100%;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        margin: 0 5%;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        margin: 0 45px;
    }
`;

export const Logo = styled.img`
    padding-top: 0.5rem;
    height: 45px;
    width: 167px;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        height: 24px;
        width: 30%;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        height: 32px;
        width: 108px;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px) {
        height: 36px;
        width: 134px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    float: right;
    font-weight: 400;
    font-size: 1rem;
    color: #ffffff;
    text-decoration: none;
    border-radius: 3px;
    margin-top: 0.5rem;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        font-size: 0.9rem;
        margin-top: 0.35rem;
        padding: 0.25rem 0.5rem;
    }
`;
