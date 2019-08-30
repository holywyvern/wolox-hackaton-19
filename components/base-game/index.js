import React, { Component } from 'react';

import GameInstructions from '../game-instructions';

function createGame({ Instructions, Gameplay }) {
  class BaseGame extends Component {
    static defaultProps = {
      level: 1
    };

    state = { scene: 'instructions' };

    play = () => this.setState({ scene: 'gameplay' })
    exit = () => { this.setState({ scene: 'instructions' })};

    render() {
      const { scene } = this.state;
      const { level } = this.props;
      if (scene === 'instructions') {
        return (
          <GameInstructions
             intructionsComponent={Instructions}
             onPlay={this.play}
             onExit={this.exit}
          />
        );
      }
      return <Gameplay level={level} onExit={this.exit} />;
    }
  }

  return BaseGame;
}

export default createGame;
