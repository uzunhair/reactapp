import React, {Component} from 'react';

import ListItem from '../list-item';

export default class List extends Component {

  render() {

    const { todos } = this.props;
    const elements = todos.map(({id, ...itemProps}) => {
      return (
        <ListItem key={id} {...itemProps} />
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
