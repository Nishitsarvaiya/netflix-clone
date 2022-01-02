import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
	min-height: 100%;
	position: relative;
	z-index: 0;
`;

export const Header = styled.div`
	background: 0 0;
	border: 0;
	height: 90px;

	@media screen and (max-width: 440px),
		screen and (orientation: landscape) and (max-width: 700px) {
		height: 45px;
	}

	@media screen and (max-width: 700px) {
		height: 75px;
	}

	@media only screen and (min-width: 740px) {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		border-bottom: transparent;
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(rgba(0, 0, 0, 0.5)),
			to(rgba(0, 0, 0, 0))
		);
		background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
		background: -moz-oldlinear-gradient(top, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
		background: -o-linear-gradient(top, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
	}
`;

export const Footer = styled.div`
	min-width: 190px;
	width: 100%;
	margin-top: 80px;
	padding-bottom: 20px;
	font-size: 1em;
	color: #757575;
	position: relative;
	background: rgba(0, 0, 0, 0.75);
`;

export const FooterInner = styled.div`
	color: #757575;
	padding: 30px 0;
	width: 90%;
	margin: 0 auto;

	@media only screen and (min-width: 740px) {
		max-width: 1000px;
	}
`;

export const Background = styled.div`
	display: none;
	opacity: 0.5;

	@media only screen and (min-width: 740px) {
		-webkit-background-size: cover;
		-moz-background-size: cover;
		background-size: cover;
		display: block;
		height: 100%;
		min-height: 100vh;
		overflow: hidden;
		position: absolute;
		width: 100%;
		z-index: -1;
	}
`;

export const Logo = styled.img`
	padding-top: 1.5rem;
	height: 45px;
	width: 167px;
	margin-left: 3%;

	@media only screen and (max-width: 549px) and (min-width: 400px),
		only screen and (max-width: 399px) and (min-width: 350px),
		only screen and (max-width: 349px) {
		height: 24px;
		width: 30%;
	}

	@media only screen and (max-width: 949px) and (min-width: 550px) {
		height: 32px;
		width: 108px;
	}

	@media only screen and (max-width: 1449px) and (min-width: 950px) {
		height: 36px;
		width: 134px;
	}
`;

export const Image = styled.img`
	border: 0;

	@media only screen and (min-width: 740px) {
		min-height: 100%;
		min-width: 100%;
	}
`;

export const Frame = styled.div`
	color: #333;
	margin: 0 auto;
	padding: 0 5%;

	@media only screen and (min-width: 740px) {
		margin: 0 auto -236px;
		min-height: 100vh;
		background-color: transparent;
		max-width: 450px;

		&:before {
			content: '';
			height: 91px;
			display: block;
		}

		&.login-body:after {
			content: '';
			height: 236px;
			display: block;
		}
	}
`;

export const Inner = styled.div`
	min-height: 550px;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 20px 0 30px;
	width: 100%;

	@media only screen and (min-width: 500px) {
		min-width: 380px;
	}

	@media only screen and (min-width: 740px) {
		min-height: 660px;
		padding: 60px 68px 40px;
		margin-bottom: 90px;
	}
`;

export const Base = styled.form``;

export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	margin: 0 0 10px 0;
	padding: 0;
	margin-bottom: 28px;
`;

export const Input = styled.input`
	max-width: 100%;
	width: 100%;
	background: #333;
	padding-bottom: 16px;
	border-radius: 4px;
	border: 0;
	color: #fff;
	height: 50px;
	line-height: 50px;
	padding: 0 20px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: normal;
	margin-bottom: 16px;

	::placeholder {
		font-weight: normal;
	}
`;

export const Submit = styled.button`
	min-width: 74px;
	min-height: 50px;
	color: #fff;
	box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
	user-select: none;
	text-align: center;
	cursor: pointer;
	border: 0;
	padding: 0;
	width: 100%;
	background: #e50914;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 700;
	margin: 24px 0 70px;

	@media only screen and (min-width: 360px) {
		width: 100%;
		max-width: 100%;
	}

	@media only screen and (min-width: 500px) {
		padding: 16px;
	}
`;

export const Text = styled.p`
	color: #737373;
	font-size: 16px;
	font-weight: 500;
	margin-top: 16px;
	margin-bottom: 20px;
`;

export const TextSmall = styled.p`
	color: #737373;
	font-size: 13px;
	font-weight: 500;
	text-align: left;
`;

export const Link = styled(ReactRouterLink)`
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	margin-top: 16px;
	text-decoration: none;
`;

export const Error = styled.div`
	background: #e87c03;
	border-radius: 4px;
	font-size: 14px;
	margin: 0 0 16px;
	color: white;
	padding: 16px 20px;
`;
