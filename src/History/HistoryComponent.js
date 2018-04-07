import React from 'react';
import {Consumer} from '../StoreProvider';
import History from './History';
import HistoryItem from './HistoryItem';
import {curry} from 'ramda';
import wrap from '../Wrap';

export const onClick = wrap((fn, key, value) => fn(key, value));
export const onClickSelect = curry((fn, key, value, event) => {
  event.stopPropagation();
  return fn(key, value);
});

export const renderHistory = ({state, setStateComponent}) => <HistoryComponent  {...state} setStateComponent={setStateComponent}/>;

export const mapItems = curry((fn, item, index) => <HistoryItem key={index} {...item} index={index} setStateComponent={fn} onClick={onClick} onClickSelect={onClickSelect}/>);

export function HistoryComponent(props) {
  const {
    historyVideo,
    setStateComponent
  } = props;

  return(
    <History items={historyVideo.map(mapItems(setStateComponent))}/>
  );
}

export default function () {
  return (
    <Consumer>
      {
        renderHistory
      }
    </Consumer>
  );
}