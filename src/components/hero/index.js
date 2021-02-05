import React from "react";

import { Container, Background, Image, Gradient, Inner, Title, Subtitle } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Hero.Background = function HeroBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
};

Hero.Image = function HeroImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};

Hero.Gradient = function HeroGradient({ ...restProps }) {
    return <Gradient {...restProps}></Gradient>;
};

Hero.Inner = function HeroInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Hero.Subtitle = function HeroSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>;
};
