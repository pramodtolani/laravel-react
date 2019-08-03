import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
  constructor (props) {
    super(props)

    if(!IS_LOGIN){
    	window.location.href = "/login";
    }

    this.process();
  }

  process () {
	axios
      .post('/logout')
      .then(response => {
        if(response.data.status){
        	window.location.href = "/";
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default Logout
