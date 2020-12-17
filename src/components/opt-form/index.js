import React from "react";
import { Container, Text, InputRow, InputContainer, ButtonContainer, Input, Button } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

OptForm.InputRow = function OptFormInputRow({ children, ...restProps }) {
    return <InputRow {...restProps}>{children}</InputRow>;
};

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return (
        <InputContainer>
            <Input {...restProps} />
        </InputContainer>
    );
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <ButtonContainer>
            <Button {...restProps}>
                <span>{children}</span>
                <img src="/images/icons/chevron-right.png" alt="Get Started" />
            </Button>
        </ButtonContainer>
    );
};
