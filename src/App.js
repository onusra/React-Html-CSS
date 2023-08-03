import logo from './logo.svg';
import './App.css';
import "../src/styles/style.css"
import Layout from './Pages/Layout';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
