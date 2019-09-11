import React, { Component } from 'react';

export default class Add extends Component {

  constructor(){
    super();

    this.state = {
      addValue: false
    };

    this.addFormChange = () => {
      this.setState(() => {
        let addForm = document.querySelector('.js_add__form').value;
        return {
          addValue: addForm
        }
      });
    }
  }

  render() {

    const { onAdd } = this.props;
    const { addValue } = this.state;

    return (
      <div className="card mb-4">
        <div className="card-body">
          <form action="">
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control js_add__form"
                  placeholder="Enter event name"
                  onChange={this.addFormChange}
                />
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onAdd(addValue)}

                >
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
