import React from 'react';
import Board from './Board';

class Home extends React.Component {

    initialize = () => {
      return {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
      }
    }

  state = this.initialize();

  reset = () => {
    this.setState(this.initialize());
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step%2)===0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move} className="margin-button">
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="container">
        <div className="row margin-home-2">
          <div className="col-4 col-md-3 margin-home-1">
            {status}
          </div>
          <div className="col-8 col-md-3 margin-home-1">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="col-6 col-md-3 margin-home-1">
            <ol>{moves}</ol>
          </div>
            {/** Depending upon the state of the game, either show 
                "Play again" button or "Reset game" button */
              winner != null ? (
              <div className="col-6 col-md-3 margin-home-1">
                <button onClick={() => this.reset()}>Play again</button>
              </div>
            ) : (
              <div className="col-6 col-md-3 margin-home-1">
                <button onClick={() => this.reset()}>Reset game</button>
              </div>
            )}
        </div>
      </div> 
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Home;
