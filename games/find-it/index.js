import React from 'react';

import createGame from '../../components/base-game';

import Instructions from './instructions';
import Gameplay from './gameplay'

export default createGame({
  Instructions,
  Gameplay
});
