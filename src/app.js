import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Browse, Signup, Signin } from './pages';

export default function App() {
	const user = {};
	return (
		<Router>
			<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
				<Signin />
			</IsUserRedirect>
			<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
				<Signup />
			</IsUserRedirect>
			<ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
				<Browse />
			</ProtectedRoute>
			<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
				<Home />
			</IsUserRedirect>
		</Router>
	);
}
