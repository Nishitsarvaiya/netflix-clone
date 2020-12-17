import styled from "styled-components/macro";

export const Container = styled.div`
    border-bottom: 8px solid #222222;
    padding: 50px 5%;
    text-align: center;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        padding: 50px 0;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px),
        only screen and (max-width: 1449px) and (min-width: 950px),
        only screen and (min-width: 1450px) {
        padding: 70px 45px;
    }
`;

export const Inner = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* box-sizing: border-box; */
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
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

export const Item = styled.li`
    color: #ffffff;
    margin: 0 0 8px 0;
    font-size: 1.625rem;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        font-size: 1.125rem;
    }

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        font-size: 1.25rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-weight: normal;
    background: #303030;
    padding: 1em 1.2em 1em 1.2em;

    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        height: auto;
        user-select: none;

        @media only screen and (max-width: 600px) {
            width: 16px;
        }
    }

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    width: 100%;
    margin: 1.25em auto;
    max-width: 815px;

    @media only screen and (max-width: 949px) and (min-width: 550px) {
        width: 90%;
        margin: 1.5em auto;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        width: 75%;
        margin: 2em auto;
    }
`;

export const Body = styled.div`
    font-family: "Rubik", sans-serif;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;
    background: #303030;
    font-weight: 300;
    text-align: left;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }
    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;
