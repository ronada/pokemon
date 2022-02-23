import { Link } from 'react-router-dom';
import "./NotFound.scss";

const NotFound = () => (
  <div className='not-found-wrapper'>
    <h1>404 - Page Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;