import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/CustomTimeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import GetAppIcon from '@material-ui/icons/GetApp';
import resumeData from '../../utils/resumeData';

import displayimage from '../../assets/images/displayimage.jpg';
import CustomButton from '../Button/Button'
import './Profile.css';
import CV from '../../assets/CV/CV.pdf';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            {link? (<Typography className='timelineItem_text'>
                <span><b>{title}</b>:</span> <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography className='timelineItem_text'><span><b>{title}</b>:</span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={displayimage} alt='displayimage'></img>
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Work' text={resumeData.title}/>
                    <CustomTimelineItem title='Mail' text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))}
                </CustomTimeline><br/>
                <div className='downloadcv_button'>
                    <a href={CV} style={{all: 'unset'}} download='ZIANI_Shamsdine_CV.pdf'>
                        <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile
