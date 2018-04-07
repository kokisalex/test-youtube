import React from 'react';
import Form from './Form/FormComponent';
import Dropdown from './Dropdown/DropdownComponent';

export default function Search() {
  return(
    <div className="dropdown">
      <Form/>
      <Dropdown/>
    </div>
  );

}