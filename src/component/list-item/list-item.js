import React, { Component } from 'react';

export default class ListItem extends Component {

  constructor() {
    super();

    this.state = {
      disable: false,
      urgency: false
    };

    this.onlabelClick = () => {
      this.setState({
        disable: true
      })
    };

    this.onUrgency = () => {
      this.setState({
        urgency: true
      })
    }
  }

  render() {
    const { label, important = 'badge-success' } = this.props;
    const { disable,  urgency} = this.state;
    let badgeClass = `badge ${important} mr-2 p-2`;

    let listClass ='list-group-item d-flex align-items-center';
    if(disable) {
      listClass += ' disabled';
      badgeClass = 'badge badge-secondary mr-2 p-2'
    }

    if(urgency) {
      badgeClass = "badge badge-danger mr-2 p-2"
    }

    return (
      <li className={listClass}>
        <div
          className={badgeClass}
          onClick={this.onUrgency}> </div>
        <div
          className="mr-auto cursor-pointer"
          onClick={this.onlabelClick}>
          {label}
        </div>
        <button className="ml-auto btn btn-sm btn-danger">
          <i className="fa fa-trash-alt fa-fw"></i>
        </button>
      </li>
    )
  }
}
