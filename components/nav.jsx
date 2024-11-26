//nav bar

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {' | '}
      <Link to={'/worldnews'}>World News</Link>
      {' | '}
      <Link to={'/Worldweather'}>World Weather</Link>
      {' | '}
      <Link to={'/subscribe'}>Subscribe</Link>
      {' | '}
    </nav>
  );
}