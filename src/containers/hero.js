import React from "react";
import { Hero } from "../components";
import { OptForm } from "../components";

export function HeroContainer() {
    return (
        <Hero>
            <Hero.Background>
                <Hero.Image src="/images/misc/home-bg2.jpg" />
                <Hero.Gradient></Hero.Gradient>
            </Hero.Background>
            <Hero.Inner>
                <Hero.Title>Unlimited movies, TV shows and more.</Hero.Title>
                <Hero.Subtitle>Watch anywhere. Cancel anytime.</Hero.Subtitle>
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.InputRow>
                        <OptForm.Input placeholder="Email Address"></OptForm.Input>
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm.InputRow>
                </OptForm>
            </Hero.Inner>
        </Hero>
    );
}
