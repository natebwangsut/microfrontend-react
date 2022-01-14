import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';

export const App = () => {
  return <Header />
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
