import React from 'react';

export default function DropdownItem(props) {
  const {
    snippet,
    id,
    onClick,
    setStateComponent,
  } = props;

  return (
    <div className="dropdown-item">
      <div className="row">
        <div className="col">
          <img src={snippet.thumbnails.default.url} alt="..." className="img-thumbnail"/>
        </div>
        <div className="col text-truncate">
          {snippet.title}
        </div>
        <div className="col">
          <button className="btn btn-dark btn-sm"
            onClick={onClick(setStateComponent,['selectVideo'], {title: snippet.title, id})}
          >
                        Play
          </button>
        </div>
      </div>
    </div>
  );
}