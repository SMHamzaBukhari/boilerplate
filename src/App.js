import { Provider } from 'react-redux';
import './App.css';
import Routing from './config/routing/routing';
import store from './config/redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
       <Routing/>
      </Provider>
      </header>
    </div>
  );
}

export default App;
