import React from 'react';
import { connect } from 'react-redux';
import makeMove from './state/actions/actions';
import Board from './components/board.jsx';

// eslint-disable-next-line spaced-comment
const mapStateToProps = (state /*, ownProps*/) => ({
  boardState: state.boardState,
});

const mapDispatchToProps = { makeMove };

const App = ({ boardState, makeMove }) => (
  <div>
    <Board
      boardState={boardState}
      makeMoveCallback={makeMove}
    />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
