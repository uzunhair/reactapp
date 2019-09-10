import React, { Component } from 'react';

import Add from '../add';
import List from '../list';
import Filter from '../filter';

export default class App extends Component {

  render() {

    const todoData = [
      { label: 'Нужно выпить кофе', important: 'badge-info'},
      { label: 'Создать приложение', important: 'badge-warning'},
      { label: 'Пойти на обед', important: 'badge-info'}
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
