import React, {Component} from 'react';
import Add from '../add';
import TodoList from '../todolist';


export default class App extends Component {

  render() {

    return (
      <div className="App pt-3 py-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-4 d-lg-flex justify-content-between align-items-center">
                Statistics
                Filter
              </div>
              <Add />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
