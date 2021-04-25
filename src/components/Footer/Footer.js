import React from 'react';
import './Footer.css';

import { Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';

const Footer = () => {
    return (
        <div className='footer container_shadow'>
            <div className='footer_left'>
                <Typography className='footer_name'>
                    {resumeData.name} - 2021
                </Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Designed and developed by <a>ZIANI Shamsdine</a> <br/>
                </Typography>
            </div>

        </div>
    )
}

export default Footer
