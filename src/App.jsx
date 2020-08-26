import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import makeMove from './state/actions/actions';
import TurnTracker from './components/turnTracker.jsx';
import Board from './components/board.jsx';

// eslint-disable-next-line spaced-comment
const mapStateToProps = (state /*, ownProps*/) => ({
  boardState: state.boardState,
  player: state.player,
  isGameOver: state.isGameOver,
});

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const mapDispatchToProps = { makeMove };

const App = ({
  boardState,
  player,
  isGameOver,
  makeMove,
}) => (
  <div>
    <TurnTracker
      boardState={boardState}
      player={player}
      isGameOver={isGameOver}
    />
    <BoardWrapper>
      <Board
        boardState={boardState}
        makeMoveCallback={makeMove}
      />
    </BoardWrapper>
  </div>
);

App.propTypes = {
  boardState: PropTypes.arrayOf(PropTypes.array).isRequired,
  player: PropTypes.number.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  makeMove: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
