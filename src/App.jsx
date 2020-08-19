import React from 'react';
import { connect } from 'react-redux';
import makeMove from './state/actions/actions';
import TurnTracker from './components/turnTracker.jsx';
import Board from './components/board.jsx';
import styled from 'styled-components';


// eslint-disable-next-line spaced-comment
const mapStateToProps = (state /*, ownProps*/) => ({
  boardState: state.boardState,
  player: state.player,
  totalValidMoves: state.totalValidMoves,
});

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const mapDispatchToProps = { makeMove };

const App = ({ boardState, player, totalValidMoves, makeMove }) => (
  <div>
    <TurnTracker
      boardState={boardState}
      player={player}
      totalValidMoves={totalValidMoves}
    />
    <BoardWrapper>
      <Board
        boardState={boardState}
        makeMoveCallback={makeMove}
      />
    </BoardWrapper>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
