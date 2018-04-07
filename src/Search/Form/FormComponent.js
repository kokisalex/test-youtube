import React from 'react';
import {Consumer} from '../../StoreProvider';
import {curry} from 'ramda';
import Search from './Form';

export const onChange = curry((fn, key, {target}) => fn(key, target.value));

export const renderInput = ({state, setStateComponent}) => <Search
  value={state.inputForm}
  onChange={onChange(setStateComponent, ['inputForm'])}
/>;

export default function SearchComponent() {
  return (
    <Consumer>
      {
        renderInput
      }
    </Consumer>
  );
}