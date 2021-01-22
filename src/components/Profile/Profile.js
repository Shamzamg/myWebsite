import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline from '../Timeline/CustomTimeline';

import displayimage from '../../assets/images/displayimage.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Shamsdine</Typography>
                <Typography className='title'>Title</Typography>
            </div>

            <figure className='profile_image'>
                <img src={displayimage} alt='displayimage'></img>
            </figure>

            <div className='profile_information'>
                <CustomTimeline>
                </CustomTimeline><br/>
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
