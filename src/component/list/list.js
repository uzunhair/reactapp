import React, {Component} from 'react';

import ListItem from '../list-item';

export default class List extends Component {

  render() {

    const { todos, onDeleted } = this.props;
    const elements = todos.map(({id, ...itemProps}) => {
      return (
        <ListItem
          key={id}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
        />
      )
    });

    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {elements}
        </ul>
      </div>
    )
  }
}
