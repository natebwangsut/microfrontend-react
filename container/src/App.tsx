import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loading from './Loading';

// @ts-ignore
const Header = React.lazy(() => import('header/Header'));

// @ts-ignore
const Body = React.lazy(() => import('body/Body'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Header />
        <Body />
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
