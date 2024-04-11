
import { Link } from 'react-router-dom';
import './index.scss';

export default function App() {
  return (
    <div className="App">
      <h1>hi</h1>

      <ul>
        <li>
          <Link to='/contato'> Contato </Link>
        </li>
        <li>
          <Link to='/sobre'> Sobre</Link>
        </li>
      </ul>
    </div>
  );
}


