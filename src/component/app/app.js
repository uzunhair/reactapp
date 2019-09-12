import React, { Component } from 'react';

import Add from '../add';
import List from '../list';
import Filter from '../filter';
import Statistics from '../statistics';

export default class App extends Component {

  minId = 100;

  createitem(label, done = false, important = false) {
    return {
      label,
      id: this.minId++,
      done: done,
      important: important
    }
  };

  state = {
    todoData: [
      this.createitem("Нужно выпить кофе"),
      this.createitem("Создать приложение"),
      this.createitem("Пойти на обед", true),
      this.createitem("Выйти на работу", false, true),
      this.createitem("Пойти домой")
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

    if(value) {
      const newItem = this.createitem(value);

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
    } else {
      console.warn('Введите название события')
    }
  };

  onToggleImportant = (id) => {
    console.log('onToggleImportant', id);

    this.setState(({todoData}) => {

      const idx = todoData.findIndex( (el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        important: !oldItem.important
      };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray
      }
    })
  };

  onToggleDone = (id) => {
    console.log('onToggleDone', id);

    this.setState( ({todoData}) => {

      const idx = todoData.findIndex( (el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      };

      const newTodoData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newTodoData
      }

    });
  };

  render() {

    const { todoData } = this.state;

    return (
      <div className="App py-5">
        <div className="container-fluid w-50">
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <Statistics
              onAllItems={todoData.length}
            />
            <Filter/>
          </div>
          <Add
            onAdd={ this.addItem }
          />
          <List
            todos={todoData}
            onDeleted={ this.deletedItem }
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
        </div>
      </div>
    )
  }
}
