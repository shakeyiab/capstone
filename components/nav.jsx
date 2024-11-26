//nav bar

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      {' | '}
      <Link to={'/worldnews'}>World news</Link>
      {' | '}
      <Link to={'/Worldweather'}>World weather</Link>
      {' | '}
      <Link to={'/subscribe'}>Subscribe</Link>
      {' | '}
    </nav>
  );
}