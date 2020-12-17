import React from "react";
import faqData from "../fixtures/faqs.json";
import { Accordion, OptForm } from "../components";

export function FaqContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.List>
                {faqData.map((item) => {
                    return (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header>{item.header}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion.List>

            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.InputRow>
                    <OptForm.Input placeholder="Email Address"></OptForm.Input>
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm.InputRow>
            </OptForm>
        </Accordion>
    );
}
