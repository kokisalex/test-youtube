import React from 'react';
import { curry, assocPath, equals, findIndex, whereEq,} from 'ramda';

const Context = React.createContext();

export const {Provider, Consumer} = Context;

export const setStateComponent = curry((fn, key, value) => fn(assocPath(key, value, {})));

export const setHistoryLocalStorage = (value) => localStorage.setItem('history', JSON.stringify(value));

export const getHistoryLocalStorage = () => {
  const history = localStorage.getItem('history');
  if(history){
    return JSON.parse(history);
  }
  return [];
};

export default class StoreProvider extends React.Component {
	state = {
	  inputForm: '',
	  historyVideo: [],
	  requestVideo: [],
	  selectVideo: {
	    id: {
	      videoId: ''
	    }
	  },
	  removeIndex: '',
	};

	componentDidMount() {
	  this.setState({historyVideo: getHistoryLocalStorage()});
	}

	shouldComponentUpdate(nextProps, nextState) {
	  const {historyVideo} = this.state;
	  if (nextState.removeIndex.toString()) {
	    historyVideo.splice(nextState.removeIndex, 1);
	    this.setState({historyVideo, removeIndex: ''});
	    setHistoryLocalStorage(historyVideo);
	  }
	  const itemOrArray = findIndex(whereEq(nextState.selectVideo))(historyVideo);
	  if(!!~itemOrArray){
        	return true;
	  }
	  if(!equals(this.state.selectVideo, nextState.selectVideo)){
	    const newHistoryVideo = [...historyVideo, nextState.selectVideo];
	    this.setState({historyVideo: newHistoryVideo, inputForm: ''});
	    setHistoryLocalStorage(newHistoryVideo);
	  }

	  return true;
	}

	render() {
	  return (
	    <Provider value={{
	      state: this.state,
	      setStateComponent: setStateComponent(this.setState.bind(this))
	    }}>
	      {this.props.children}
	    </Provider>
	  );
	}
}
