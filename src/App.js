import { useReducer } from 'react';
import { StateProvider } from './context';

import './App.css';
import Cat from './components/Cat';

function App() {

  const initialState = {
    activity: 'napping'
  }

  const contextReducer = (state, action) => {
    switch (action.type) {
      case 'ACTION_NAP':
        return {
          activity: 'napping'
        }
        case 'ACTION_PLAY':
        return {
          activity: 'playing'
        }
        case 'ACTION_EAT':
        return {
          activity: 'eating'
        }
        default:
          return state
    }
  }


  return (
      <div className="App">
         <StateProvider 
          value={useReducer(contextReducer, initialState)}
          >
        <h1>Cat + Context</h1>
        <Cat />
        </StateProvider>
      </div>
    
  );
}

export default App;
