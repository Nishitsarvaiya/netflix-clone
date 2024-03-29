import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	Container,
	Header,
	Footer,
	FooterInner,
	Background,
	Image,
	Frame,
	Inner,
	Base,
	Title,
	Input,
	Submit,
	Text,
	TextSmall,
	Link,
	Logo,
	Error,
} from './styles/form';

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Header = function FormHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Form.Footer = function FormFooter({ children, ...restProps }) {
	return <Footer {...restProps}>{children}</Footer>;
};

Form.FooterInner = function FormFooterInner({ children, ...restProps }) {
	return <FooterInner {...restProps}>{children}</FooterInner>;
};

Form.Background = function FormBackground({ children, ...restProps }) {
	return <Background {...restProps}>{children}</Background>;
};

Form.Image = function FormImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};

Form.Frame = function FormFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Form.Inner = function FormInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
	return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

Form.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};
