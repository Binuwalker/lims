import React from 'react'
import TopScroller from '../../plugins/top-scroller/TopScroller'
import { useLocation } from 'react-router-dom'
import { CANCEL_PAGE } from '../../../helpers/route-paths/Paths';

const Scroller = () => {

  const location = useLocation();

  return (
    <div>
      {location.pathname === CANCEL_PAGE ? '' : <TopScroller />}
    </div>
  )
}

export default Scroller