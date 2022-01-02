import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form, Footer } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	// check form input elements are valid
	// email and password
	const isInvalid = password === '' || email === '';

	const handleSignIn = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				//push to the browse page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmail('');
				setPassword('');
				setError(error.message);
			});
	};

	return (
		<>
			<Form>
				<Form.Background>
					<Form.Image src='/images/misc/signin-bg.jpg' />
				</Form.Background>
				<Form.Header>
					<Form.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
				</Form.Header>
				<Form.Frame>
					<Form.Inner>
						<Form.Title>Sign In</Form.Title>
						{error && <Form.Error>{error}</Form.Error>}
						<Form.Base onSubmit={handleSignIn} method='POST'>
							<Form.Input
								type='text'
								placeholder='Email or phone number'
								value={email}
								onChange={({ target }) => setEmail(target.value)}
							/>
							<Form.Input
								type='password'
								placeholder='Password'
								value={password}
								autoComplete='off'
								onChange={({ target }) => setPassword(target.value)}
							/>
							<Form.Submit disabled={isInvalid} type='submit'>
								Sign In
							</Form.Submit>
						</Form.Base>
						<Form.TextSmall>
							<span style={{ color: '#0071eb' }}>Login with Facebook</span>
						</Form.TextSmall>
						<Form.Text>
							New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you're not a bot.
							<span style={{ color: '#0071eb' }}>Learn more.</span>
						</Form.TextSmall>
					</Form.Inner>
				</Form.Frame>
				<Form.Footer>
					<Form.FooterInner>
						<Footer.Top>Questions? Call 000-000-000-0000</Footer.Top>
						<Footer.Row>
							<Footer.Column>
								<Footer.Link href='#'>FAQ</Footer.Link>
								<Footer.Link href='#'>Cookie Preference</Footer.Link>
							</Footer.Column>
							<Footer.Column>
								<Footer.Link href='#'>Help Centre</Footer.Link>
								<Footer.Link href='#'>Corporate Information</Footer.Link>
							</Footer.Column>
							<Footer.Column>
								<Footer.Link href='#'>Terms of Use</Footer.Link>
							</Footer.Column>
							<Footer.Column>
								<Footer.Link href='#'>Privacy</Footer.Link>
							</Footer.Column>
						</Footer.Row>
						<Footer.Select>
							<Footer.Option>English</Footer.Option>
							<Footer.Option>हिन्दी</Footer.Option>
						</Footer.Select>
					</Form.FooterInner>
				</Form.Footer>
			</Form>
		</>
	);
}
