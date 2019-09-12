import React, { Component } from 'react';

export default class Statistics extends Component {

  render() {

    const { onAllItems, itemsDone} = this.props;

    return (
      <div className="statistics h4 mb-lg-0 font-weight-light text-secondary">
        Всего элементов <span className="text-dark">{onAllItems}</span>, завершено <span className="text-dark">{itemsDone}</span>
      </div>
    )
  }
};
