import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className="not-found-container">
      <div className="title">
        404 Not Found / How did you get here?
      </div>
      <Link to='/'>Go Back</Link>
    </div>
  );
}

export default NotFound;