import { Link } from 'react-router-dom';
import '../App.css';

function Error404() {
  return (
    <div>
      <h1 className="errorTitle">404</h1>

            <img src="/CV-0 dizzy.png" alt="dizzy" className="dizzyPic" />

      <p>Oopsie! Looks like you're looking for the void!</p>
      <p>
        How about we go back to the beggining and use what's available, shall
        we?
      </p>

      <Link to="/">
        <button className="blueGlassButton">Return</button>
      </Link>
    </div>
  );
}

export default Error404;
