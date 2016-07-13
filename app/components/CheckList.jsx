import React, { Component, PropTypes } from 'react';

class CheckList extends Component {

  checkInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    let tasks = this.props.tasks.map((task, taskIndex) => {
      return (
        <li key={task.id}>
          <input type="checkbox" defaultChecked={task.done} onChange={
              this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)
            }/>
          {' '}{task.name}{' '}
          <button className="btn btn-danger-outline btn-sm" onClick={
              this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)
            }>Del</button>
        </li>
      );
    });

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <div className="form-group">
          <input type="text" className="form-control" id="inputTask" placeholder="Enter task"
              onKeyPress={this.checkInputKeyPress.bind(this)}/>
        </div>
      </div>
    );
  }
};

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};

export default CheckList;
