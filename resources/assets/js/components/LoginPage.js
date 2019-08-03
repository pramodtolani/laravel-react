import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: []
    }

    if(IS_LOGIN){
    	this.props.history.push('/');
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.hasErrorFor = this.hasErrorFor.bind(this);
    this.renderErrorFor = this.renderErrorFor.bind(this);
  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLogin (event) {
    event.preventDefault();

    const { history } = this.props

    const project = {
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('/login', project)
      .then(response => {
        if(response.data.status){
//        	history.push('/')
        	window.location.href = "/";
        }
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Login</div>

              <div className='card-body'>

                <form onSubmit={this.handleLogin}>

                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      id='email'
                      type='email'
                      className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                      name='email'
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('email')}
                  </div>

                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
	                    id='password'
	                    type='password'
	                    className={`form-control ${this.hasErrorFor('password') ? 'is-invalid' : ''}`}
	                    name='password'
	                    onChange={this.handleFieldChange}
	                  />
	                  {this.renderErrorFor('password')}
                  </div>

                  <button className='btn btn-primary'>Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
