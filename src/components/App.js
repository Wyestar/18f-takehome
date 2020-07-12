import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../history';
// import { browserHistory } from 'react-router';


import Header from "./Header"

import PostHome from "./posts/PostHome";
import PostList from "./posts/PostList";
import PostEdit from "./posts/PostEdit";


const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path={["/", "/home"]} exact component={PostHome}/>
						{/*<Route path={["/list", "/all"]} exact component={PostList}/>*/}
						<Route path="/edit/:id" exact component={PostEdit} />
					</Switch>
				</div>
			</Router>
		</div>
	)
};

export default App;