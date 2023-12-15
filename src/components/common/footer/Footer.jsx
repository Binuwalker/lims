import React from 'react'
import { useLocation } from 'react-router-dom'
import { CANCEL_PAGE } from '../../../helpers/route-paths/Paths'
import { getQueryParam } from '../../../helpers/search-query-params/getQueryParams';
import FooterContents from './layouts/FooterContents';
import CopyRights from './layouts/CopyRights';
import Hline from '../../plugins/horizontal-line/HorizontalLine';

const Footer = () => {

    const location = useLocation();


    const id = getQueryParam('id');

    return (
        <div>
            {location.pathname === CANCEL_PAGE ? '' :
                <div className='footer'>
                    <FooterContents />
                    <Hline />
                    <CopyRights />
                </div>
            }
        </div>
    )
}

export default Footer