import React from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <HeroContainer />
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    );
}
