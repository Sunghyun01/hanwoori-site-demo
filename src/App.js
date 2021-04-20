import Main from './page/main';
import ListView from './page/listView';
import Layout from './template/layout';

import './include/bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route exact path='/demo' component={Layout} />
        <Route exact path='/listView/:no' component={ListView} />
    </BrowserRouter>
  );
}

export default App;
