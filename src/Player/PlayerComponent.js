import React from 'react';
import {Consumer} from '../StoreProvider';
import Player from './Player';

export const renderPlayer =({state}) => <Player {...state}/>;

export default function PlayerComponent() {
  return (
    <Consumer>
      {
        renderPlayer
      }
    </Consumer>
  );
}