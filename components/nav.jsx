import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {' | '}
      <Link to={'/subscribe'}>subscribe</Link>
      {' | '}
      <Link to={'/worldnews'}>worldnews</Link>
      {' | '}
      <Link to={'/notfound'}>notfound</Link>
    </nav>
  );
}