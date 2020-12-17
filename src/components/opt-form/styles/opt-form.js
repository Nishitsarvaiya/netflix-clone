import styled from "styled-components/macro";

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 399px) and (min-width: 350px),
        only screen and (max-width: 349px) {
        padding: 0 5%;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        max-width: 950px;
        padding-top: 0.85rem;
    }
`;

export const Text = styled.h3`
    padding: 0 5%;
    max-width: 450px;
    margin: 0 auto;
    font-weight: normal;
    color: #ffffff;
    text-align: center;

    @media only screen and (max-width: 549px) and (min-width: 400px),
        only screen and (max-width: 949px) and (min-width: 550px) {
        padding: 0 10%;
    }

    @media screen and (min-width: 740px) {
        font-size: 22px;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        max-width: none;
        padding-bottom: 20px;
        font-size: 1.2rem;
    }
`;

export const InputRow = styled.div`
    text-align: center;

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
`;

export const InputContainer = styled.div`
    max-width: 500px;
    margin: 10px auto;

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        margin: 0;
        display: inline-block;
        vertical-align: top;
    }
`;

export const ButtonContainer = styled.div`
    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        display: inline-block;
        vertical-align: top;
        text-align: left;
        flex: 1 0 auto;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding-left: 10px;
    height: 48px;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    border-radius: 2px;
    border: 1px solid #8c8c8c;
    color: #000000;
    box-sizing: border-box;

    @media screen and (min-width: 740px) {
        height: 60px;
        font-size: 16px;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px) {
        min-width: 450px;
        height: 60px;
    }

    @media only screen and (min-width: 1450px) {
        min-width: 500px;
        height: 70px;
    }
`;

export const Button = styled.button`
    font-size: 1rem;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    margin: 0.25em auto;
    padding: 0 1em;
    width: auto;
    min-width: 74px;
    color: #fff;
    background-color: #e50914;
    background-image: linear-gradient(to bottom, #e50914, #db0510);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    box-sizing: border-box;
    border: 0;

    @media only screen and (max-width: 1449px) and (min-width: 950px) {
        font-size: 1.625rem;
        min-height: 60px;
    }

    @media only screen and (min-width: 1450px) {
        font-size: 1.875rem;
        min-height: 70px;
    }

    @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
        margin: 0 !important;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-left: 1px solid #333;
    }

    span {
        /* font-size: 30px; */
        padding: 0.35rem 0;
        flex: 1 1 auto;
        text-align: center;
        text-transform: uppercase;

        @media only screen and (min-width: 1450px) {
            font-size: 1.875rem;
        }

        @media only screen and (max-width: 1449px) and (min-width: 950px), only screen and (min-width: 1450px) {
            padding: 0.5rem 0;
        }
    }

    img {
        filter: brightness(0) invert(1);
        height: 0.75em;
        width: 0.35em;
        flex: 0 1 auto;
        margin: 0 0 0 0.5em;
    }
`;
