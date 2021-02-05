import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Frame, Logo, ButtonLink } from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({ ...restProps }) {
    return <ButtonLink {...restProps}></ButtonLink>;
};
