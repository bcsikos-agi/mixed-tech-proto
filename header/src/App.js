import './App.css';
import { ReactComponent as ReactLogo } from "./logo.svg"
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="header">
      <p>Header Application in</p>
      <ReactLogo className="react-logo1" />
      <Link to="a" style={{ padding: '20px' }}>A</Link>
      <Link to="b" style={{ padding: '20px' }}>B</Link>
      <Link to="c" style={{ padding: '20px' }}>C</Link>
    </div>
  );
}

export default App;
