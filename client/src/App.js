import { Fragment } from 'react';
import './App.css';

/* Components */

import InputRecipe from './components/InputRecipe';
import ListRecipes from './components/ListRecipes';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputRecipe />
        <ListRecipes />
      </div>
    </Fragment>
  );
}

export default App;
