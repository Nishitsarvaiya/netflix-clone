import React from "react";
import { Container, Top, Bottom, Row, Column, Link, Select, Option } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Top = function footerTop({ children, ...restProps }) {
    return <Top {...restProps}>{children}</Top>;
};

Footer.Bottom = function footerBottom({ children, ...restProps }) {
    return <Bottom {...restProps}>{children}</Bottom>;
};

Footer.Row = function footerRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function footerColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function footerLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Select = function footerSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};

Footer.Option = function footerOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>;
};
