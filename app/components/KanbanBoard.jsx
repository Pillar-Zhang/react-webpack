import React, { Component, PropTypes } from 'react';
import List from './List.jsx';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="container kanban-board">
        <div className="row">
          <List
            title="To Do"
            taskCallbacks={this.props.taskCallbacks}
            cards={
              this.props.cards.filter((card) => card.status === "todo")
            }>
          </List>
          <List
            title="In Progress"
            taskCallbacks={this.props.taskCallbacks}
            cards={
              this.props.cards.filter((card) => card.status === "in-progress")
            }>
          </List>
          <List
            title="Done"
            taskCallbacks={this.props.taskCallbacks}
            cards={
              this.props.cards.filter((card) => card.status === "done")
            }>
          </List>
        </div>
      </div>
    );
  }
};

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};

export default KanbanBoard;


