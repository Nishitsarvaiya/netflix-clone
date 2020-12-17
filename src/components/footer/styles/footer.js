import styled from "styled-components/macro";

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 70px 45px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Top = styled.p`
    color: #757575;
    margin-bottom: 30px;
    font-size: 16px;
`;

export const Bottom = styled.p`
    color: #757575;
    margin-top: 24px;
    font-size: 13px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 16px;
    font-size: 13px;
    text-decoration: none;
`;

export const Select = styled.select`
    margin-top: 20px;
    background-color: #000;
    border: 2px solid #333;
    border-radius: 1px;
    cursor: pointer;
    color: #999;
    font-size: 16px;
    width: 110px;
    padding: 15px 10px 15px 10px;
`;

export const Option = styled.option``;
