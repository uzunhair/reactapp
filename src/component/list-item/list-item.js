import React, { Component } from 'react';

export default class ListItem extends Component {

  render() {
    const { label, important = 'badge-success' } = this.props;
    const style = `ml-auto badge ${important}`;

    return (
      <li className="list-group-item d-flex">
        {label}
        <div className={style}>
          <i className="fa fa-info fa-fw"></i>
        </div>
      </li>
    )
  }
}
