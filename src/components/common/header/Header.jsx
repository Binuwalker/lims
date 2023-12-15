import React from 'react'
import { useLocation } from 'react-router-dom'
import { CANCEL_PAGE } from '../../../helpers/route-paths/Paths';
import TopBar from './layouts/TopBar';

const Header = () => {

  const location = useLocation();

  return (
    <div>
      {location.pathname === CANCEL_PAGE ? '' : <TopBar />}
    </div>
  )
}

export default Header