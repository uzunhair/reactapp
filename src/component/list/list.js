import React, {Component} from 'react';

import ListItem from '../list-item';

export default class List extends Component {

  render() {

    const { todos } = this.props;

    const numbers = [1, 4, 9];
    const roots = numbers.map(Math.sqrt);

    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {roots}
          <ListItem
            label={todos[1].label}
            important={todos[1].important}
          />
          <ListItem
            label="List item 3"
            important="badge-danger"
          />
          <ListItem
            label="List item 4"
            important="badge-info"
          />
          <ListItem
            label="List item 5"
            important="badge-info"
          />
        </ul>
      </div>
    )
  }
}
