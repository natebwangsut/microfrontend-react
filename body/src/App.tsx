import React from 'react';
import ReactDOM from 'react-dom';

import Body from './Body';

export const App = () => {
  return <Body />
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
