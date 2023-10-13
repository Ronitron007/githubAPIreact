import _ from 'lodash';
import './App.css';
import ResultListComponent from './ResultsComponent';
import UserProvider from './UsersProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ResultListComponent />
      </UserProvider>
    </div>
  );
}

export default App;
