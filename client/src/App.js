import { Fragment } from 'react';
import './App.css';

/* Components */

import InputRecipe from './components/InputRecipe';

function App() {
  return (
    <Fragment>
      <div className='container'>
      <InputRecipe />
      </div>
    </Fragment>
  );
}

export default App;
