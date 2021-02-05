import React from "react";
import { Form, Footer } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function FormContainer() {
    return (
        <Form>
            <Form.Background>
                <Form.Image src="/images/misc/signin-bg.jpg" />
            </Form.Background>
            <Form.Header>
                <Form.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Form.Header>
            <Form.Frame>
                <Form.Inner>
                    <Form.Title>Sign In</Form.Title>
                    <Form.Input type="text" placeholder="Email or phone number" />
                    <Form.Input type="password" placeholder="Password" />
                    <Form.Submit>Sign In</Form.Submit>
                    <Form.TextSmall>
                        <span style={{ color: "#0071eb" }}>Login with Facebook</span>
                    </Form.TextSmall>
                    <Form.Text>
                        New to Netflix? <Form.Link>Sign Up Now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                        <span style={{ color: "#0071eb" }}>Learn more.</span>
                    </Form.TextSmall>
                </Form.Inner>
            </Form.Frame>
            <Form.Footer>
                <Footer.Top>Questions? Call 000-000-000-0000</Footer.Top>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Investor Relations</Footer.Link>
                        <Footer.Link href="#">Privacy</Footer.Link>
                        <Footer.Link href="#">Speed Test</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Help Centre</Footer.Link>
                        <Footer.Link href="#">Jobs</Footer.Link>
                        <Footer.Link href="#">Cookie Preference</Footer.Link>
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Account</Footer.Link>
                        <Footer.Link href="#">Ways to Watch</Footer.Link>
                        <Footer.Link href="#">Corporate Information</Footer.Link>
                        <Footer.Link href="#">Netflix Originals</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Media Centre</Footer.Link>
                        <Footer.Link href="#">Terms of Use</Footer.Link>
                        <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Select>
                    <Footer.Option>English</Footer.Option>
                    <Footer.Option>हिन्दी</Footer.Option>
                </Footer.Select>
            </Form.Footer>
        </Form>
    );
}
