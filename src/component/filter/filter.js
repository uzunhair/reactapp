import React, { Component } from 'react';

export default class Filter extends Component {

  render() {

    return (
      <div className="btn-group">
        <button type='button' className='btn btn-info'>Active</button>
        <button type='button' className='btn btn-info'>Done</button>
        <button type='button' className='btn btn-info'>Close</button>
      </div>
    )
  }
}
