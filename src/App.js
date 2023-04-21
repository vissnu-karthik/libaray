import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';
function App() {
  return (
    <div className="App">
      <Sidebar nav = {<Navbar/>} />
      <Books/>
    </div>
  );
}

export default App;
