import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <Dashboard/>
          <Sidebar />
          <PageContent />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
