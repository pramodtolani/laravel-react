import React, { Component } from 'react';

class NoRoute extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>404</div>

              <div className='card-body'>
                404 Page
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoRoute
