import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import LoginPage from './LoginPage'
import Logout from './Logout'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import NoRoute from './NoRoute';
import axios from 'axios'


function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
			IS_LOGIN ? (
		          <Component {...props} />
		        ) : (
		          <Redirect
		            to={{
		              pathname: "/login",
		              state: { from: props.location }
		            }}
		          />
		        )
		      }
		/>
	)
}

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
	        <Route path='/logout' exact component={Logout} />
          	<Route path='/login' exact component={LoginPage} />
            <PrivateRoute path='/' exact component={ProjectsList} />
            <PrivateRoute path='/project/create' exact component={NewProject} />
            <PrivateRoute path='/project/:id' exact component={SingleProject} />
            <PrivateRoute component = { NoRoute } />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
