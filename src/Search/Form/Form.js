import React from 'react';

export default function Search(props) {
  const {
    value,
    onChange
  } = props;

  return (
    <div className="form-group">
      <input type="email"
			       className="form-control"
			       placeholder="Enter search video"
			       onChange={onChange}
			       value={value}
      />
    </div>
  );
}