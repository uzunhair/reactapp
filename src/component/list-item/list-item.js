import React, { Component } from 'react';

export default class ListItem extends Component {

  constructor() {
    super();

    this.state = {
      disable: false,
      important: false
    };

    this.onlabelClick = () => {
      this.setState (({disable}) => {
        return {
          disable: !disable
        }
      })
    };

    this.onImportant = () => {
      // this.setState(({important}) => {
      //   return {
      //     important: !important
      //   }
      // })
      this.setState(({important}) => ( { important: !important }) )
    }
  }

  render() {
    const { label, onDeleted } = this.props;
    const { disable, important = "badge badge-outline-secondary mr-2 p-2"} = this.state;

    let badgeClassBase = `badge mr-2 p-2 badge-outline-`;
    let badgeClass = `${badgeClassBase}secondary`;
    let labelClass = "mr-auto";

    if(disable) {
      labelClass = 'text-muted mr-auto text-line-through';
    }

    if(important) {
      badgeClass = `${badgeClassBase}warning`
    }

    return (
      <li className="list-group-item d-flex align-items-center">

        <label
          className="custom-control custom-checkbox mb-0 pl-4"
          onChange={this.onlabelClick}>

          <input type="checkbox" className="custom-control-input" />
          <span className="custom-control-label"></span>

        </label>

        <div className={labelClass}>
          {label}
        </div>

        <div
          className={badgeClass}
          onClick={this.onImportant}>
          <i className="fa fa-exclamation-triangle"></i>
        </div>

        <button
          type="button"
          className="ml-3 btn btn-sm btn-danger"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-alt fa-fw"></i>
        </button>

      </li>
    )
  }
}
