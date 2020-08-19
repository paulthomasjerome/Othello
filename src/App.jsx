import React from 'react';
import { connect } from 'react-redux';
import makeMove from './state/actions/actions';
import TurnTracker from './components/turnTracker.jsx'
import Board from './components/board.jsx';


// eslint-disable-next-line spaced-comment
const mapStateToProps = (state /*, ownProps*/) => ({
  boardState: state.boardState,
  player: state.player,
});

const mapDispatchToProps = { makeMove };

const App = ({ boardState, makeMove, player }) => (
  <div>
    <TurnTracker player={player} />
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
