import React from 'react';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import {Consumer} from '../../StoreProvider';
import {streamGet} from '../../Http';
import wrap from '../../Wrap';
import {curry} from 'ramda';

export const onClick = wrap((fn, key, value) => fn(key, value));

export const mapItemDropdown = curry((fn, item, index) => <DropdownItem key={index} onClick={onClick} setStateComponent={fn}  {...item}/>);

export const showDropdown = (value) => value ? 'dropdown-menu show' : 'dropdown-menu';

export const renderDropdown = ({state, setStateComponent}) => <DropdownComponent {...state}
  setStateComponent={setStateComponent}/>;

export class DropdownComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      inputForm,
      setStateComponent,
    } = nextProps;

    if (inputForm.length > 2 && prevState.inputForm !== inputForm) {
      streamGet(setStateComponent(['requestVideo']), inputForm);
    }

    return {inputForm};
  }


  render() {
    const {
      inputForm,
      requestVideo,
      setStateComponent,
    } = this.props;
    return (
      <Dropdown
        show={showDropdown(inputForm)}
        items={requestVideo.map(mapItemDropdown(setStateComponent))}
      />
    );
  }
}

export default function () {
  return (
    <Consumer>
      {
        renderDropdown
      }
    </Consumer>
  );
}