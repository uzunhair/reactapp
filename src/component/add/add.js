import React, { Component } from 'react';

export default class Add extends Component {

  render() {

    return (
      <div className="card mb-4">
        <div className="card-body">
          <form action="">
            <div className="form-row">
              <div className="col">
                <input type="text" className="form-control"/>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
