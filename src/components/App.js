import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Header from "./Header"
import PostHome from "./posts/PostHome";
import PostExtra from "./posts/PostExtra";


const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path={["/", "/home"]} exact component={PostHome}/>
						<Route path="/extra" exact component={PostExtra}/>

					</Switch>
				</div>
			</Router>
		</div>
	)
};

export default App;