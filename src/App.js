import Layout from './components/Layout';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout><p>layout della pagina</p></Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
