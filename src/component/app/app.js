import React, { Component } from 'react';

import Add from '../add';
import List from '../list';
import Filter from '../filter';

export default class App extends Component {

  render() {

    const todoData = [
      {label: 'List item 1', important: 'badge-info'},
      {label: 'List item 2'},
      {label: 'List item 3', important: 'badge-danger'},
      {label: 'List item 4', important: 'badge-info'},
    ];

    return (
      <div className="App py-5">
        <div className="container-fluid w-50">
          <div className="mb-4 d-flex justify-content-end">
            <Filter/>
          </div>
          <Add/>
          <List todos={todoData} />
        </div>
      </div>
    )
  }
}
