import React from 'react';
import Search from './Search/Search';
import Player from './Player/PlayerComponent';
import History from './History/HistoryComponent';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <Search/>
        </div>
      </div>
      <div className="row">
        <div className="col-4 align-self-start">
          <History/>
        </div>
        <div className="col-8 align-self-end">
          <Player/>
        </div>
      </div>
    </div>
  );
}
