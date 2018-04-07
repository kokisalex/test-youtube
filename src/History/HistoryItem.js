import React from 'react';

export default function HistoryItem(props) {
  const {
    title,
    index,
    onClick,
    setStateComponent,
    id,
    onClickSelect,
  } = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center"
      onClick={onClick(setStateComponent, ['selectVideo'], {id, title})}
    >
      {title}
      <button className="btn btn-dark btn-sm"
        onClick={onClickSelect(setStateComponent, ['removeIndex'], index)}
      >remove
      </button>
    </li>
  );

}