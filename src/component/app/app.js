import React, { Component } from 'react';

import Add from '../add';
import List from '../list';
import Filter from '../filter';
import Statistics from '../statistics';

export default class App extends Component {

  render() {

    const todoData = [
      { id:1, label: 'Нужно выпить кофе', important: 'badge-info'},
      { id:2, label: 'Создать приложение', important: 'badge-warning'},
      { id:3, label: 'Пойти на обед', important: 'badge-info'},
      { id:4, label: 'Выйти на работу', important: 'badge-info'},
      { id:5, label: 'Пойти домой', important: 'badge-danger'}
    ];

    return (
      <div className="App py-5">
        <div className="container-fluid w-50">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <Statistics/>
            <Filter/>
          </div>
          <Add/>
          <List todos={todoData} />
        </div>
      </div>
    )
  }
}
