import React from 'react';

export default function Dropdown(props) {
  const {
    show,
    items,
  } = props;

  return(
    <div className={show}>
      {
        items
      }
    </div>
  );
}