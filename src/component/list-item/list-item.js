import React, { Component } from 'react';

export default class ListItem extends Component {

  render() {
    const { label, done, important, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const badgeClassBase = `badge mr-2 p-2 badge-outline-`;
    const badgeClassSecondary = `${badgeClassBase}secondary`;
    const badgeClass = important ? `${badgeClassBase}warning` : badgeClassSecondary;

    let labelClass = "mr-auto";

    if(done) {
      labelClass = 'text-muted mr-auto text-line-through';
    }

    return (
      <li className="list-group-item d-flex align-items-center">

        <label
          className="custom-control custom-checkbox mb-0 pl-4"
          onChange={onToggleDone}>

          <input type="checkbox" className="custom-control-input" defaultChecked={done} />
          <span className="custom-control-label"></span>

        </label>

        <div className={labelClass}>
          {label}
        </div>

        <div
          className={badgeClass}
          onClick={onToggleImportant}>
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
