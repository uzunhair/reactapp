import React, { Component } from 'react';

import Add from '../add';
import List from '../list';
import Filter from '../filter';
import Statistics from '../statistics';

export default class App extends Component {

  minId = 100;

  state = {
    todoData: [
      { id:1, label: 'Нужно выпить кофе'},
      { id:2, label: 'Создать приложение'},
      { id:3, label: 'Пойти на обед'},
      { id:4, label: 'Выйти на работу'},
      { id:5, label: 'Пойти домой'}
    ]
  };

  deletedItem = (id) => {
    this.setState( ({todoData}) => {

      const newTodoData = todoData.filter(todo => todo.id !== id);

      return {
        todoData: newTodoData
      }

    });
  };

  addItem = (value) => {

    const newItem = {
      id: this.minId++,
      label: value
    };

    this.setState(({todoData}) => {

      const newTodoData = [
        ...todoData,
        newItem
      ];

      console.log(newTodoData, value);

      return {
        todoData: newTodoData
      }

    })
  };

  render() {

    const { todoData } = this.state;

    return (
      <div className="App py-5">
        <div className="container-fluid w-50">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <Statistics/>
            <Filter/>
          </div>
          <Add
            onAdd={ this.addItem }
          />
          <List
            todos={todoData}
            onDeleted={ this.deletedItem }
          />
        </div>
      </div>
    )
  }
}
